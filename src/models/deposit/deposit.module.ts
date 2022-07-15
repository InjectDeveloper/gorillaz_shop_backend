import { Module } from '@nestjs/common';
import { DepositController } from './deposit.controller';
import { DepositService } from './deposit.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DepositsRepository } from "./deposit.repository";

@Module({
  imports: [TypeOrmModule.forFeature([DepositsRepository])],
  controllers: [DepositController],
  providers: [DepositService]
})
export class DepositModule {}
