import React, { useState, useEffect } from "react";

function useHover(ref) {
  let [isHovering, setHovering] = useState(false);

  const on = () => setHovering(true);
  const off = () => setHovering(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.addEventListener("mouseenter", on);
    ref.current.addEventListener("mouseover", on);
    ref.current.addEventListener("mouseleave", off);
    return function () {
      ref.current.removeEventListener("mouseenter", on);
      ref.current.removeEventListener("mouseover", on);
      ref.current.removeEventListener("mouseleave", off);
    };
  }, []);
  return isHovering;
}
