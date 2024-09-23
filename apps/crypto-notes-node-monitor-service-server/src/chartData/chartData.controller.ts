import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChartDataService } from "./chartData.service";
import { ChartDataControllerBase } from "./base/chartData.controller.base";

@swagger.ApiTags("chartData")
@common.Controller("chartData")
export class ChartDataController extends ChartDataControllerBase {
  constructor(protected readonly service: ChartDataService) {
    super(service);
  }
}
