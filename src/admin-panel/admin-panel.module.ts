import { Module } from '@nestjs/common';
import { AdminPanelUsersController } from "./controllers/admin-panel-users.controller";
import { UserModule } from "../models/user/user.module";

@Module({
  imports: [
    UserModule
  ],
  controllers: [
    AdminPanelUsersController,
  ]
})
export class AdminPanelModule {}
