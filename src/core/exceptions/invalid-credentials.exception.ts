import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidCredentialsException extends HttpException {
  constructor() {
    super("Неверный логин или пароль", HttpStatus.BAD_REQUEST);
  }
}