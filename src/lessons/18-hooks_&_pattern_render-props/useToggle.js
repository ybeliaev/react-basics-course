import React, { useState } from "react";

export default function useToggle(option) {
  const [on, setOn] = useState(option);
  function toggle() {
    setOn((on) => !on);
  }
  return [on, toggle];
}
