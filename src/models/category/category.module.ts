import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesRepository } from "./category.repository";

@Module({
  imports: [TypeOrmModule.forFeature([CategoriesRepository])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
