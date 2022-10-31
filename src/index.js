import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
const theme = createTheme({
  palette: {
    primary: {
      main: "#625df6",
      text: "#b785fc",
    },
    secondary: {
      main: "#361870",
      linkText: "#528cb5",
      btnText: "#af86fc",
      btnBg: "#36186e",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain="myauth-app.us.auth0.com"
        clientId="Z7JhV58WgZvpNMo77WFuUa1LKR0iMVIo"
        redirectUri={window.location.origin + "/connect"}
      >
        <Router>
          <App />
        </Router>
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>
);
// -jDJ902dXDt6UR1xi5EhlBETS9C7vpPZh65QbSmoqxntIcQN1dbdkS4SQEGa8vsv
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
