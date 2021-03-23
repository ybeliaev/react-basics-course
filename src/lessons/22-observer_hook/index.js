import React, { useEffect, useState, useRef, useCallback } from "react";
import useSearch from "../22-observer_hook/useSearch";

export default function Lesson22() {
  const [page, setPage] = useState(1);
  let limit = 10;
  const { todos, loading } = useSearch(limit, page);
  const [querySearch, setQuerySearch] = useState("");

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      // if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        // console.log(entries);
        // if (entries[0].isIntersecting) {
        //   setPage((prevPage) => prevPage + 1);
        // }
      });
      if (node) observer.current.observe(node);
      console.log({ node }); // будет элемент на котором lastElementRef
    },
    [loading, page]
  );

  const elements = todos
    .filter((val) => {
      if (querySearch == "") {
        return val;
      } else if (val.title.toLowerCase().includes(querySearch.toLowerCase())) {
        return val;
      }
    })
    .map((todo, idx) => {
      if (todos.length === idx + 1) {
        return (
          <li
            ref={lastElementRef}
            key={todo.id}
            className="list-group-item list-group-item-action "
          >
            {todo.id}. LAST ELEMENT
          </li>
        );
      } else {
        return (
          <li key={todo.id} className="list-group-item list-group-item-action">
            {todo.id}. {todo.title}
          </li>
        );
      }
    });

  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 22.</h3>
      <h5 className="text-center">Hook pagination with search filter</h5>
      <input
        type="text"
        className="form-control mb-2 w-50"
        onChange={(e) => setQuerySearch(e.target.value)}
        placeholder="search.."
      ></input>
      <ul
        ref={observer}
        className="list-group w-50 overflow-auto"
        style={{ maxHeight: "500px" }}
      >
        {elements}
        <div>{loading && <Loader />}</div>
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
