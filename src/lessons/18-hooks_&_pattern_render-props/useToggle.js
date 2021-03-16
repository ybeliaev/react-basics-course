import React, { useState } from "react";

export default function useToggle(option) {
  const [on, setOn] = useState(option);
  function useToggle() {
    setOn((on) => !on);
  }
  return [on, useToggle];
}
