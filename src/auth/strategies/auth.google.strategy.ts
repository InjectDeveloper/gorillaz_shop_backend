import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

import { Inject, Injectable } from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import { UserGoogleDto } from "../dto/user-from-google.dto";
import { IGoogleConfigService } from "../../config/google/config.interface";

@Injectable()
export class AuthGoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor(
    @Inject(IGoogleConfigService) private readonly googleConfigService: IGoogleConfigService,
  ) {
    super({
      clientID: googleConfigService.clientId,
      clientSecret: googleConfigService.clientSecret,
      callbackURL: 'http://localhost:3000/auth/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<UserGoogleDto> {
    const { name, emails, photos } = profile
    const user: UserGoogleDto = {
      email: emails[0].value,
      name: name.givenName,
      picture: photos[0].value,
      accessToken
    }
    return user
  }
}