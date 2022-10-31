import { render, screen } from "@testing-library/react";

import Success from "../Success";

test("App should render Sucess Component", function () {
  render(<Success />);
  expect(screen.getByRole("img")).toBeInTheDocument();
});
