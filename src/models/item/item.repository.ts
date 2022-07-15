import { classToPlain, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { ModelRepository } from '../model.repository'
import { NotFoundException } from "@nestjs/common";
import { Item } from "./entities/item.entity";
import { allItemGroupsForSerializing, ItemEntity } from "./serializer/item.serializer";

@EntityRepository(Item)
export class ItemsRepository extends ModelRepository<Item, ItemEntity> {
  override transform(model: Item): ItemEntity {
    const tranformOptions = {
      groups: allItemGroupsForSerializing
    };
    return plainToClass(
      ItemEntity,
      classToPlain(model, tranformOptions),
      tranformOptions
    );
  }

  override transformMany(models: Item[]): ItemEntity[] {
    return models.map(model => this.transform(model));
  }
}
