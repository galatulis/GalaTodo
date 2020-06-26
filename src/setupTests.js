import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { render } from "@testing-library/react";

import store from "./store";

function customRender(components) {
  return render(<StoreProvider store={store}>{components}</StoreProvider>);
}

export * from "@testing-library/react";

export { customRender as render };
