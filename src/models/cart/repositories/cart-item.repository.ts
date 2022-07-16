import { classToPlain, ClassTransformOptions, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { NotFoundException } from "@nestjs/common";
import { ModelRepository } from "../../model.repository";
import { CartItem } from "../entities/cart-item.entity";
import { allCartItemGroupsForSerializing, CartItemEntity } from "../serializer/cart-item.serializer";

@EntityRepository(CartItem)
export class CartItemsRepository extends ModelRepository<CartItem, CartItemEntity> {
  override transform(model: CartItem, transformOptions: ClassTransformOptions = { groups: allCartItemGroupsForSerializing }): CartItemEntity {
    return plainToClass(
      CartItemEntity,
      classToPlain(model, transformOptions),
      transformOptions
    );
  }

  override transformMany(models: CartItem[], transformOptions: ClassTransformOptions = { groups: allCartItemGroupsForSerializing }): CartItemEntity[] {
    return models.map(model => this.transform(model, transformOptions));
  }
}
