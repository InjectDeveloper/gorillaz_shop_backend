import { classToPlain, ClassTransformOptions, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { ModelRepository } from '../model.repository'
import { NotFoundException } from "@nestjs/common";
import { Product } from "./entities/product.entity";
import { allProductGroupsForSerializing, ProductEntity } from "./serializer/product.serializer";


@EntityRepository(Product)
export class ProductsRepository extends ModelRepository<Product, ProductEntity> {
  override transform(model: Product, transformOptions: ClassTransformOptions = { groups:  allProductGroupsForSerializing }): ProductEntity {
    return plainToClass(
      ProductEntity,
      classToPlain(model, transformOptions),
      transformOptions
    );
  }

  override transformMany(models: Product[], transformOptions: ClassTransformOptions = { groups:  allProductGroupsForSerializing }): ProductEntity[] {
    return models.map(model => this.transform(model, transformOptions));
  }
}
