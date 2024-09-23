import { SortOrder } from "../../util/SortOrder";

export type MonitorLogOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  nodeId?: SortOrder;
  statusId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
