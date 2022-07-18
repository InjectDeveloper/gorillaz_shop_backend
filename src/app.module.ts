import { Module } from '@nestjs/common';
import { AppConfigModule } from "./config/app/config.module";
import { PostgresConfigModule } from "./config/database/config.module";
import { JwtConfigModule } from "./config/jwt/config.module";
import { GoogleConfigModule } from "./config/google/config.module";
import { PostgresDatabaseProviderModule } from "./providers/database/postgres/provider.module";
import { UserModule } from "./models/user/user.module";
import { DepositModule } from './models/deposit/deposit.module';
import { ReviewModule } from './models/review/review.module';
import { CategoryModule } from './models/category/category.module';
import { ItemModule } from './models/item/item.module';
import { ProductModule } from './models/product/product.module';
import { CartModule } from './models/cart/cart.module';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { AuthModule } from "./auth/auth.module";

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

    UserModule,

    DepositModule,

    ReviewModule,

    CategoryModule,

    ItemModule,

    ProductModule,

    CartModule,

    AdminPanelModule,

    AuthModule
  ],
})
export class AppModule {}
