import { ChartData as TChartData } from "../api/chartData/ChartData";

export const CHARTDATA_TITLE_FIELD = "id";

export const ChartDataTitle = (record: TChartData): string => {
  return record.id?.toString() || String(record.id);
};
