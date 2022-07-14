import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'
import configuration from './configuration'
import { IQiwiConfigService } from "./config.interface";
import { QiwiConfigService } from "./config.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        QIWI_PHONE: Joi.number().required(),
        QIWI_API_URL: Joi.string().required(),
        QIWI_API_KEY: Joi.string().required(),
        QIWI_DEPOSIT_TTL: Joi.number().required(),
      }),
    }),
  ],
  providers: [
    {
      provide: IQiwiConfigService,
      useClass: QiwiConfigService,
    },
  ],
  exports: [
    {
      provide: IQiwiConfigService,
      useClass: QiwiConfigService,
    },
  ],
})
export class QiwiConfigModule {}