import { Body, Controller, Get, Post, SerializeOptions } from "@nestjs/common";
import { UserService } from './user.service'
import { allUserGroupsForSerializing, defaultUserGroupsForSerializing, UserEntity } from "./serializer/user.serializer";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller({
  path: 'users'
})
export class UserController {
  constructor(private readonly usersService: UserService) {}
}