import { User } from "../../user/entities/user.entity";
import { Category } from "../../category/entities/category.entity";
import { Product } from "../../product/entities/product.entity";

export interface IItemShowable {
  name: string
  description: string
  category: Category
  img: string
  bannerImg: string
  rating: number
  tag: string
  price: number
}

export interface IItem extends IItemShowable{
  usersFavourite: User[]
  products: Product[]
}