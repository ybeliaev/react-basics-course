import React, { useEffect, useState, useRef } from "react";
import useSearch from "../22-observer_hook/useSearch";

export default function Lesson22() {
  const [page, setPage] = useState(1);
  let limit = 10;
  const { todos, loading } = useSearch(limit, page);
  const [querySearch, setQuerySearch] = useState("");
  const parentRef = useRef();
  const childRef = useRef();

  function handleSearch(value) {
    console.log(value);
    console.log(todos);
  }

  const elements = todos
    .filter((val) => {
      if (querySearch == "") {
        return val;
      } else if (val.title.toLowerCase().includes(querySearch.toLowerCase())) {
        return val;
      }
    })
    .map((todo) => (
      <li key={todo.id} className="list-group-item list-group-item-action">
        {todo.id}. {todo.title}
        <div ref={childRef}></div>
      </li>
    ));
  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 22.</h3>
      <h5 className="text-center">Hook pagination</h5>
      <input
        type="text"
        className="form-control mb-2 w-50"
        onChange={(e) => setQuerySearch(e.target.value)}
        placeholder="search.."
      ></input>
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
