import React from "react";

export default function TodoItem({ todo }) {
  return (
    <div className="mb-3">
      <div className="form-check fs-5">
        <input className="form-check-input" type="checkbox" value="" />
        <span
          className="me-2"
          style={{
            textDecoration: todo.done ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
          {todo.done}
        </span>
        <button type="button" style={{ outline: "none", border: "none" }}>
          <i className="bi bi-x-square-fill"></i>
        </button>
      </div>
    </div>
  );
}
