import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signin from "./pages/Signin/Sigin";
import Success from "./pages/Success/Success";
import QR from "./pages/QR/QR";
import Connected from "./pages/Connect/Connected";
import { Provider } from "react-redux";

import { store } from "./features/store";
import ErrorBoundary from "./components/ErrorBoundary";
import PrivateRoute from "./routes/PrivateRoute";
function App() {
  // https://serene-pasca-c2fc83.netlify.app/

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <div className="">
          <Routes>
            <Route path="/" element={<Signin />} />

            <Route element={<PrivateRoute />}>
              <Route path="/connect" element={<QR />} />
              <Route path="/success" element={<Success />} />
              <Route path="/connected" element={<Connected />} />
            </Route>
          </Routes>
        </div>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
