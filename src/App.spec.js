import { Auth0Provider } from "@auth0/auth0-react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { useAuth0 } from "@auth0/auth0-react";
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
jest.mock("@auth0/auth0-react");
const user = {
  email: "khanyousufmy80@gmail.com",
  email_verified: true,
};

const mockedUseAuth0 = act(useAuth0, true);
// beforeEach(() => {
//   mockedUseAuth0.mockReturnValue({
//     isAuthenticated: true,
//     user,
//     logout: jest.fn(),
//     loginWithRedirect: jest.fn(),
//     getAccessTokenWithPopup: jest.fn(),
//     getAccessTokenSilently: jest.fn(),
//     getIdTokenClaims: jest.fn(),
//     loginWithPopup: jest.fn(),
//     isLoading: false,
//   });
// });
describe("App", () => {
  test("renders without crashing", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Auth0Provider />);
    });
  });
  //
  jest.mock("@auth0/auth0-react", () => ({
    withAuthenticationRequired: jest
      .fn()
      .mockImplementation((component, ignore) => component),
  }));

  test("Root Navigation should renders with signin page", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Auth0Provider />);
    });
  });
});

afterEach(() => jest.clearAllMocks());

// ------------------------------------------------------------------------

// describe("After login with emailVerification=true, it should move to Interest Screen as user already exist in system", () => {
//   let _render: any, _store: any;
//   const mocks = [
//     apolloMockGenerator(getUsers, verifyUserExist, {
//       where: { externalId: mockIdToken.sub },
//     }),
//   ];
//   beforeEach(() => {
//     const store = makeStore().store;
//     _store = store;

//     _render = render(
//       <MockProvider mocks={mocks} store={store}>
//         <Auth0RegisterationScreen />
//       </MockProvider>
//     );
//   });

//   afterEach(() => {
//     _render = undefined;
//     _store = undefined;
//   });

//   test("Root Navigation should render with Interest screen", async () => {
//     await waitFor(() => expect(_store.getState().auth0.isLoading).toBeFalsy());
//     await waitFor(() =>
//       expect(screen.getAllByTestId("Auth0RegisterLoginScreen").length).toBe(1)
//     );
//     await waitFor(() =>
//       expect(_store.getState().account.userStateAfterLogin).toBe(
//         "INTEREST_SCREEN"
//       )
//     );
//   });
// });

// describe("Auth0 on launch, email has verified = true so should be on Interest Screen.", () => {
//   let _render: any, _store: any;
//   beforeEach(() => {
//     const store = makeStore().store;
//     _store = store;
//     _render = render(
//       <MockProvider mocks={[]} store={store}>
//         <RootNavigation />
//       </MockProvider>
//     );
//   });

//   afterEach(() => {
//     _render = undefined;
//     _store = undefined;
//   });

//   test("Root Navigation should render with Register Screen", async () => {
//     const { getByTestId } = _render;
//     await waitFor(() =>
//       expect(_store.getState().account.isLoading).toBeTruthy()
//     );
//     await waitFor(() =>
//       expect(_store.getState().account.isLoading).toBeFalsy()
//     );
//     await waitFor(() =>
//       expect(screen.getAllByTestId("appNavigation").length).toBe(1)
//     );
//     getByTestId("appNavigation").findByProps({
//       testID: "appNavigation",
//       children: "INTEREST_SCREEN",
//     });
//   });
// });
