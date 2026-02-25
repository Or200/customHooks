import { useEffect, useRef, useState } from "react";

function usePrevious() {
  const [valuePrevies, setValuePrevies] = useState("");
  const [valueCurrent, setValueCurrent] = useState("");

  const setValue8 = (val) => {
    setValuePrevies(valueCurrent);
    setValueCurrent(val);
  };
  return { valuePrevies, setValue8 };
}

export default usePrevious;
