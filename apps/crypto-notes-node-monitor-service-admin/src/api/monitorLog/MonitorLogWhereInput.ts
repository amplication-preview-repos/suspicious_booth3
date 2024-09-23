import { StringFilter } from "../../util/StringFilter";
import { NodeWhereUniqueInput } from "../node/NodeWhereUniqueInput";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MonitorLogWhereInput = {
  id?: StringFilter;
  node?: NodeWhereUniqueInput;
  status?: StatusWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
};
