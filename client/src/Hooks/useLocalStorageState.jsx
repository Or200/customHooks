import { useState } from "react";

function useLocalStorageState(key, defaultValue) {
  const [value6, setValue6] = useState(key);
  const setValueFunc6 = () => {
    localStorage.setItem("key", value6);
  };

  const remove6 = () => {
    setValue6(defaultValue);
    localStorage.setItem("key", defaultValue);
  };

  return { value6, setValue6, setValueFunc6, remove6 };
}

export default useLocalStorageState;
