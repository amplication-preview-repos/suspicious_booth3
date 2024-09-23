import { SortOrder } from "../../util/SortOrder";

export type NodeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  p2pPort?: SortOrder;
  rpcPort?: SortOrder;
  updatedAt?: SortOrder;
};
