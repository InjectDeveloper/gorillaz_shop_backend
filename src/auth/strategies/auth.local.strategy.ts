import { Injectable, Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import * as bcrypt from "bcrypt"
import { AbstractPassportStrategy } from "../../core/strategies/passport/passport.abstract";
import { AuthService } from "../auth.service";
import { UserEntity } from "../../models/user/serializer/user.serializer";
import { UsersRepository } from "../../models/user/user.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { InvalidCredentialsException } from "../../core/exceptions/invalid-credentials.exception";

@Injectable()
export class AuthLocalStrategy extends PassportStrategy(Strategy, 'local') implements AbstractPassportStrategy {
  constructor(
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
    private readonly authService: AuthService
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    })
  }

  async validate(email: string, password: string): Promise<UserEntity> {
    const userEntity = await this.usersRepository.findByEmail(email)
    if (!userEntity) throw new InvalidCredentialsException()

    const isPasswordsMatching = await bcrypt.compare(password, userEntity.password)
    if (!isPasswordsMatching) throw new InvalidCredentialsException()

    return userEntity
  }
}