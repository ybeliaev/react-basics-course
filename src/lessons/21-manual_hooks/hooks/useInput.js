import { useState } from "react";

export default function useInputs(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);
  const resetValue = () => setValue("");
  return {
    value,
    onChange,
    resetValue,
  };
}
