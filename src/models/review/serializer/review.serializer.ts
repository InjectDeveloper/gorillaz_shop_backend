import { Expose } from 'class-transformer';
import { Deposit } from "../../deposit/entities/deposit.entity";
import { ModelEntity } from "../../../core/serializers/model.serializer";
import { IReview } from "../interfaces/review.interface";
import { User } from "../../user/entities/user.entity";

export const defaultReviewGroupsForSerializing: string[] = [];
export const extendedReviewGroupsForSerializing: string[] = [
  ...defaultReviewGroupsForSerializing,
  'review.timestamps'
]
export const allReviewGroupsForSerializing: string[] = [
  ...extendedReviewGroupsForSerializing
];

export class ReviewEntity extends ModelEntity implements IReview {
  constructor() {
    super()
  }

  user: User

  text: string

  @Expose({ groups: ['review.timestamps'] })
  createdAt: Date;
}