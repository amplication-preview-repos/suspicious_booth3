import { MonitorLogCreateNestedManyWithoutStatusesInput } from "./MonitorLogCreateNestedManyWithoutStatusesInput";

export type StatusCreateInput = {
  lastChecked?: Date | null;
  monitorLogs?: MonitorLogCreateNestedManyWithoutStatusesInput;
  p2pStatus?: boolean | null;
  rpcStatus?: boolean | null;
};
