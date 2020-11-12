import React from "react";
import loading from "../img/icons/refresh.png";

const LoadingSpinner = () => {
  return (
    // <div className="spinner">
    //   <i className="fas fa-spinner fa-spin"></i>
    // </div>
    <div className="loading-spinner">
      <img className="spin spinner-icon" src={loading} alt="" />
    </div>
  );
};

export default LoadingSpinner;
