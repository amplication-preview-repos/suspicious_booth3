import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const StatusList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Statuses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lastChecked" source="lastChecked" />
        <BooleanField label="p2pStatus" source="p2pStatus" />
        <BooleanField label="rpcStatus" source="rpcStatus" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
