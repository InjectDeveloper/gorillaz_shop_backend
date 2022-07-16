import { classToPlain, ClassTransformOptions, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { NotFoundException } from "@nestjs/common";
import { Cart } from "../entities/cart.entity";
import { ModelRepository } from "../../model.repository";
import { allCartGroupsForSerializing, CartEntity } from "../serializer/cart.serializer";


@EntityRepository(Cart)
export class CartsRepository extends ModelRepository<Cart, CartEntity> {
  override transform(model: Cart, transformOptions: ClassTransformOptions = { groups: allCartGroupsForSerializing }): CartEntity {
    return plainToClass(
      CartEntity,
      classToPlain(model, transformOptions),
      transformOptions
    );
  }

  override transformMany(models: Cart[], transformOptions: ClassTransformOptions = { groups: allCartGroupsForSerializing }): CartEntity[] {
    return models.map(model => this.transform(model, transformOptions));
  }
}
