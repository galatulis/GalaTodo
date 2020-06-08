import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders title text", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Todo App/);
    expect(linkElement).toBeInTheDocument();
  });
});
