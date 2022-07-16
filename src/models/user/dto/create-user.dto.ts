import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsString()
  @Length(6, 24, {
    message: "Пароль должен быть от 6 до 24 символов"
  })
  password: string
}