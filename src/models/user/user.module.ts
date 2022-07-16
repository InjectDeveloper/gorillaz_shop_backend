import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './user.controller'
import { UsersRepository } from './user.repository'
import { UserService } from './user.service'

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}