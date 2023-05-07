/**
 * @jest-environment jsdom
 */

import App from "../App";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<App/> STATE TEST", () => {
  it("PAGE_SHOULD_CONTAIN_COUNT_STRING", () => {
    const { getByText } = render(<App />);
    expect(getByText("Vite + React")).toBeInTheDocument();
  });
});
