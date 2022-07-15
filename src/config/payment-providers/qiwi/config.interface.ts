export interface IQiwiConfigService {
  get adminPhone(): number
  get apiUrl(): string
  get apiKey(): string
  get depositTTL(): number
}

export const IQiwiConfigService = Symbol('IQiwiConfigService')