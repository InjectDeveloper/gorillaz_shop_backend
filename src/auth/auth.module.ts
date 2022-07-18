import { Module } from '@nestjs/common';
import { JwtConfigModule } from "../config/jwt/config.module";
import { UserModule } from "../models/user/user.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtAccessModule } from "../providers/jwt-providers/access/jwt.access.module";
import { JwtRefreshModule } from "../providers/jwt-providers/refresh/jwt.refresh.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersRepository } from "../models/user/user.repository";
import { AuthLocalStrategy } from "./strategies/auth.local.strategy";
import { JwtAccessStrategy } from "./strategies/jwt.access.strategy";
import { JwtRefreshStrategy } from "./strategies/jwt.refresh.strategy";
import { AuthGoogleStrategy } from "./strategies/auth.google.strategy";
import { GoogleConfigModule } from "../config/google/config.module";

@Module({
  imports: [
    PassportModule,
    JwtConfigModule,
    GoogleConfigModule,
    TypeOrmModule.forFeature([UsersRepository]),

    JwtAccessModule,
    JwtRefreshModule,

    UserModule,

  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthLocalStrategy,
    JwtAccessStrategy,
    JwtRefreshStrategy,
    AuthGoogleStrategy
  ],
})
export class AuthModule {}
