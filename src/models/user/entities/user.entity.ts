import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../interfaces/user.interface";
import { UserRolesEnum } from "../constants/user-roles.enum";
import { Deposit } from "../../deposit/entities/deposit.entity";
import { Review } from "../../review/entities/review.entity";
import { Item } from "../../item/entities/item.entity";
import { Cart } from "../../cart/entities/cart.entity";

@Entity({ name: 'users' })
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isRegisteredWithGoogle: boolean;

  @Column({ nullable: true })
  refreshToken: string;

  @Column()
  avatar: string;

  @Column({
    type: "real",
    default: 0,
  })
  balance: number;

  @OneToMany(() => Deposit, (deposit) => deposit.user)
  deposits: Deposit[];

  @ManyToMany(() => Item, (item) => item.usersFavourite)
  favouriteItems: Item[]

  @OneToMany(() => Cart, (cart) => cart.user)
  history: Cart[]

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @Column({
    type: "enum",
    enum: UserRolesEnum,
    default: UserRolesEnum.USER,
  })
  role: UserRolesEnum;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}