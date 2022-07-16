import { Expose, Type } from "class-transformer";
import { Deposit } from "../../deposit/entities/deposit.entity";
import { ModelEntity } from "../../../core/serializers/model.serializer";

import { User } from "../../user/entities/user.entity";
import { ICart } from "../interfaces/cart.interface";
import { CartStatusesEnum } from "../constants/cart-statuses.enum";
import { CartItem } from "../entities/cart-item.entity";
import { ICartItem } from "../interfaces/cart-item.interface";
import { Cart } from "../entities/cart.entity";
import { Product } from "../../product/entities/product.entity";
import { ProductEntity } from "../../product/serializer/product.serializer";

export const defaultCartItemGroupsForSerializing: string[] = [];
export const extendedCartItemGroupsForSerializing: string[] = [
  ...defaultCartItemGroupsForSerializing,
  'cartItem.timestamps'
]
export const allCartItemGroupsForSerializing: string[] = [
  ...extendedCartItemGroupsForSerializing
];

export class CartItemEntity extends ModelEntity implements ICartItem {
  constructor() {
    super()
  }

  cart: Cart

  @Type(() => ProductEntity)
  product: Product

  @Expose({ groups: ['cartItem.timestamps'] })
  createdAt: Date;
}
