import { registerAs } from '@nestjs/config'

export default registerAs('blockIo', () => ({
  apiBtcKey: process.env.BLOCKIO_BTC_API_KEY,
  apiLtcKey: process.env.BLOCKIO_LTC_API_KEY,
  pin: process.env.BLOCKIO_PIN,
  apiUrl: process.env.BLOCKIO_API_URL,
  depositTTL: process.env.BLOCKIO_DEPOSIT_TTL,
}))