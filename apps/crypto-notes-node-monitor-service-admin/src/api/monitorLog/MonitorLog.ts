import { Node } from "../node/Node";
import { Status } from "../status/Status";

export type MonitorLog = {
  createdAt: Date;
  id: string;
  node?: Node | null;
  status?: Status | null;
  timestamp: Date | null;
  updatedAt: Date;
};
