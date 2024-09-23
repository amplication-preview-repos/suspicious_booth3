import { ChartDataWhereInput } from "./ChartDataWhereInput";
import { ChartDataOrderByInput } from "./ChartDataOrderByInput";

export type ChartDataFindManyArgs = {
  where?: ChartDataWhereInput;
  orderBy?: Array<ChartDataOrderByInput>;
  skip?: number;
  take?: number;
};
