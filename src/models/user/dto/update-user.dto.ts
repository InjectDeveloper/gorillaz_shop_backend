import { IsArray, IsString } from "class-validator";

export class UpdateUserDto {
  @IsString()
  avatar: string
}