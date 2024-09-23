/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ChartDataService } from "../chartData.service";
import { ChartDataCreateInput } from "./ChartDataCreateInput";
import { ChartData } from "./ChartData";
import { ChartDataFindManyArgs } from "./ChartDataFindManyArgs";
import { ChartDataWhereUniqueInput } from "./ChartDataWhereUniqueInput";
import { ChartDataUpdateInput } from "./ChartDataUpdateInput";

export class ChartDataControllerBase {
  constructor(protected readonly service: ChartDataService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChartData })
  async createChartData(
    @common.Body() data: ChartDataCreateInput
  ): Promise<ChartData> {
    return await this.service.createChartData({
      data: data,
      select: {
        createdAt: true,
        id: true,
        timestamp: true,
        typeField: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ChartData] })
  @ApiNestedQuery(ChartDataFindManyArgs)
  async chartDataItems(@common.Req() request: Request): Promise<ChartData[]> {
    const args = plainToClass(ChartDataFindManyArgs, request.query);
    return this.service.chartDataItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        timestamp: true,
        typeField: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ChartData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async chartData(
    @common.Param() params: ChartDataWhereUniqueInput
  ): Promise<ChartData | null> {
    const result = await this.service.chartData({
      where: params,
      select: {
        createdAt: true,
        id: true,
        timestamp: true,
        typeField: true,
        updatedAt: true,
        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ChartData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateChartData(
    @common.Param() params: ChartDataWhereUniqueInput,
    @common.Body() data: ChartDataUpdateInput
  ): Promise<ChartData | null> {
    try {
      return await this.service.updateChartData({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          timestamp: true,
          typeField: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ChartData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteChartData(
    @common.Param() params: ChartDataWhereUniqueInput
  ): Promise<ChartData | null> {
    try {
      return await this.service.deleteChartData({
        where: params,
        select: {
          createdAt: true,
          id: true,
          timestamp: true,
          typeField: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}