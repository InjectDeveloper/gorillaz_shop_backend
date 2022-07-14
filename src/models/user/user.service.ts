import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersRepository } from "./user.repository";
import { UserRolesEnum } from "./constants/user-roles.enum";
import { UserEntity } from "./serializer/user.serializer";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository
  ) {}

  async get(
    id: string,
    throwsException = false,
  ): Promise<UserEntity> {
    let serializedUser = await this.usersRepository.get(id, throwsException);
    if (!serializedUser) {
      throw new HttpException("Пошел нахуй", 400)
    }
    serializedUser.cart = "d" //вызов из сервиса корзины
    return serializedUser
  }

  async create(
    inputs: CreateUserDto,
  ): Promise<UserEntity> {
    return await this.usersRepository.createEntity(inputs);
  }
}