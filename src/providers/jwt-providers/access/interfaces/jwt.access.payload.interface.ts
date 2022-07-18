import { UserRolesEnum } from "../../../../models/user/constants/user-roles.enum";

export interface IJwtAccessPayload {
  userId: string,
  role: UserRolesEnum
}