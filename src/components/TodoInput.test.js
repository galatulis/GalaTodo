import React from "react";
import { cleanup, render } from "@testing-library/react";

import TodoInput from "./TodoInput";

describe("TodoInput", () => {
  it("renders without crashing", () => {
    const submitNewItem = jest.fn();

    render(<TodoInput submitNewItem={submitNewItem} />);
  });
});
