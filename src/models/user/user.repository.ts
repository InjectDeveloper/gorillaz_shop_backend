import { classToPlain, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { ModelRepository } from '../model.repository'
import { allUserGroupsForSerializing, UserEntity } from "./serializer/user.serializer";
import { User } from "./entities/user.entity";
import { NotFoundException } from "@nestjs/common";

@EntityRepository(User)
export class UsersRepository extends ModelRepository<User, UserEntity> {
  override transform(model: User): UserEntity {
    const tranformOptions = {
      groups: allUserGroupsForSerializing
    };
    return plainToClass(
      UserEntity,
      classToPlain(model, tranformOptions),
      tranformOptions
    );
  }

  override transformMany(models: User[]): UserEntity[] {
    return models.map(model => this.transform(model));
  }

  /*user.password = await hash(user.password)
  return await this.createEntity({ ...user, sessionID: uuid.v4() })*/
}
