import { ModelEntity } from "../../../core/serializers/model.serializer";
import { IDeposit } from "../interfaces/deposit.interface";
import { User } from "../../user/entities/user.entity";
import { DepositTypesEnum } from "../constants/deposit-types.enum";
import { DepositStatusesEnum } from "../constants/deposit-statuses.enum";
import { Expose } from "class-transformer";

export const defaultDepositGroupsForSerializing: string[] = [];
export const extendedDepositGroupsForSerializing: string[] = [
  ...defaultDepositGroupsForSerializing,
  'deposit.timestamps'
]
export const allDepositGroupsForSerializing: string[] = [
  ...extendedDepositGroupsForSerializing
];

export class DepositEntity extends ModelEntity implements IDeposit{
  constructor() {
    super()
  }

  user: User;

  sum: number;

  data: string;

  status: DepositStatusesEnum;

  type: DepositTypesEnum;

  @Expose({ groups: ['deposit.timestamps'] })
  createdAt: Date;
}