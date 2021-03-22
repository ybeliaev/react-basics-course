import React, { useEffect, useState, useRef } from "react";

export default function Lesson22() {
  let [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const parentRef = useRef();
  const childRef = useRef();

  function fetchTodos() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchTodos();
  }, []);
  // const intersected = useObserver(parentRef, childRef, () =>
  //   fetchTodos(page, limit)
  // );

  const elements = todos.map((todo) => (
    <li key={todo.id} className="list-group-item list-group-item-action">
      {todo.id}. {todo.title}
      <div ref={childRef}></div>
    </li>
  ));
  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 22.</h3>
      <h5 className="text-center">Hook pagination</h5>
      <input type="text" className="form-control mb-2 w-50"></input>
      <ul
        className="list-group w-50 overflow-auto"
        style={{ maxHeight: "500px" }}
        ref={parentRef}
      >
        {loading ? <Loader /> : elements}
      </ul>
    </div>
  );
}
function Loader() {
  return (
    <div class="spinner-grow" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}
