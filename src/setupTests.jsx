import "@testing-library/jest-dom";

import { Provider as StoreProvider } from "react-redux";
import { render } from "@testing-library/react";

import store from "./shared/store";

function customRender(components) {
  return render(<StoreProvider store={store}>{components}</StoreProvider>);
}

export { customRender as render };
