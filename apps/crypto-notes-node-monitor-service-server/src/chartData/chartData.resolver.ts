import * as graphql from "@nestjs/graphql";
import { ChartDataResolverBase } from "./base/chartData.resolver.base";
import { ChartData } from "./base/ChartData";
import { ChartDataService } from "./chartData.service";

@graphql.Resolver(() => ChartData)
export class ChartDataResolver extends ChartDataResolverBase {
  constructor(protected readonly service: ChartDataService) {
    super(service);
  }
}
