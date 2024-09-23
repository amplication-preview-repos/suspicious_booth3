import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChartDataServiceBase } from "./base/chartData.service.base";

@Injectable()
export class ChartDataService extends ChartDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
