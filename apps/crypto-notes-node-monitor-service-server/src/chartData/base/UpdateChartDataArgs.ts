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
import { ChartDataWhereUniqueInput } from "./ChartDataWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ChartDataUpdateInput } from "./ChartDataUpdateInput";

@ArgsType()
class UpdateChartDataArgs {
  @ApiProperty({
    required: true,
    type: () => ChartDataWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChartDataWhereUniqueInput)
  @Field(() => ChartDataWhereUniqueInput, { nullable: false })
  where!: ChartDataWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ChartDataUpdateInput,
  })
  @ValidateNested()
  @Type(() => ChartDataUpdateInput)
  @Field(() => ChartDataUpdateInput, { nullable: false })
  data!: ChartDataUpdateInput;
}

export { UpdateChartDataArgs as UpdateChartDataArgs };
