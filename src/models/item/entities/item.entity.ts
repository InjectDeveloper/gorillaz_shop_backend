import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IItem } from "../interfaces/item.interface";
import { Category } from "../../category/entities/category.entity";
import { User } from "../../user/entities/user.entity";
import { Product } from "../../product/entities/product.entity";
import { CartItem } from "../../cart/entities/cart-item.entity";

@Entity({ name: "items" })
export class Item implements IItem {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  name: string;

  @Column({ type: "text" })
  description: string;

  @ManyToOne(() => Category, (category) => category.items)
  category: Category;

  @Column()
  img: string

  @Column()
  bannerImg: string

  @Column()
  tag: string

  @Column()
  rating: number

  @Column({ type: "real" })
  price: number

  @OneToMany(() => Product, (product) => product.item)
  products: Product[]

  @ManyToMany(() => User, (user) => user.favouriteItems)
  usersFavourite: User[]

  @UpdateDateColumn({ name: 'created_at' })
  createdAt: Date
}