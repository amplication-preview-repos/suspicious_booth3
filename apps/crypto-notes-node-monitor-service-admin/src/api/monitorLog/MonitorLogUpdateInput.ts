import { NodeWhereUniqueInput } from "../node/NodeWhereUniqueInput";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";

export type MonitorLogUpdateInput = {
  node?: NodeWhereUniqueInput | null;
  status?: StatusWhereUniqueInput | null;
  timestamp?: Date | null;
};
