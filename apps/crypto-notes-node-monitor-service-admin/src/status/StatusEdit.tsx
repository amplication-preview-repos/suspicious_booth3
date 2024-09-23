import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { MonitorLogTitle } from "../monitorLog/MonitorLogTitle";

export const StatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="lastChecked" source="lastChecked" />
        <ReferenceArrayInput source="monitorLogs" reference="MonitorLog">
          <SelectArrayInput
            optionText={MonitorLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="p2pStatus" source="p2pStatus" />
        <BooleanInput label="rpcStatus" source="rpcStatus" />
      </SimpleForm>
    </Edit>
  );
};
