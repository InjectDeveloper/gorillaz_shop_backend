import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AbstractPassportStrategy } from "../../core/strategies/passport/passport.abstract";
import { IJwtAccessService } from "../../providers/jwt-providers/access/interfaces/jwt.access.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Request } from 'express';
import { UsersRepository } from "../../models/user/user.repository";
import { ExtractJwt, Strategy } from "passport-jwt"
import { IJwtConfigService } from "../../config/jwt/config.interface";
import { IJwtAccessPayload } from "../../providers/jwt-providers/access/interfaces/jwt.access.payload.interface";
import { UserEntity } from "../../models/user/serializer/user.serializer";

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'jwt-access') implements AbstractPassportStrategy {
  constructor(
    @Inject(IJwtAccessService) private readonly jwtAccessService: IJwtAccessService,
    @Inject(IJwtConfigService) private readonly jwtConfigService: IJwtConfigService,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfigService.accessTokenSecret,
      ignoreExpiration: false
    })
  }

  async validate(payload: IJwtAccessPayload): Promise<UserEntity> {

    const userEntity = await this.usersRepository.get(payload.userId)
    return userEntity!
  }
}