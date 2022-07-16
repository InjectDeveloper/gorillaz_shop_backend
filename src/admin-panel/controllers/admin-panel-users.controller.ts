import {
  Body, ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  SerializeOptions,
  UseInterceptors
} from "@nestjs/common";
import { CreateUserDto } from "../../models/user/dto/create-user.dto";
import { UserService } from "../../models/user/user.service";
import { UpdateUserDto } from "../../models/user/dto/update-user.dto";
import {
  allUserGroupsForSerializing,
  defaultUserGroupsForSerializing
} from "../../models/user/serializer/user.serializer";

@Controller('admin-panel/user')
@SerializeOptions({
  groups: allUserGroupsForSerializing,
})
export class AdminPanelUsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return await this.userService.getAll()
  }

  @Get(":id")
  async get(
    @Param("id", ParseUUIDPipe) id: string
  ) {
    return await this.userService.get(id)
  }

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto
  ) {
    return await this.userService.create(createUserDto)
  }

  @Patch()
  async update(
    @Body("id", ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return await this.userService.update(id, updateUserDto)
  }

  @Delete(":id")
  async delete(
    @Param("id", ParseUUIDPipe) id: string,
  ) {
    return await this.userService.delete(id)
  }
}