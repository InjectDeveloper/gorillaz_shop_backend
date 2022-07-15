import { classToPlain, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { ModelRepository } from '../model.repository'
import { NotFoundException } from "@nestjs/common";
import { Review } from "./entities/review.entity";
import { allReviewGroupsForSerializing, ReviewEntity } from "./serializer/review.serializer";

@EntityRepository(Review)
export class ReviewsRepository extends ModelRepository<Review, ReviewEntity> {
  override transform(model: Review): ReviewEntity {
    const tranformOptions = {
      groups: allReviewGroupsForSerializing
    };
    return plainToClass(
      ReviewEntity,
      classToPlain(model, tranformOptions),
      tranformOptions
    );
  }

  override transformMany(models: Review[]): ReviewEntity[] {
    return models.map(model => this.transform(model));
  }
}
