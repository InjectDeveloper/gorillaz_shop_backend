import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ICart } from "../interfaces/cart.interface";
import { User } from "../../user/entities/user.entity";
import { CartStatusesEnum } from "../constants/cart-statuses.enum";
import { CartItem } from "./cart-item.entity";

@Entity({name: "carts"})
export class Cart implements ICart{
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User, (user) => user.history)
  user: User

  @Column({
    type: "enum",
    enum: CartStatusesEnum,
    default: CartStatusesEnum.IN_PROCESS
  })
  status: CartStatusesEnum

  @Column({ type: "real" })
  sum: number

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart, {nullable: true})
  items: CartItem[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}