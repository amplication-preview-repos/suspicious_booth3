import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { NODE_TITLE_FIELD } from "../node/NodeTitle";
import { STATUS_TITLE_FIELD } from "../status/StatusTitle";

export const MonitorLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Node" source="node.id" reference="Node">
          <TextField source={NODE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Status" source="status.id" reference="Status">
          <TextField source={STATUS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
