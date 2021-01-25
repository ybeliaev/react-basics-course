import React from "react";

import { FILTER_ACTIVE, FILTER_ALL, FILTER_DONE } from "./TodoList";

export default function Footer({ filter, setFilter }) {
  return (
    <div className="fs-5">
      <span>Show: </span>
      {filter == FILTER_ALL ? (
        <a
          href="#all"
          class="me-2 link-primary"
          onClick={(e) => {
            e.preventDefault();
            setFilter(FILTER_ALL);
          }}
        >
          ALL
        </a>
      ) : (
        <a href="#all" class="me-2 link-primary">
          ALL
        </a>
      )}
      {filter == FILTER_ACTIVE ? (
        <a href="#active" class="me-2 link-primary">
          ACTIVE
        </a>
      ) : (
        <a
          href="#active"
          class="me-2 link-primary"
          onClick={(e) => {
            e.preventDefault();
            setFilter(FILTER_ACTIVE);
          }}
        >
          ACTIVE
        </a>
      )}
      {filter == FILTER_ACTIVE ? (
        <a href="#done" class="me-2 link-primary">
          DONE
        </a>
      ) : (
        <a
          href="#done"
          class="me-2 link-primary"
          onClick={(e) => {
            e.preventDefault();
            setFilter(FILTER_DONE);
          }}
        >
          DONE
        </a>
      )}
    </div>
  );
}
