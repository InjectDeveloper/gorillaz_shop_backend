import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IReview } from "../interfaces/review.interface";
import { User } from "../../user/entities/user.entity";

@Entity({ name: "reviews" })
export class Review implements IReview{
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User, (user) => user.reviews)
  user: User

  @Column({ type: "text"} )
  text: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}