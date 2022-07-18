import { UserRolesEnum } from "../../../../models/user/constants/user-roles.enum";

export interface IJwtRefreshPayload {
  userId: string,
  role: UserRolesEnum
}