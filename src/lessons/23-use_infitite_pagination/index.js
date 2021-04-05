import React, { useEffect, useState, useRef, useCallback } from "react";

export default function Lesson23() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const fetchTodos = (limit, page) => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => setTodos(json));
  };
  useEffect(() => {
    fetchTodos(limit, page);
  }, []);

  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 23.</h3>
      <h5 className="text-center">Hook infinite pagination.</h5>
      <ul
        className="list-group w-50 overflow-auto"
        style={{ maxHeight: "500px" }}
      >
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className="list-group-item list-group-item-action"
            >
              {todo.id}. {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
