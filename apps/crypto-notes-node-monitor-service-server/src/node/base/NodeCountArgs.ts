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
import { NodeWhereInput } from "./NodeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class NodeCountArgs {
  @ApiProperty({
    required: false,
    type: () => NodeWhereInput,
  })
  @Field(() => NodeWhereInput, { nullable: true })
  @Type(() => NodeWhereInput)
  where?: NodeWhereInput;
}

export { NodeCountArgs as NodeCountArgs };
