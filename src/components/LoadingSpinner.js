import React from "react";
import loading from "../img/icons/refresh.png";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img className="spin spinner-icon" src={loading} alt="" />
    </div>
  );
};

export default LoadingSpinner;
