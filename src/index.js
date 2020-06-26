import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "typeface-poppins";

import App from "./App";
import store from "./store";
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
