import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MonitorLogService } from "./monitorLog.service";
import { MonitorLogControllerBase } from "./base/monitorLog.controller.base";

@swagger.ApiTags("monitorLogs")
@common.Controller("monitorLogs")
export class MonitorLogController extends MonitorLogControllerBase {
  constructor(protected readonly service: MonitorLogService) {
    super(service);
  }
}
