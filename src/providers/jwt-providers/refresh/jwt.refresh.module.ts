import { JwtConfigModule } from "../../../config/jwt/config.module";
import { JwtModule } from "@nestjs/jwt";
import { IJwtConfigService } from "../../../config/jwt/config.interface";
import { Module } from "@nestjs/common";
import { IJwtRefreshService } from "./interfaces/jwt.refresh.interface";
import { JwtRefreshService } from "./jwt.refresh.service";

@Module({
  imports: [
    JwtConfigModule,
    JwtModule.registerAsync({
      imports: [JwtConfigModule],
      useFactory: async (jwtConfigService: IJwtConfigService) => ({
        secret: jwtConfigService.refreshTokenSecret,
        signOptions: {
          expiresIn: `${jwtConfigService.refreshTokenTTL}s`
        }
      }),
      inject: [IJwtConfigService]
    })
  ],
  providers: [
    {
      provide: IJwtRefreshService,
      useClass: JwtRefreshService
    }
  ],
  exports: [
    {
      provide: IJwtRefreshService,
      useClass: JwtRefreshService
    }
  ]
})
export class JwtRefreshModule {}