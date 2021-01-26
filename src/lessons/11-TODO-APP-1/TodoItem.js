import React from "react";

export default function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <div className="mb-3">
      <div className="form-check fs-5">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          onChange={() => {
            toggleTodo(todo.text);
          }}
          checked={todo.done}
        />
        <span
          className="me-2"
          style={{
            textDecoration: todo.done ? "line-through" : "none",
            color: todo.done ? "grey" : "black",
            cursor: "pointer",
          }}
          onClick={() => toggleTodo(todo.text)}
        >
          {todo.text}
        </span>
        <button
          type="button"
          style={{ outline: "none", border: "none" }}
          onClick={() => removeTodo(todo.text)}
        >
          <i className="bi bi-x-square-fill"></i>
        </button>
      </div>
    </div>
  );
}
