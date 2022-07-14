import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi'
import configuration from './configuration'
import { IGoogleConfigService } from "./config.interface";
import { GoogleConfigService } from "./config.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        GOOGLE_CLIENT_ID: Joi.string().required(),
        GOOGLE_CLIENT_SECRET: Joi.string().required(),
      }),
    }),
  ],
  providers: [
    {
      provide: IGoogleConfigService,
      useClass: GoogleConfigService,
    },
  ],
  exports: [
    {
      provide: IGoogleConfigService,
      useClass: GoogleConfigService,
    },
  ],
})
export class GoogleConfigModule {}