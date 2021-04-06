import React, { useState, useRef } from "react";

export default function Lesson24() {
  const [text, setText] = useState("");
  const ref = useRef();
  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 24.</h3>
      <h5 className="text-center">Hook debounce.</h5>
      <input
        className="form-control w-50 mb-1"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={ref}
      />
      <button
        className="btn btn-dark mb-1"
        onClick={() => {
          setText("");
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
