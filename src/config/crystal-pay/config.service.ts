import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ICrystalPayConfigService } from "./config.interface";


@Injectable()
export class CrystalPayConfigService implements ICrystalPayConfigService {
  constructor(private readonly configService: ConfigService) {}

  get cashbox(): string {
    return String(this.configService.get<string>('crystalPay.cashbox'))
  }

  get apiUrl(): string {
    return String(this.configService.get<string>('crystalPay.apiUrl'))
  }

  get apiKey(): string {
    return String(this.configService.get<string>('crystalPay.apiKey'))
  }

  get depositTTL(): number {
    return Number(this.configService.get<number>('crystalPay.depositTTL'))
  }
}