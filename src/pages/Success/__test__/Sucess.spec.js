import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../../features/store";
import Success from "../Success";

afterEach(cleanup);
describe("Success Unit Tests", () => {
  //
  test("App should render Success Component", function () {
    render(
      <Provider store={store}>
        <Router>
          <Success />
        </Router>
      </Provider>
    );
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
  //
  test("User should click to connect another wallet", function () {
    const handler = jest.fn();
    render(
      <Provider store={store}>
        <Router>
          <Success />
        </Router>
      </Provider>
    );
  });
  // const btn = screen.getByDisplayValue("Connect another wallet");
  // fireEvent.click(btn);

  // expect(handler).toHaveBeenCalled(1);
});
