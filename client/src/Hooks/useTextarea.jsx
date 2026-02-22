import React, { useState } from "react";

function useTextarea() {
  const [value5, setValue] = useState("");

  const onChange5 = (e) => {
    setValue(e.target.value);
  };

  const reset5 = () => {
    setValue("");
  };
  return {value5, onChange5, reset5};
}

export default useTextarea;
