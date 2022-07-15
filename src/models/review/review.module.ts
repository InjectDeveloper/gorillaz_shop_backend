import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReviewsRepository } from "./review.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ReviewsRepository])],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule {}
