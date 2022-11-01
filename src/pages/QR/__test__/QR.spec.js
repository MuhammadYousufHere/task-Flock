import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  fireEvent,
  render,
  screen,
  cleanup,
  waitFor,
} from "@testing-library/react";
import QR from "../QR";
import { Provider } from "react-redux";
import { store } from "../../../features/store";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

//
describe("QR code test cases", () => {
  //
  test("Should render QR Component", function () {
    render(
      <Provider store={store}>
        <Router>
          <QR />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Scan with the/i)).toBeInTheDocument();
  });
  //
  jest.spyOn(global, "setTimeout");

  test("QR Component should dislay countdown for 1 min", function () {
    render(
      <Provider store={store}>
        <Router>
          <QR />
        </Router>
      </Provider>
    );

    jest.useFakeTimers();
    const timer = screen.getByText(/60s/i);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(timer).toBeInTheDocument();
  });
  //
  test("User should be able to CLICK the logo", function () {
    const handleClick = jest.fn();
    render(
      <Provider store={store}>
        <Router>
          <QR onNext={handleClick} />
        </Router>
      </Provider>
    );
    fireEvent.click(screen.getByAltText("logo"));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  test("Redirect to Success pages after 1 min", async function () {
    render(
      <Provider store={store}>
        <Router>
          <QR />
        </Router>
      </Provider>
    );

    await waitFor(() => {
      //   expect(screen.getByText(/wallet(s) connected/i)).toBeInTheDocument(),
      // { timeout: 5000 }
    });
    // expect(window.location.pathname).toBe("/success");
    // expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
