import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersRepository } from "./user.repository";
import { UserRolesEnum } from "./constants/user-roles.enum";
import { UserEntity } from "./serializer/user.serializer";
import { CreateUserDto } from "./dto/create-user.dto";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { User } from "./entities/user.entity";
import { UserNotFoundException } from "../../core/exceptions/user-not-found.exception";
import { UserAvatarsArray } from "./constants/user-avatars.array";
import { DeepPartial } from "typeorm";
import { UserAlreadyRegisteredException } from "../../core/exceptions/user-already-registered.exception";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository
  ) {}

  async getAll(): Promise<UserEntity[]> {
    const users = await this.usersRepository.find({})
    return await this.usersRepository.transformMany(users)
  }

  async get(
    id: string,
    throwsException = false,
  ): Promise<UserEntity | null> {
    const userEntity = await this.usersRepository.get(id)
    if (!userEntity) {
      throw new UserNotFoundException()
    }
    return userEntity
  }

  async create(
    createUserDto: CreateUserDto,
  ): Promise<UserEntity> {
    const candidate = await this.usersRepository.findByEmail(createUserDto.email)
    if (candidate) {
      throw new UserAlreadyRegisteredException()
    }
    const avatar = UserAvatarsArray[Math.floor(Math.random() * UserAvatarsArray.length - 1)]! //почему avatar: string | undefined биля?
    return await this.usersRepository.createEntity({ ...createUserDto, avatar });
  }

  async update(
    id: string,
    inputs: DeepPartial<UserEntity>
  ): Promise<UserEntity> {
    const userEntity = await this.usersRepository.get(id)
    if (!userEntity) {
      throw new UserNotFoundException()
    }
    return await this.usersRepository.updateEntity(userEntity, inputs)
  }

  async delete(
    id: string
  ) {
    const userEntity = await this.usersRepository.get(id)
    if (!userEntity) {
      throw new UserNotFoundException()
    }
    return await this.usersRepository.deleteEntity(userEntity)
  }
}