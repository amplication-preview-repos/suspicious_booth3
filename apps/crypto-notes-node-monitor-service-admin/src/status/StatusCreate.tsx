import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { MonitorLogTitle } from "../monitorLog/MonitorLogTitle";

export const StatusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
