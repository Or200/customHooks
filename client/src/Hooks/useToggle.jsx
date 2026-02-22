import { useState } from "react";

function useToggle() {
  const [value, setValue] = useState(false);
  const toggle = () => {
    if (value === false) setValue(true);
    else setValue(false);
  };

  return { value, toggle };
}

export default useToggle;
