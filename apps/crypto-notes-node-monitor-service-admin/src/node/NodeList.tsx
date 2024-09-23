import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const NodeList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Nodes"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="ipAddress" source="ipAddress" />
        <TextField label="p2pPort" source="p2pPort" />
        <TextField label="rpcPort" source="rpcPort" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
