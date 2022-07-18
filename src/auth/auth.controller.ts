import { Body, Controller, Get, Post, SerializeOptions, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../models/user/dto/create-user.dto";
import { UserFromReq } from "../core/decorators/user-from-req";
import { allUserGroupsForSerializing, UserEntity } from "../models/user/serializer/user.serializer";
import { GoogleAuth, JwtAccess, JwtRefresh, LocalAuth } from "../core/decorators/auth.decorators";
import { UserGoogleDto } from "./dto/user-from-google.dto";

@Controller('auth')
@SerializeOptions({
  groups: allUserGroupsForSerializing
})
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('register')
  async register(@Body() userDto: CreateUserDto) {
    return await this.authService.localRegister(userDto)
  }

  @Post('login')
  @LocalAuth()
  async login(@UserFromReq() userEntity: UserEntity) {
    return await this.authService.login(userEntity)
  }

  @Get("google")
  @GoogleAuth()
  async googleAuth(@Req() req: unknown) {}

  @Get('google/redirect')
  @GoogleAuth()
  async googleAuthRedirect(@UserFromReq() user: UserGoogleDto) {
    return await this.authService.authenticateWithGoogle(user)
  }

  @Post('refresh')
  @JwtRefresh()
  async refresh(@UserFromReq() userEntity: UserEntity) {
    return await this.authService.login(userEntity)
  }

  @Post('test')
  @JwtAccess()
  async text(@UserFromReq() userEntity: UserEntity) {
    return userEntity
  }
}
