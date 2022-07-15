import { Expose } from 'class-transformer';
import { IUser } from '../interfaces/user.interface';
import { ModelEntity } from "../../../core/serializers/model.serializer";
import { UserRolesEnum } from "../constants/user-roles.enum";
import { Deposit } from "../../deposit/entities/deposit.entity";
import { Review } from "../../review/entities/review.entity";
import { Item } from "../../item/entities/item.entity";
import { Cart } from "../../cart/entities/cart.entity";


export const defaultUserGroupsForSerializing: string[] = [];
export const extendedUserGroupsForSerializing: string[] = [
  ...defaultUserGroupsForSerializing,
  'user.timestamps'
]
export const allUserGroupsForSerializing: string[] = [
  ...extendedUserGroupsForSerializing,
  'user.password',
  'user.refreshToken'
];

export class UserEntity extends ModelEntity implements IUser {
  constructor() {
    super()
  }

  email: string

  @Expose({ groups: ['user.password'] })
  password: string

  isRegisteredWithGoogle: boolean

  @Expose({ groups: ['user.refreshToken'] })
  refreshToken: string

  avatar: string

  balance: number

  cart: Cart

  deposits: Deposit[]

  favouriteItems: Item[]

  history: Cart[]

  reviews: Review[]

  role: UserRolesEnum

  @Expose({ groups: ['user.timestamps'] })
  createdAt: Date;
}