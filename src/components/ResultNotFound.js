import React from "react";
import sad from "../img/icons/sad.png";

const ResultNotFound = () => {
  return (
    <div className="result__none">
      <img className="sad-face" src={sad} alt="sad face" />
      <p className="text">No Result Found</p>
    </div>
  );
};

export default ResultNotFound;
