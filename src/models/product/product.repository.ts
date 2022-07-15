import { classToPlain, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { ModelRepository } from '../model.repository'
import { NotFoundException } from "@nestjs/common";
import { Product } from "./entities/product.entity";
import { allProductGroupsForSerializing, ProductEntity } from "./serializer/product.serializer";

@EntityRepository(Product)
export class ProductsRepository extends ModelRepository<Product, ProductEntity> {
  override transform(model: Product): ProductEntity {
    const tranformOptions = {
      groups: allProductGroupsForSerializing
    };
    return plainToClass(
      ProductEntity,
      classToPlain(model, tranformOptions),
      tranformOptions
    );
  }

  override transformMany(models: Product[]): ProductEntity[] {
    return models.map(model => this.transform(model));
  }
}
