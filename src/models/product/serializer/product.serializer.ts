import { Expose } from 'class-transformer';
import { ModelEntity } from "../../../core/serializers/model.serializer";
import { Deposit } from "../../deposit/entities/deposit.entity";
import { Review } from "../../review/entities/review.entity";
import { Item } from "../../item/entities/item.entity";
import { IProduct } from "../interfaces/product.interface";


export const defaultProductGroupsForSerializing: string[] = [];
export const extendedProductGroupsForSerializing: string[] = [
  ...defaultProductGroupsForSerializing,
  'product.timestamps'
]
export const allProductGroupsForSerializing: string[] = [
  ...extendedProductGroupsForSerializing,
];

export class ProductEntity extends ModelEntity implements IProduct {
  constructor() {
    super()
  }

  item: Item;

  data: string;

  isSale: boolean;

  @Expose({ groups: ['product.timestamps'] })
  createdAt: Date;
}