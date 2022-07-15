import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { IProduct } from "../interfaces/product.interface";
import { Item } from "../../item/entities/item.entity";

@Entity({ name: "products" })
export class Product implements IProduct{
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Item, (item) => item.products)
  item: Item;

  @Column()
  data: string;

  @Column()
  isSale: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}