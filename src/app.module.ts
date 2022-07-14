import { Module } from '@nestjs/common';
import { AppConfigModule } from "./config/app/config.module";
import { PostgresConfigModule } from "./config/database/config.module";
import { JwtConfigModule } from "./config/jwt/config.module";
import { GoogleConfigModule } from "./config/google/config.module";
import { QiwiConfigModule } from "./config/qiwi/config.module";
import { CrystalPayConfigModule } from "./config/crystal-pay/config.module";
import { BlockIoConfigModule } from "./config/block-io/config.module";
import { PostgresDatabaseProviderModule } from "./providers/database/postgres/provider.module";
import { UserModule } from "./models/user/user.module";

@Module({
  imports: [
    /*AppConfigModule,
    PostgresConfigModule,
    JwtConfigModule,
    GoogleConfigModule,
    QiwiConfigModule,
    CrystalPayConfigModule,
    BlockIoConfigModule*/

    PostgresDatabaseProviderModule,

    UserModule
  ],
})
export class AppModule {}
