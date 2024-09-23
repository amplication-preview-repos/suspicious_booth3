import { MonitorLogWhereInput } from "./MonitorLogWhereInput";
import { MonitorLogOrderByInput } from "./MonitorLogOrderByInput";

export type MonitorLogFindManyArgs = {
  where?: MonitorLogWhereInput;
  orderBy?: Array<MonitorLogOrderByInput>;
  skip?: number;
  take?: number;
};
