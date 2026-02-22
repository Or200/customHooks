import { useState } from "react";

function useCounterWithStep(number, step) {
  const [valueNumber2, setValueNumber] = useState(number);
  const inc2 = () => {
    setValueNumber(valueNumber2 + step);
  };
  const dec2 = () => {
    setValueNumber(valueNumber2 - step);
  };
  const reset2 = () => {
    setValueNumber(number);
  };

  return { valueNumber2, inc2, dec2, reset2 };
}

export default useCounterWithStep;
