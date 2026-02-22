import React, { useState } from "react";

function useSessionStorageState(key, defaultValue) {
  const [value7, setValue7] = useState(key);
  const setValueFunc7 = () => {
    sessionStorage.setItem("key", value7);
  };

  const remove7 = () => {
    setValue7(defaultValue);
    sessionStorage.setItem("key", defaultValue);
  };

  return { value7, setValue7, setValueFunc7, remove7 };
}

export default useSessionStorageState;
