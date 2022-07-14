export interface IJwtConfigService {
  get accessTokenTTL(): number
  get accessTokenSecret(): string

  get refreshTokenTTL(): number
  get refreshTokenSecret(): string
}

export const IJwtConfigService = Symbol('IJwtConfigService')