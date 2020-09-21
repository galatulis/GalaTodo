import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";

import App from "./app/App";
import store from "./shared/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
