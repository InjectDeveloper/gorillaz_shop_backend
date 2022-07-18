import { registerAs } from '@nestjs/config'

export default registerAs('jwt', () => ({
  accessTokenTTL: 1 * 60 * 30, // 15 minutes
  accessTokenSecret: process.env.JWT_ACCESS_SECRET,

  refreshTokenTTL: 1 * 120 * 60 * 15, // 15 days
  refreshTokenSecret: process.env.JWT_REFRESH_SECRET,
}))