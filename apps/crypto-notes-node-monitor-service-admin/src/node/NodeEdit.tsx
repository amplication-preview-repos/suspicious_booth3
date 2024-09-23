import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { MonitorLogTitle } from "../monitorLog/MonitorLogTitle";

export const NodeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ipAddress" source="ipAddress" />
        <ReferenceArrayInput source="monitorLogs" reference="MonitorLog">
          <SelectArrayInput
            optionText={MonitorLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="p2pPort" source="p2pPort" />
        <NumberInput step={1} label="rpcPort" source="rpcPort" />
      </SimpleForm>
    </Edit>
  );
};
