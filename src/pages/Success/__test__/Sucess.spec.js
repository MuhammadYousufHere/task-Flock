import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import Success from "../Success";

afterEach(cleanup);
describe("Success Unit Tests", () => {
  //
  test("App should render Success Component", function () {
    render(<Success />);
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
  //
  test("User should click to connect another wallet", function () {
    const handler = jest.fn();
    render(<Success onConnectAnotherWallet={handler} />);
  });
  // const btn = screen.getByDisplayValue("Connect another wallet");
  // fireEvent.click(btn);

  // expect(handler).toHaveBeenCalled(1);
});
