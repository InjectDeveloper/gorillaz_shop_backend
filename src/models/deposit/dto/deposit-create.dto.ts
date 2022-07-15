import { User } from "../../user/entities/user.entity";
import { DepositTypesEnum } from "../constants/deposit-types.enum";
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class DepositCreateDto {
  @IsNotEmpty()
  user: User

  @IsEnum(DepositTypesEnum)
  type: DepositTypesEnum

  @IsNumber()
  sum: number

  @IsString()
  data: string

  @IsDate()
  expires_in: Date
}