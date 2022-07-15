import { classToPlain, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { ModelRepository } from '../model.repository'
import { NotFoundException } from "@nestjs/common";
import { Deposit } from "./entities/deposit.entity";
import { allDepositGroupsForSerializing, DepositEntity } from "./serializer/deposit.serializer";

@EntityRepository(Deposit)
export class DepositsRepository extends ModelRepository<Deposit, DepositEntity> {
  override transform(model: Deposit): DepositEntity {
    const tranformOptions = {
      groups: allDepositGroupsForSerializing
    };
    return plainToClass(
      DepositEntity,
      classToPlain(model, tranformOptions),
      tranformOptions
    );
  }

  override transformMany(models: Deposit[]): DepositEntity[] {
    return models.map(model => this.transform(model));
  }

}
