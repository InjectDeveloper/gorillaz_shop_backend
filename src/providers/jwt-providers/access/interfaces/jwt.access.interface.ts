import { UserRolesEnum } from "../../../../models/user/constants/user-roles.enum";
import { IJwtAccessPayload } from "./jwt.access.payload.interface";

export interface IJwtAccessService {
  createToken(payload: IJwtAccessPayload): Promise<string>
  validateToken(token: string): Promise<IJwtAccessPayload | null>
}

export const IJwtAccessService = Symbol('IJwtAccessService')