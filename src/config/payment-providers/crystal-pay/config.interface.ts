export interface ICrystalPayConfigService {
  get cashbox(): string
  get apiUrl(): string
  get apiKey(): string
  get depositTTL(): number
}

export const ICrystalPayConfigService = Symbol('ICrystalPayConfigService')