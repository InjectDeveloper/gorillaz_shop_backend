import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IGoogleConfigService } from "./config.interface";

@Injectable()
export class GoogleConfigService implements IGoogleConfigService {
  constructor(private readonly configService: ConfigService) {}

  get clientId(): string {
    return String(this.configService.get<string>('google.clientId'))
  }

  get clientSecret(): string {
    return String(this.configService.get<string>('google.clientSecret'))
  }
}