import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  render,
  screen,
  cleanup,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../features/store";
import Connected from "../Connected";

afterEach(cleanup);
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

jest.setTimeout(8000);
//
describe("Connected test cases", () => {
  // Render test case
  it("should render Connected Component", function () {
    render(
      <Provider store={store}>
        <Router>
          <Connected />
        </Router>
      </Provider>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(
      screen.getByText(/already connected to an account/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  //Click case
  test("User should be able click button", async function () {
    const handler = jest.fn();

    render(
      <Provider store={store}>
        <Router>
          <Connected />
        </Router>
      </Provider>
    );
  });
});
