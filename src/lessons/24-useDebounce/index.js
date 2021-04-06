import React, { useState, useRef } from "react";
import useDebounce from "./useDebounce";

export default function Lesson24() {
  const [text, setText] = useState("");
  const ref = useRef();

  const debouncedFunction = useDebounce(setText, 500);

  const onChange = (event) => {
    debouncedFunction(event.target.value);
  };

  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 24.</h3>
      <h5 className="text-center">Hook debounce.</h5>
      <input
        className="form-control w-50 mb-1"
        type="text"
        // value={text} - will not work without it
        onChange={onChange}
        ref={ref}
      />
      <button
        className="btn btn-dark mb-1"
        onClick={() => {
          setText("");
          // add focus for input
          ref.current.focus();
        }}
      >
        CLEAR
      </button>
      <pre>
        <code>{text}</code>
      </pre>
    </div>
  );
}
