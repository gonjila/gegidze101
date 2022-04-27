import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import ReportsContextProvider from "./context/reportsCtx";
import UserContextProvider from "./context/userCtx";

ReactDOM.render(
  <UserContextProvider>
    <ReportsContextProvider>
      <App />
    </ReportsContextProvider>
  </UserContextProvider>,
  document.getElementById("root")
);
registerServiceWorker();
