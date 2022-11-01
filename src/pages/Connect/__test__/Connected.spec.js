import React from "react";
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
  //
  it("should render Connected Component", async function () {
    render(
      <Provider store={store}>
        <Connected />
      </Provider>
    );
    await waitFor(() => expect(screen.getByRole("button")).toBeInTheDocument());
    expect(
      screen.getByText(/already connected to an account/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
  test("User should be able click button", async function () {
    const handler = jest.fn();

    render(
      <Provider store={store}>
        <Connected onClick={handler} />
      </Provider>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
