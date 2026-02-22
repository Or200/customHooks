import React, { useState } from "react";

function usePrevious() {
  const [value8, setValue8] = useState("");
  const [oldValue, setOldValue] = useState("old");
  const [tempValue, setTempValue] = useState();

  const previousValue = () => {
    setTempValue(value8);
    setValue8(tempValue)
  };

  return { oldValue, previousValue, setValue8 };
}

export default usePrevious;
