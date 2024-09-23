import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MonitorLogList } from "./monitorLog/MonitorLogList";
import { MonitorLogCreate } from "./monitorLog/MonitorLogCreate";
import { MonitorLogEdit } from "./monitorLog/MonitorLogEdit";
import { MonitorLogShow } from "./monitorLog/MonitorLogShow";
import { NodeList } from "./node/NodeList";
import { NodeCreate } from "./node/NodeCreate";
import { NodeEdit } from "./node/NodeEdit";
import { NodeShow } from "./node/NodeShow";
import { ChartDataList } from "./chartData/ChartDataList";
import { ChartDataCreate } from "./chartData/ChartDataCreate";
import { ChartDataEdit } from "./chartData/ChartDataEdit";
import { ChartDataShow } from "./chartData/ChartDataShow";
import { StatusList } from "./status/StatusList";
import { StatusCreate } from "./status/StatusCreate";
import { StatusEdit } from "./status/StatusEdit";
import { StatusShow } from "./status/StatusShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"CryptoNotes Node Monitor Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MonitorLog"
          list={MonitorLogList}
          edit={MonitorLogEdit}
          create={MonitorLogCreate}
          show={MonitorLogShow}
        />
        <Resource
          name="Node"
          list={NodeList}
          edit={NodeEdit}
          create={NodeCreate}
          show={NodeShow}
        />
        <Resource
          name="ChartData"
          list={ChartDataList}
          edit={ChartDataEdit}
          create={ChartDataCreate}
          show={ChartDataShow}
        />
        <Resource
          name="Status"
          list={StatusList}
          edit={StatusEdit}
          create={StatusCreate}
          show={StatusShow}
        />
      </Admin>
    </div>
  );
};

export default App;
