import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsRepository } from "./product.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ProductsRepository])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
