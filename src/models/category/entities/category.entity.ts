import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ICategory } from "../interfaces/category.interface";
import { Item } from "../../item/entities/item.entity";

@Entity({ name: "categories" })
export class Category implements ICategory{
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToMany(() => Item, (item) => item.category)
  items: Item[]

  @Column({unique: true})
  name: string

  @Column()
  img: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}