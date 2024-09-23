import { MonitorLog as TMonitorLog } from "../api/monitorLog/MonitorLog";

export const MONITORLOG_TITLE_FIELD = "id";

export const MonitorLogTitle = (record: TMonitorLog): string => {
  return record.id?.toString() || String(record.id);
};
