export interface IBlockIoConfigService {
  get apiBtcKey(): string
  get apiLtcKey(): string
  get pin(): string
  get apiUrl(): string
  get depositTTL(): number
}

export const IBlockIoConfigService = Symbol('IBlockIoConfigService')