import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "../models/user/dto/create-user.dto";
import { UserService } from "../models/user/user.service";
import * as bcrypt from "bcrypt"
import { JwtService } from "@nestjs/jwt";
import { IJwtConfigService } from "../config/jwt/config.interface";
import { JwtConfigService } from "../config/jwt/config.service";
import { IJwtAccessService } from "../providers/jwt-providers/access/interfaces/jwt.access.interface";
import { IJwtRefreshService } from "../providers/jwt-providers/refresh/interfaces/jwt.refresh.interface";
import { UserEntity } from "../models/user/serializer/user.serializer";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersRepository } from "../models/user/user.repository";
import { UserNotFoundException } from "../core/exceptions/user-not-found.exception";
import { AuthResponceInterface } from "./interfaces/auth.responce.interface";
import { UserGoogleDto } from "./dto/user-from-google.dto";
import { v4 as uuidv4 } from 'uuid';
import { InvalidCredentialsException } from "../core/exceptions/invalid-credentials.exception";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
    private readonly userService: UserService,
    @Inject(IJwtAccessService) private readonly jwtAccessService: IJwtAccessService,
    @Inject(IJwtRefreshService) private readonly jwtResfreshService: IJwtRefreshService
  ) {}

  async localRegister(userDto: CreateUserDto): Promise<AuthResponceInterface> {
    const hashedPassword = await bcrypt.hash(userDto.password, 10)
    const userEntity = await this.userService.create({
      ...userDto,
      password: hashedPassword
    })

    return await this.login(userEntity)
  }

  async authenticateWithGoogle(userDto: UserGoogleDto): Promise<AuthResponceInterface> {
    const candidate = await this.usersRepository.findByEmail(userDto.email)
    if (candidate) {
      if(candidate.isRegisteredWithGoogle) {
        return await this.login(candidate)
      }
      else throw new InvalidCredentialsException()
    }

    const password = uuidv4()
    const hashedPassword = await bcrypt.hash(password, 10)
    const userEntity = await this.userService.createWithGoogle({
      email: userDto.email,
      password: hashedPassword
    })

    return await this.login(userEntity)
  }

  async login(userEntity: UserEntity): Promise<AuthResponceInterface> {

    const tokens = {
      accessToken: await this.jwtAccessService.createToken({ userId: userEntity.id, role: userEntity.role }),
      refreshToken: await this.jwtResfreshService.createToken({ userId: userEntity.id, role: userEntity.role })
    }

    const hashedRefreshToken = await this.jwtResfreshService.getHashedToken(tokens.refreshToken)
    await this.usersRepository.updateRefreshToken(userEntity, hashedRefreshToken)

    const res: AuthResponceInterface = {
      user: userEntity,
      tokens
    }

    return res
  }
}
