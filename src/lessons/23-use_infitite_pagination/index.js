import React, { useEffect, useState, useRef, useCallback } from "react";
import useScroll from "./useScroll";

export default function Lesson23() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const parentRef = useRef();
  const childRef = useRef();

  const intersected = useScroll(parentRef, childRef, () =>
    fetchTodos(limit, page)
  );

  function fetchTodos(limit, page) {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos((prev) => [...prev, ...json]);
        setPage((prev) => prev + 1);
        console.log("do it");
      })
      .catch((error) => console.log(error));
  }
  //   useEffect(() => {
  //     fetchTodos(limit, page);
  //   }, []);

  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 23.</h3>
      <h5 className="text-center">Hook infinite pagination.</h5>
      <ul
        ref={parentRef}
        className="list-group w-50 overflow-auto"
        style={{ maxHeight: "500px" }}
      >
        {todos.map((todo, idx) => {
          return (
            <li
              key={todo.id}
              className="list-group-item list-group-item-action"
            >
              {todo.id}. {todo.title}
            </li>
          );
        })}
        <div
          ref={childRef}
          style={{ height: 20, backgroundColor: "tomato", marginBottom: 10 }}
        ></div>
      </ul>
    </div>
  );
}
