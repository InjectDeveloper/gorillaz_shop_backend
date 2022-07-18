import { Injectable } from "@nestjs/common";
import { IJwtAccessService } from "./interfaces/jwt.access.interface";
import { JwtService } from "@nestjs/jwt";
import { IJwtAccessPayload } from "./interfaces/jwt.access.payload.interface";

@Injectable()
export class JwtAccessService implements IJwtAccessService{
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  async createToken(payload: IJwtAccessPayload): Promise<string> {
    const token = await this.jwtService.sign(payload)
    return token
  }

  async validateToken(token: string): Promise<IJwtAccessPayload | null> {
    try {
      const payload = await this.jwtService.verify(token)
      return payload
    } catch (e) {
      return null
    }
  }

}