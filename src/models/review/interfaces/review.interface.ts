import { User } from "../../user/entities/user.entity";

export interface IReview {
  user: User
  text: string
}