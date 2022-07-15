import { Length } from "class-validator";

export class ReviewCreateDto {
  @Length(10, 255)
  text: string
}