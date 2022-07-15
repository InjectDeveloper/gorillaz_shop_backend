import { Expose } from 'class-transformer';
import { ModelEntity } from "../../../core/serializers/model.serializer";
import { ICategory } from "../interfaces/category.interface";
import { Item } from "../../item/entities/item.entity";


export const defaultCategoryGroupsForSerializing: string[] = [];
export const extendedCategoryGroupsForSerializing: string[] = [
  ...defaultCategoryGroupsForSerializing,
  'category.timestamps'
]
export const allCategoryGroupsForSerializing: string[] = [
  ...defaultCategoryGroupsForSerializing
];

export class CategoryEntity extends ModelEntity implements ICategory {
  constructor() {
    super()
  }

  items: Item[]

  name: string

  img: string

  @Expose({ groups: ['category.timestamps'] })
  createdAt: Date;
}