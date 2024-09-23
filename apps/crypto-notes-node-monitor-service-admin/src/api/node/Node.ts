import { MonitorLog } from "../monitorLog/MonitorLog";

export type Node = {
  createdAt: Date;
  id: string;
  ipAddress: string | null;
  monitorLogs?: Array<MonitorLog>;
  p2pPort: number | null;
  rpcPort: number | null;
  updatedAt: Date;
};
