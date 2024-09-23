import { MonitorLogCreateNestedManyWithoutNodesInput } from "./MonitorLogCreateNestedManyWithoutNodesInput";

export type NodeCreateInput = {
  ipAddress?: string | null;
  monitorLogs?: MonitorLogCreateNestedManyWithoutNodesInput;
  p2pPort?: number | null;
  rpcPort?: number | null;
};
