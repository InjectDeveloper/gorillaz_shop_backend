import { Body, Controller, Get, Post, SerializeOptions } from "@nestjs/common";
import { UserService } from './user.service'
import { allUserGroupsForSerializing, defaultUserGroupsForSerializing, UserEntity } from "./serializer/user.serializer";
import { UserBeingQueried } from "../../core/decorators/user-being-quired.decorator";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller({
  path: 'users'
})
@SerializeOptions({
  groups: defaultUserGroupsForSerializing,
})
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get('/')
  async get(
  ): Promise<void> {
    //return await this.usersService.get("17704269-896d-413f-be74-43c48bef0417")
  }

  @Post('/')
  async create(
    @Body() inputs: CreateUserDto,
  ): Promise<UserEntity> {
    return await this.usersService.create(inputs);
  }
}