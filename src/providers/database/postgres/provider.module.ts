import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm'
import { DatabaseType } from 'typeorm'
import { PostgresConfigModule } from "../../../config/database/config.module";
import { IPostgresConfigService } from "../../../config/database/config.interface";
import { join } from "path";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      inject: [IPostgresConfigService],
      useFactory: async (
        postgresConfigService: IPostgresConfigService,
      ) => ({
        type: 'postgres' as DatabaseType,
        host: postgresConfigService.host,
        port: postgresConfigService.port,
        username: postgresConfigService.username,
        password: postgresConfigService.password,
        database: postgresConfigService.database,
        logging: false,
        synchronize: true,
        extra: {
          max: postgresConfigService.maxConnections,
          connectionTimeoutMillis: postgresConfigService.connectionTimeoutMs,
        },
        autoLoadEntities: true,
        entities: [__dirname + '/../../../**/*.entity.js'],
        migrations: [join(__dirname, "..", "..", "/database/migrations/**/*.entity.{js,ts}")]
      }),
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgresDatabaseProviderModule {}
