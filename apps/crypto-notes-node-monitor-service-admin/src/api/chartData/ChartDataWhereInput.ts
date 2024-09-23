import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ChartDataWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  typeField?: "Option1";
  value?: FloatNullableFilter;
};
