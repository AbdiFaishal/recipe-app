import { useState } from "react";

const useCalcTime = () => {
  const [periods, setPeriods] = useState();

  const calcTime = (ingredients) => {
    // Assuming that we need 10 min for each 3 ingredient
    const numIng = ingredients.length;
    const periods = Math.ceil(numIng / 3);
    setPeriods(periods * 10);
  };

  return [periods, calcTime];
};

export default useCalcTime;
