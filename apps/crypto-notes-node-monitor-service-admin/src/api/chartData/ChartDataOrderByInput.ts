import { SortOrder } from "../../util/SortOrder";

export type ChartDataOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
