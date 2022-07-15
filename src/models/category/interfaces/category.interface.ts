import { Item } from "../../item/entities/item.entity";

export interface ICategory {
  name: string
  img: string
  items: Item[]
}