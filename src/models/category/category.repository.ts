import { classToPlain, ClassTransformOptions, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { ModelRepository } from '../model.repository'
import { NotFoundException } from "@nestjs/common";
import { Category } from "./entities/category.entity";
import { allCategoryGroupsForSerializing, CategoryEntity } from "./serializer/category.serializer";

@EntityRepository(Category)
export class CategoriesRepository extends ModelRepository<Category, CategoryEntity> {
  override transform(model: Category, transformOptions: ClassTransformOptions = { groups: allCategoryGroupsForSerializing }): CategoryEntity {
    return plainToClass(
      CategoryEntity,
      classToPlain(model, transformOptions),
      transformOptions
    );
  }

  override transformMany(models: Category[], transformOptions: ClassTransformOptions = { groups: allCategoryGroupsForSerializing }): CategoryEntity[] {
    return models.map(model => this.transform(model, transformOptions));
  }
}
