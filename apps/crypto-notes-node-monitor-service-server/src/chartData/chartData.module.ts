import { Module } from "@nestjs/common";
import { ChartDataModuleBase } from "./base/chartData.module.base";
import { ChartDataService } from "./chartData.service";
import { ChartDataController } from "./chartData.controller";
import { ChartDataResolver } from "./chartData.resolver";

@Module({
  imports: [ChartDataModuleBase],
  controllers: [ChartDataController],
  providers: [ChartDataService, ChartDataResolver],
  exports: [ChartDataService],
})
export class ChartDataModule {}
