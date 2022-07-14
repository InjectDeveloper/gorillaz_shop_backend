import { Expose } from 'class-transformer';
import { IUser } from '../interfaces/user.interface';
import { ModelEntity } from "../../../core/serializers/model.serializer";
import { UserRolesEnum } from "../constants/user-roles.enum";


export const defaultUserGroupsForSerializing: string[] = ['user.timestamps'];
export const allUserGroupsForSerializing: string[] = [
  ...defaultUserGroupsForSerializing,
  'user.password',
  'user.refreshToken'
];

export class UserEntity extends ModelEntity implements IUser {
  email: string

  @Expose({ groups: ['user.password'] })
  password: string

  isRegisteredWithGoogle: boolean

  @Expose({ groups: ['user.refreshToken'] })
  refreshToken: string

  avatar: string

  balance: number

  cart: string

  deposits: string

  favouriteItems: string

  history: string

  reviews: string

  role: UserRolesEnum

  @Expose({ groups: ['user.timestamps'] })
  createdAt: Date;
}