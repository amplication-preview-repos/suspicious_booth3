import * as graphql from "@nestjs/graphql";
import { MonitorLogResolverBase } from "./base/monitorLog.resolver.base";
import { MonitorLog } from "./base/MonitorLog";
import { MonitorLogService } from "./monitorLog.service";

@graphql.Resolver(() => MonitorLog)
export class MonitorLogResolver extends MonitorLogResolverBase {
  constructor(protected readonly service: MonitorLogService) {
    super(service);
  }
}
