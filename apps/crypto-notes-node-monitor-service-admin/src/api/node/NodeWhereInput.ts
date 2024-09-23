import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MonitorLogListRelationFilter } from "../monitorLog/MonitorLogListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type NodeWhereInput = {
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  monitorLogs?: MonitorLogListRelationFilter;
  p2pPort?: IntNullableFilter;
  rpcPort?: IntNullableFilter;
};
