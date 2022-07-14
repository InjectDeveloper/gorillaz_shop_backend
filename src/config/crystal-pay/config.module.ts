import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'
import configuration from './configuration'
import { ICrystalPayConfigService } from "./config.interface";
import { CrystalPayConfigService } from "./config.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        CRYSTALPAY_CASHBOX_NAME: Joi.string().required(),
        CRYSTALLPAY_API_URL: Joi.string().required(),
        CRYSTALPAY_API_KEY: Joi.string().required(),
        CRYSTALPAY_DEPOSIT_TTL: Joi.number().required(),
      }),
    }),
  ],
  providers: [
    {
      provide: ICrystalPayConfigService,
      useClass: CrystalPayConfigService,
    },
  ],
  exports: [
    {
      provide: ICrystalPayConfigService,
      useClass: CrystalPayConfigService,
    },
  ],
})
export class CrystalPayConfigModule {}