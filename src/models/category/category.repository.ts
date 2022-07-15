import { classToPlain, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { ModelRepository } from '../model.repository'
import { NotFoundException } from "@nestjs/common";
import { Category } from "./entities/category.entity";
import { allCategoryGroupsForSerializing, CategoryEntity } from "./serializer/category.serializer";

@EntityRepository(Category)
export class CategoriesRepository extends ModelRepository<Category, CategoryEntity> {
  override transform(model: Category): CategoryEntity {
    const tranformOptions = {
      groups: allCategoryGroupsForSerializing
    };
    return plainToClass(
      CategoryEntity,
      classToPlain(model, tranformOptions),
      tranformOptions
    );
  }

  override transformMany(models: Category[]): CategoryEntity[] {
    return models.map(model => this.transform(model));
  }
}
