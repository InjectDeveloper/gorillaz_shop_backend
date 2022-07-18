import { UserEntity } from "../../models/user/serializer/user.serializer";

export interface AuthResponceInterface {
  user: UserEntity,
  tokens: {
    accessToken: string,
    refreshToken: string
  }
}