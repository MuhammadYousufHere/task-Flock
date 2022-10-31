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
function App() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/success");
  };
  const connectAnotherWallethandler = () => {
    navigate("/connected");
  };
  return (
    <Provider store={store}>
      <div className="">
        <Routes>
          <Route path="/" element={<Signin />} />

          <Route path="/connect" element={<QR onNext={handleNext} />} />
          <Route
            path="/success"
            element={
              <Success onConnectAnotherWallet={connectAnotherWallethandler} />
            }
          />
          <Route path="/connected" element={<Connected />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
