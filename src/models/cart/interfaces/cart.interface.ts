import { User } from "../../user/entities/user.entity";
import { CartItem } from "../entities/cart-item.entity";

export interface ICart {
  user: User
  sum: number
  items: CartItem[]
}