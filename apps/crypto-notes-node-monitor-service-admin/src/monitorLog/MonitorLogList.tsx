import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { NODE_TITLE_FIELD } from "../node/NodeTitle";
import { STATUS_TITLE_FIELD } from "../status/StatusTitle";

export const MonitorLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MonitorLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Node" source="node.id" reference="Node">
          <TextField source={NODE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Status" source="status.id" reference="Status">
          <TextField source={STATUS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
