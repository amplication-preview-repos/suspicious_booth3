import { Module } from "@nestjs/common";
import { MonitorLogModuleBase } from "./base/monitorLog.module.base";
import { MonitorLogService } from "./monitorLog.service";
import { MonitorLogController } from "./monitorLog.controller";
import { MonitorLogResolver } from "./monitorLog.resolver";

@Module({
  imports: [MonitorLogModuleBase],
  controllers: [MonitorLogController],
  providers: [MonitorLogService, MonitorLogResolver],
  exports: [MonitorLogService],
})
export class MonitorLogModule {}
