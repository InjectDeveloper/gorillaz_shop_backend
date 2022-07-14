import { UserRolesEnum } from "../constants/user-roles.enum";

export interface IUserShowable {
  email: string
  avatar: string
  balance: number
  deposits: string
  favouriteItems: string
  history: string
  reviews: string
  role: UserRolesEnum
}

export interface IUser extends IUserShowable{
  password: string
  isRegisteredWithGoogle: boolean
  refreshToken: string
}