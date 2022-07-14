import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IQiwiConfigService } from "./config.interface";

@Injectable()
export class QiwiConfigService implements IQiwiConfigService {
  constructor(private readonly configService: ConfigService) {}

  get adminPhone(): number {
    return Number(this.configService.get<number>('qiwi.adminPhone'))
  }

  get apiUrl(): string {
    return String(this.configService.get<string>('qiwi.apiUrl'))
  }

  get apiKey(): string {
    return String(this.configService.get<string>('qiwi.apiKey'))
  }

  get depositTTL(): number {
    return Number(this.configService.get<number>('qiwi.depositTTL'))
  }
}