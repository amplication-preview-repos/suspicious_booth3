/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MonitorLogWhereUniqueInput } from "./MonitorLogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MonitorLogUpdateInput } from "./MonitorLogUpdateInput";

@ArgsType()
class UpdateMonitorLogArgs {
  @ApiProperty({
    required: true,
    type: () => MonitorLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MonitorLogWhereUniqueInput)
  @Field(() => MonitorLogWhereUniqueInput, { nullable: false })
  where!: MonitorLogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MonitorLogUpdateInput,
  })
  @ValidateNested()
  @Type(() => MonitorLogUpdateInput)
  @Field(() => MonitorLogUpdateInput, { nullable: false })
  data!: MonitorLogUpdateInput;
}

export { UpdateMonitorLogArgs as UpdateMonitorLogArgs };
