import { MonitorLogUpdateManyWithoutStatusesInput } from "./MonitorLogUpdateManyWithoutStatusesInput";

export type StatusUpdateInput = {
  lastChecked?: Date | null;
  monitorLogs?: MonitorLogUpdateManyWithoutStatusesInput;
  p2pStatus?: boolean | null;
  rpcStatus?: boolean | null;
};
