import React from "react";
import { useCallback } from "react";

export default function useDebounce(callback, delay) {
  let timer = undefined;
  const debouncedCallback = useCallback(
    (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback.delay]
  );
  return debouncedCallback;
}
