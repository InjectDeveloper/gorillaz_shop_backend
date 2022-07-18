import { classToPlain, ClassTransformOptions, plainToClass, plainToInstance } from "class-transformer";
import { EntityRepository } from 'typeorm'
import { ModelRepository } from '../model.repository'
import { allUserGroupsForSerializing, UserEntity } from "./serializer/user.serializer";
import { User } from "./entities/user.entity";
import { NotFoundException } from "@nestjs/common";

@EntityRepository(User)
export class UsersRepository extends ModelRepository<User, UserEntity> {
  override transform(model: User, transformOptions: ClassTransformOptions = { groups: allUserGroupsForSerializing }): UserEntity {
    return plainToClass(
      UserEntity,
      classToPlain(model, transformOptions),
      transformOptions
    );
  }

  override transformMany(models: User[], transformOptions: ClassTransformOptions = { groups: allUserGroupsForSerializing }): UserEntity[] {
    return models.map(model => this.transform(model, transformOptions));
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.findOne({
      where: {
        email: email
      }
    })
    if (!user) {
      return null
    }
    return this.transform(user)
  }

  async updateRefreshToken(user: UserEntity, token: string): Promise<UserEntity> {
    return await this.updateEntity(user, { refreshToken: token })
  }
}
