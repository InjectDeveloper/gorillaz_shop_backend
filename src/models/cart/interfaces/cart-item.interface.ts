import { Product } from "../../product/entities/product.entity";
import { Cart } from "../entities/cart.entity";

export interface ICartItem {
  cart: Cart
  product: Product
}