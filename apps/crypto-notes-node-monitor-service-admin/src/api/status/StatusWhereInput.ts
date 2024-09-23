import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { MonitorLogListRelationFilter } from "../monitorLog/MonitorLogListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type StatusWhereInput = {
  id?: StringFilter;
  lastChecked?: DateTimeNullableFilter;
  monitorLogs?: MonitorLogListRelationFilter;
  p2pStatus?: BooleanNullableFilter;
  rpcStatus?: BooleanNullableFilter;
};
