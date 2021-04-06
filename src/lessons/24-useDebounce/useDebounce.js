import { useCallback, useRef, useCallback } from "react";

import React from "react";

export default function useDebounce(callback, delay) {
  let timer = "";
  const debouncedCallback = useCallback(() => {
    timer = setTimeout((...args) => {
      callback(...args);
    }, delay);
  }, [callback.delay]);
  return debouncedCallback;
}
