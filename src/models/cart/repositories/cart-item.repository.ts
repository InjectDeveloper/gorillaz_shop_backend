import { classToPlain, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { NotFoundException } from "@nestjs/common";
import { ModelRepository } from "../../model.repository";
import { CartItem } from "../entities/cart-item.entity";
import { allCartItemGroupsForSerializing, CartItemEntity } from "../serializer/cart-item.serializer";


@EntityRepository(CartItem)
export class CartItemsRepository extends ModelRepository<CartItem, CartItemEntity> {
  override transform(model: CartItem): CartItemEntity {
    const tranformOptions = {
      groups: allCartItemGroupsForSerializing
    };
    return plainToClass(
      CartItemEntity,
      classToPlain(model, tranformOptions),
      tranformOptions
    );
  }

  override transformMany(models: CartItem[]): CartItemEntity[] {
    return models.map(model => this.transform(model));
  }
}
