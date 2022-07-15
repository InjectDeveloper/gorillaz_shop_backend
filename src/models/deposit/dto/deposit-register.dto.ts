import { IsEnum, IsNumber } from "class-validator";
import { DepositTypesEnum } from "../constants/deposit-types.enum";

export class DepositRegisterDto {
  @IsEnum(DepositTypesEnum)
  type: DepositTypesEnum

  @IsNumber()
  sum: number
}