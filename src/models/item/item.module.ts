import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemsRepository } from "./item.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ItemsRepository])],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
