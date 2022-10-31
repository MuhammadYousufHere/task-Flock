import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import QR from "../QR";
import { Provider } from "react-redux";
import { store } from "../../../features/store";

describe("QR code test cases", () => {
  test("Should render QR Component", function () {
    render(
      <Provider store={store}>
        <QR />
      </Provider>
    );

    expect(screen.getByText(/Scan with the/i)).toBeInTheDocument();
  });

  test("QR Component should dislay countdown for 1 min", function () {
    render(
      <Provider store={store}>
        <QR />
      </Provider>
    );
    const timer = screen.getByText(/60s/i);
    expect(timer).toBeTruthy();
  });

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
