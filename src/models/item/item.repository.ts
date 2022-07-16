import { classToPlain, ClassTransformOptions, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { ModelRepository } from '../model.repository'
import { NotFoundException } from "@nestjs/common";
import { Item } from "./entities/item.entity";
import { allItemGroupsForSerializing, ItemEntity } from "./serializer/item.serializer";

@EntityRepository(Item)
export class ItemsRepository extends ModelRepository<Item, ItemEntity> {
  override transform(model: Item, transformOptions: ClassTransformOptions = { groups:  allItemGroupsForSerializing }): ItemEntity {
    return plainToClass(
      ItemEntity,
      classToPlain(model, transformOptions),
      transformOptions
    );
  }

  override transformMany(models: Item[], transformOptions: ClassTransformOptions = { groups:  allItemGroupsForSerializing }): ItemEntity[] {
    return models.map(model => this.transform(model, transformOptions));
  }
}
