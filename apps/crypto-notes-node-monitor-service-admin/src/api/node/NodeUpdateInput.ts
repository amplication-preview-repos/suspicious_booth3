import { MonitorLogUpdateManyWithoutNodesInput } from "./MonitorLogUpdateManyWithoutNodesInput";

export type NodeUpdateInput = {
  ipAddress?: string | null;
  monitorLogs?: MonitorLogUpdateManyWithoutNodesInput;
  p2pPort?: number | null;
  rpcPort?: number | null;
};
