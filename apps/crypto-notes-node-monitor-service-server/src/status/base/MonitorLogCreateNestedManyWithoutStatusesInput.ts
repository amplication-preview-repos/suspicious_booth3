/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MonitorLogWhereUniqueInput } from "../../monitorLog/base/MonitorLogWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MonitorLogCreateNestedManyWithoutStatusesInput {
  @Field(() => [MonitorLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MonitorLogWhereUniqueInput],
  })
  connect?: Array<MonitorLogWhereUniqueInput>;
}

export { MonitorLogCreateNestedManyWithoutStatusesInput as MonitorLogCreateNestedManyWithoutStatusesInput };
