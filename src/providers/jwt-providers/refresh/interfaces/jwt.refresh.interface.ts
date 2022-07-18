import { IJwtRefreshPayload } from "./jwt.refresh.payload.interface";

export interface IJwtRefreshService {
  createToken(payload: IJwtRefreshPayload): Promise<string>
  validateToken(token: string): Promise<IJwtRefreshPayload | null>
  getHashedToken(token: string): Promise<string>
  getIfTokensMatching(hashedToken: string, token: string): Promise<IJwtRefreshPayload | null>
}

export const IJwtRefreshService = Symbol('IJwtRefreshService')