import { classToPlain, ClassTransformOptions, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { ModelRepository } from '../model.repository'
import { NotFoundException } from "@nestjs/common";
import { Deposit } from "./entities/deposit.entity";
import { allDepositGroupsForSerializing, DepositEntity } from "./serializer/deposit.serializer";

@EntityRepository(Deposit)
export class DepositsRepository extends ModelRepository<Deposit, DepositEntity> {
  override transform(model: Deposit, transformOptions: ClassTransformOptions = { groups:  allDepositGroupsForSerializing}): DepositEntity {
    return plainToClass(
      DepositEntity,
      classToPlain(model, transformOptions),
      transformOptions
    );
  }

  override transformMany(models: Deposit[], transformOptions: ClassTransformOptions = { groups:  allDepositGroupsForSerializing}): DepositEntity[] {
    return models.map(model => this.transform(model, transformOptions));
  }

}
