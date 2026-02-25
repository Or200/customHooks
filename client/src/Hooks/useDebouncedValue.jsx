import { useEffect, useState } from "react";

function useDebouncedValue() {
  const [value9, setValue9] = useState("");

  const delay = () => {
    useEffect(() => {
      const wait = setTimeout(() => {
        setValue9(value9);
      }, 1500);
    }, [value9]);
  };

  return {value9, delay};
}

export default useDebouncedValue;
