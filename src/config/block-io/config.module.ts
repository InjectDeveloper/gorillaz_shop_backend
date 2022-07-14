import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'
import configuration from './configuration'
import { IBlockIoConfigService } from "./config.interface";
import { BlockIoConfigService } from "./config.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        BLOCKIO_BTC_API_KEY: Joi.string().required(),
        BLOCKIO_LTC_API_KEY: Joi.string().required(),
        BLOCKIO_PIN: Joi.string().required(),
        BLOCKIO_API_URL: Joi.string().required(),
        BLOCKIO_DEPOSIT_TTL: Joi.number().required(),
      }),
    }),
  ],
  providers: [
    {
      provide: IBlockIoConfigService,
      useClass: BlockIoConfigService,
    },
  ],
  exports: [
    {
      provide: IBlockIoConfigService,
      useClass: BlockIoConfigService,
    },
  ],
})
export class BlockIoConfigModule {}