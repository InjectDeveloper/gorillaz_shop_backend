import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartsRepository } from "./repositories/cart.repository";
import { CartItemsRepository } from "./repositories/cart-item.repository";

@Module({
  imports: [TypeOrmModule.forFeature([CartsRepository, CartItemsRepository])],
  providers: [CartService],
  controllers: [CartController]
})
export class CartModule {}
