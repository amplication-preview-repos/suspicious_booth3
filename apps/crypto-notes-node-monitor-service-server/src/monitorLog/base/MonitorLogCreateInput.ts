/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NodeWhereUniqueInput } from "../../node/base/NodeWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { StatusWhereUniqueInput } from "../../status/base/StatusWhereUniqueInput";

@InputType()
class MonitorLogCreateInput {
  @ApiProperty({
    required: false,
    type: () => NodeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NodeWhereUniqueInput)
  @IsOptional()
  @Field(() => NodeWhereUniqueInput, {
    nullable: true,
  })
  node?: NodeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => StatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StatusWhereUniqueInput)
  @IsOptional()
  @Field(() => StatusWhereUniqueInput, {
    nullable: true,
  })
  status?: StatusWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;
}

export { MonitorLogCreateInput as MonitorLogCreateInput };
