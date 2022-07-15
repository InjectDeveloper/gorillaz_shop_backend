import { UserRolesEnum } from "../constants/user-roles.enum";
import { Deposit } from "../../deposit/entities/deposit.entity";
import { Review } from "../../review/entities/review.entity";
import { Item } from "../../item/entities/item.entity";
import { Cart } from "../../cart/entities/cart.entity";

export interface IUserShowable {
  email: string
  avatar: string
  balance: number
  deposits: Deposit[]
  favouriteItems: Item[]
  history: Cart[]
  reviews: Review[]
  role: UserRolesEnum
}

export interface IUser extends IUserShowable{
  password: string
  isRegisteredWithGoogle: boolean
  refreshToken: string
}