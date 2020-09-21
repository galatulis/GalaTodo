import React from "react";

import { render } from "../setupTests";
import App from "./App";

describe("App", () => {
  it("renders title text", () => {
    const { getByPlaceholderText } = render(<App />);
    const linkElement = getByPlaceholderText(/what's todo/i);
    expect(linkElement).toBeInTheDocument();
  });
});
