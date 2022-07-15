import { IsArray, IsString } from "class-validator";

export class ProductsCreateDto {
  @IsString()
  productId: string

  @IsArray()
  data: string
}