import { registerAs } from '@nestjs/config'

export default registerAs('qiwi', () => ({
  adminPhone: process.env.QIWI_PHONE,
  apiUrl: process.env.QIWI_API_URL,
  apiKey: process.env.QIWI_API_KEY,
  depositTTL: process.env.QIWI_DEPOSIT_TTL,
}))