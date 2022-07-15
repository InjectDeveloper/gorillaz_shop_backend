import { Expose } from 'class-transformer';
import { Deposit } from "../../deposit/entities/deposit.entity";
import { ModelEntity } from "../../../core/serializers/model.serializer";

import { User } from "../../user/entities/user.entity";
import { ICart } from "../interfaces/cart.interface";
import { CartStatusesEnum } from "../constants/cart-statuses.enum";
import { CartItem } from "../entities/cart-item.entity";

export const defaultCartGroupsForSerializing: string[] = [];
export const extendedCartGroupsForSerializing: string[] = [
  ...defaultCartGroupsForSerializing,
  'cart.timestamps'
]
export const allCartGroupsForSerializing: string[] = [
  ...extendedCartGroupsForSerializing
];

export class CartEntity extends ModelEntity implements ICart {
  constructor() {
    super()
  }

  user: User

  status: CartStatusesEnum

  sum: number

  items: CartItem[]

  @Expose({ groups: ['cart.timestamps'] })
  createdAt: Date;
}
