import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { NodeTitle } from "../node/NodeTitle";
import { StatusTitle } from "../status/StatusTitle";

export const MonitorLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="node.id" reference="Node" label="Node">
          <SelectInput optionText={NodeTitle} />
        </ReferenceInput>
        <ReferenceInput source="status.id" reference="Status" label="Status">
          <SelectInput optionText={StatusTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
