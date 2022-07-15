import { Expose } from 'class-transformer';
import { ModelEntity } from "../../../core/serializers/model.serializer";
import { Deposit } from "../../deposit/entities/deposit.entity";
import { Review } from "../../review/entities/review.entity";
import { Item } from "../../item/entities/item.entity";
import { IItem } from "../interfaces/item.interface";
import { Category } from "../../category/entities/category.entity";
import { User } from "../../user/entities/user.entity";
import { Product } from "../../product/entities/product.entity";
import { CartItem } from "../../cart/entities/cart-item.entity";


export const defaultItemGroupsForSerializing: string[] = [];
export const extendedItemGroupsForSerializing: string[] = [
  ...defaultItemGroupsForSerializing,
  'item.timestamps'
]
export const allItemGroupsForSerializing: string[] = [
  ...extendedItemGroupsForSerializing,
  'item.usersFavourite',
  'item.products',
];

export class ItemEntity extends ModelEntity implements IItem {
  constructor() {
    super()
  }

  name: string;

  description: string;

  category: Category;

  img: string

  bannerImg: string

  tag: string

  rating: number

  price: number

  @Expose({ groups: ['item.products'] })
  products: Product[]

  @Expose({ groups: ['item.usersFavourite'] })
  usersFavourite: User[]

  @Expose({ groups: ['item.timestamps'] })
  createdAt: Date;
}