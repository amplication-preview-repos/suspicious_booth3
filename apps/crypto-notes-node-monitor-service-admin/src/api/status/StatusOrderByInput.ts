import { SortOrder } from "../../util/SortOrder";

export type StatusOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastChecked?: SortOrder;
  p2pStatus?: SortOrder;
  rpcStatus?: SortOrder;
  updatedAt?: SortOrder;
};
