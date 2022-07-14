import { registerAs } from '@nestjs/config'

export default registerAs('crystalPay', () => ({
  cashbox: process.env.CRYSTALPAY_CASHBOX_NAME,
  apiUrl: process.env.CRYSTALLPAY_API_URL,
  apiKey: process.env.CRYSTALPAY_API_KEY,
  depositTTL: process.env.CRYSTALPAY_DEPOSIT_TTL,
}))