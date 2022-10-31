import { Auth0Provider } from "@auth0/auth0-react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./features/store";
import React from "react";
import ReactDOM from "react-dom/client";

import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

jest.mock("@auth0/auth0-react", () => ({
  Auth0Provider: ({ children }) => children,
  withAuthenticationRequired: (component, _) => component,
  useAuth0: () => {
    return {
      isLoading: false,
      user: {},
      isAuthenticated: true,
      loginWithRedirect: jest.fn(),
    };
  },
}));

describe("App", () => {
  it("renders without crashing", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Auth0Provider />);
    });
  });
});
