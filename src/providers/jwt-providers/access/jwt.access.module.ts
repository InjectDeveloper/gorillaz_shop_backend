import { JwtConfigModule } from "../../../config/jwt/config.module";
import { JwtModule } from "@nestjs/jwt";
import { IJwtConfigService } from "../../../config/jwt/config.interface";
import { Module } from "@nestjs/common";
import { JwtAccessService } from "./jwt.access.service";
import { IJwtAccessService } from "./interfaces/jwt.access.interface";

@Module({
  imports: [
    JwtConfigModule,
    JwtModule.registerAsync({
      imports: [JwtConfigModule],
      useFactory: async (jwtConfigService: IJwtConfigService) => ({
        secret: jwtConfigService.accessTokenSecret,
        signOptions: {
          expiresIn: `${jwtConfigService.accessTokenTTL}s`
        }
      }),
      inject: [IJwtConfigService]
    })
  ],
  providers: [
    {
      provide: IJwtAccessService,
      useClass: JwtAccessService
    }
  ],
  exports: [
    {
      provide: IJwtAccessService,
      useClass: JwtAccessService
    }
  ]
})
export class JwtAccessModule {}