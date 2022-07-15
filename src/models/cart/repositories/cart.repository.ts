import { classToPlain, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { NotFoundException } from "@nestjs/common";
import { Cart } from "../entities/cart.entity";
import { ModelRepository } from "../../model.repository";
import { allCartGroupsForSerializing, CartEntity } from "../serializer/cart.serializer";


@EntityRepository(Cart)
export class CartsRepository extends ModelRepository<Cart, CartEntity> {
  override transform(model: Cart): CartEntity {
    const tranformOptions = {
      groups: allCartGroupsForSerializing
    };
    return plainToClass(
      CartEntity,
      classToPlain(model, tranformOptions),
      tranformOptions
    );
  }

  override transformMany(models: Cart[]): CartEntity[] {
    return models.map(model => this.transform(model));
  }
}
