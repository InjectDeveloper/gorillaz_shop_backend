import { Controller, SerializeOptions } from "@nestjs/common";
import { allDepositGroupsForSerializing } from "./serializer/deposit.serializer";

@Controller('deposit')
@SerializeOptions({
  groups: allDepositGroupsForSerializing,
})
export class DepositController {}
