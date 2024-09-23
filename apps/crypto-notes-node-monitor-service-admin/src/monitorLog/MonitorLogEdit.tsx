import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { NodeTitle } from "../node/NodeTitle";
import { StatusTitle } from "../status/StatusTitle";

export const MonitorLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="node.id" reference="Node" label="Node">
          <SelectInput optionText={NodeTitle} />
        </ReferenceInput>
        <ReferenceInput source="status.id" reference="Status" label="Status">
          <SelectInput optionText={StatusTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
