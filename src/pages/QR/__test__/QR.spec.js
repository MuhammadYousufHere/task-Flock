import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import QR from "../QR";
import { Provider } from "react-redux";
import { store } from "../../../features/store";
import { act } from "react-dom/test-utils";

describe("QR code test cases", () => {
  //
  test("Should render QR Component", function () {
    render(
      <Provider store={store}>
        <QR />
      </Provider>
    );

    expect(screen.getByText(/Scan with the/i)).toBeInTheDocument();
  });
  //
  jest.spyOn(global, "setTimeout");
  test("QR Component should dislay countdown for 1 min", function () {
    render(
      <Provider store={store}>
        <QR />
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
        <QR onNext={handleClick} />
      </Provider>
    );
    fireEvent.click(screen.getByAltText("logo"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // test("User should be redirected to Success Connected", function () {});
});
