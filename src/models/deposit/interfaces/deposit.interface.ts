import { User } from "../../user/entities/user.entity";
import { DepositTypesEnum } from "../constants/deposit-types.enum";
import { DepositStatusesEnum } from "../constants/deposit-statuses.enum";

export interface IDeposit {
  user: User,
  sum: number,
  data: string,
  type: DepositTypesEnum,
  status: DepositStatusesEnum,
}