import { BadRequestException, Inject, Injectable } from "@nestjs/common";
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
import { IJwtRefreshService } from "../../providers/jwt-providers/refresh/interfaces/jwt.refresh.interface";

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') implements AbstractPassportStrategy {
  constructor(
    @Inject(IJwtRefreshService) private readonly jwtRefreshService: IJwtRefreshService,
    @Inject(IJwtConfigService) private readonly jwtConfigService: IJwtConfigService,
    @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfigService.refreshTokenSecret,
      ignoreExpiration: false,
      passReqToCallback: true
    })
  }

  async validate(req: Request, payload: IJwtAccessPayload): Promise<UserEntity> {
    const userEntity = await this.usersRepository.get(payload.userId)
    const isTokensMatching = await this.jwtRefreshService.getIfTokensMatching(userEntity!.refreshToken, req.headers.authorization!.split(" ")[1]!)
    if (!isTokensMatching) {
      throw new BadRequestException("Пользователь не авторизован")
    }
    return userEntity!
  }
}