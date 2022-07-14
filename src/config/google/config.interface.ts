export interface IGoogleConfigService {
  get clientId(): string
  get clientSecret(): string
}

export const IGoogleConfigService = Symbol('IGoogleConfigService')