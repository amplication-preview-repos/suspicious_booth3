import { MonitorLog } from "../monitorLog/MonitorLog";

export type Status = {
  createdAt: Date;
  id: string;
  lastChecked: Date | null;
  monitorLogs?: Array<MonitorLog>;
  p2pStatus: boolean | null;
  rpcStatus: boolean | null;
  updatedAt: Date;
};
