import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { IBlockIoConfigService } from "./config.interface";

@Injectable()
export class BlockIoConfigService implements IBlockIoConfigService {
  constructor(private readonly configService: ConfigService) {}

  get apiBtcKey(): string {
    return String(this.configService.get<string>('blockIo.apiBtcKey'))
  }

  get apiLtcKey(): string {
    return String(this.configService.get<string>('blockIo.apiLtcKey'))
  }

  get apiUrl(): string {
    return String(this.configService.get<string>('blockIo.apiUrl'))
  }

  get pin(): string {
    return String(this.configService.get<string>('blockIo.pin'))
  }

  get depositTTL(): number {
    return Number(this.configService.get<number>('blockIo.depositTTL'))
  }

}