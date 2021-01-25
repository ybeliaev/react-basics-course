import React, { useState } from "react";

export default function TodoForm({ createTodo }) {
  let [text, setText] = useState("");
  console.log(text);
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control d-inline w-25 me-2"
        id="exampleInputEmail1"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn btn-primary"
        disabled={!text}
        onClick={(_) => {
          createTodo({ text });
          setText("");
        }}
      >
        ADD
      </button>
    </div>
  );
}
