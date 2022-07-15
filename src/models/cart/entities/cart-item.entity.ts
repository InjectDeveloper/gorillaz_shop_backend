import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ICartItem } from "../interfaces/cart-item.interface";
import { Cart } from "./cart.entity";
import { Product } from "../../product/entities/product.entity";

@Entity({ name: "cart_item" })
export class CartItem implements ICartItem{
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Cart, (cart) => cart.items)
  cart: Cart

  @OneToOne(() => Product)
  @JoinColumn()
  product: Product

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}