import { Item } from "../../item/entities/item.entity";

export interface IProduct {
  item: Item
  data: string
  isSale: boolean
}