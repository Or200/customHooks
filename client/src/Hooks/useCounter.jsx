import { useState } from "react";

function useCounter(number) {
  const [valueNumber, setValueNumber] = useState(number);
  const inc = () => {
    setValueNumber(valueNumber + 1);
  };
  const dec = () => {
    setValueNumber(valueNumber - 1);
  };
  const reset = () => {
    setValueNumber(number);
  };

  return { valueNumber, inc, dec, reset };
}

export default useCounter;
