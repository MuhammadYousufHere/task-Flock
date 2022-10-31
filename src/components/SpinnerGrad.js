import React from "react";
import "./Loader.css";
const LoaderGrad = () => {
  return (
    <div className="loader spin">
      <div className="spin__blocker"></div>
      <div className="spin__bottom-left"></div>
      <div className="spin__bottom-right"></div>
      <div className="spin__top-left"></div>
    </div>
  );
};

export default LoaderGrad;
