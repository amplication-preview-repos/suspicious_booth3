import { NodeWhereUniqueInput } from "../node/NodeWhereUniqueInput";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";

export type MonitorLogCreateInput = {
  node?: NodeWhereUniqueInput | null;
  status?: StatusWhereUniqueInput | null;
  timestamp?: Date | null;
};
