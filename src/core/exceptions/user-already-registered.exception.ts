import { HttpException, HttpStatus } from "@nestjs/common";

export class UserAlreadyRegisteredException extends HttpException {
  constructor() {
    super("Пользователь с таким емейлом уже зарегистрирован", HttpStatus.BAD_REQUEST);
  }
}