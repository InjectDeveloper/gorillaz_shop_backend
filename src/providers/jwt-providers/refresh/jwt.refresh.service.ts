import { Injectable } from "@nestjs/common";
import { IJwtRefreshService } from "./interfaces/jwt.refresh.interface";
import { JwtService } from "@nestjs/jwt";
import { IJwtRefreshPayload } from "./interfaces/jwt.refresh.payload.interface";
import * as bcrypt from "bcrypt"

@Injectable()
export class JwtRefreshService implements IJwtRefreshService{
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  async createToken(payload: IJwtRefreshPayload): Promise<string> {
    const token = await this.jwtService.sign(payload)
    return token
  }

  async validateToken(token: string): Promise<IJwtRefreshPayload | null> {
    try {
      const payload = await this.jwtService.verify(token)
      return payload
    } catch (e) {
      return null
    }
  }

  async getHashedToken(token:string): Promise<string> {
    const data = await bcrypt.hash(token, 10)
    return data
  }

  async getIfTokensMatching(hashedToken: string, token: string): Promise<IJwtRefreshPayload | null> {
    const isPasswordsMatching = await bcrypt.compare(token, hashedToken)
    if (!isPasswordsMatching) {
      return null
    }

    const payload = await this.validateToken(token)
    if (!payload) {
      return null
    }

    return payload
  }

}