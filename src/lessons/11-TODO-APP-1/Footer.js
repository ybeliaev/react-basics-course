import React from "react";

import { FILTER_ACTIVE, FILTER_ALL, FILTER_DONE } from "./TodoList";

export default function Footer({ filter, setFilter }) {
  return (
    <div className="fs-5">
      <span>Show: </span>
      {filter == FILTER_ALL ? (
        <a href="#all">
          <b>All</b>
        </a>
      ) : (
        <a
          href="#all"
          onClick={(e) => {
            e.preventDefault();
            setFilter(FILTER_ALL);
          }}
        >
          All
        </a>
      )}
      {", "}
      {filter == FILTER_ACTIVE ? (
        <a href="#active">
          <b>Active</b>
        </a>
      ) : (
        <a
          href="#active"
          onClick={(e) => {
            e.preventDefault();
            setFilter(FILTER_ACTIVE);
          }}
        >
          Active
        </a>
      )}
      {", "}
      {filter == FILTER_DONE ? (
        <a href="#done">
          <b>Done</b>
        </a>
      ) : (
        <a
          href="#done"
          onClick={(e) => {
            e.preventDefault();
            setFilter(FILTER_DONE);
          }}
        >
          Done
        </a>
      )}
    </div>
  );
}
