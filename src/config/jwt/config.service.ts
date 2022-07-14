import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IJwtConfigService } from "./config.interface";

@Injectable()
export class JwtConfigService implements IJwtConfigService {
  constructor(private readonly configService: ConfigService) {}

  get accessTokenTTL(): number {
    return Number(this.configService.get<number>('jwt.accessTokenTTL'))
  }

  get accessTokenSecret(): string {
    return String(this.configService.get<string>('jwt.accessTokenSecret'))
  }

  get refreshTokenTTL(): number {
    return Number(this.configService.get<number>('jwt.refreshTokenTTL'))
  }

  get refreshTokenSecret(): string {
    return String(this.configService.get<string>('jwt.refreshTokenSecret'))
  }
}