import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MonitorLogServiceBase } from "./base/monitorLog.service.base";

@Injectable()
export class MonitorLogService extends MonitorLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
