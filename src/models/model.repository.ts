import { NotFoundException } from '@nestjs/common'
import { ClassTransformOptions, plainToInstance } from "class-transformer";
import { DeepPartial, DeleteResult, Repository } from "typeorm";
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { ModelEntity } from "../core/serializers/model.serializer";
import { allProductGroupsForSerializing } from "./product/serializer/product.serializer";

export class ModelRepository<T extends ModelEntity, K extends ModelEntity> extends Repository<T> {
  async get(id: string, relations: string[] = []): Promise<K | null> {
    const entity = await this.findOne({
      where: { id },
      relations
    })

    return entity ? this.transform(entity) : null
  }

  async getMany(id: string, relations: string[] = []): Promise<K[] | null> {
    const entity = await this.find({
      where: { id },
      relations
    })

    return entity ? this.transformMany(entity) : null
  }

  async createEntity(inputs: DeepPartial<T>): Promise<K> {
    const entity = await this.save({ ...inputs })
    return (await this.get(entity.id))!
  }

  async updateEntity(entity: K, inputs: DeepPartial<T>): Promise<K> {
    await this.save({
      id: entity.id,
      ...inputs
    })
    const user = await this.findOne({
      where: {
        id: entity.id
      }
    })
    return this.transform(user!)
  }

  async deleteEntity(entity: K): Promise<K> {
    await this.delete(entity.id)
    return entity
  }

  transform(model: T, transformOptions = {}): K {
    return plainToInstance(ModelEntity, model, transformOptions) as K
  }

  transformMany(models: T[], transformOptions = {}): K[] {
    return models.map((model) => this.transform(model, transformOptions))
  }
}