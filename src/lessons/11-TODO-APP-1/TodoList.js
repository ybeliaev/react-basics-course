import React from "react";

export default function TodoList() {
  return (
    <div className="mb-3">
      <div class="form-check fs-5">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheck"
        />
        <label class="form-check-label me-2" for="flexCheck">
          Some text
        </label>
        <i class="bi bi-x-square-fill"></i>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="fs-5">
      <span>Show: </span>
      <a href="#all" class="me-2 text-decoration-none">
        ALL
      </a>
      <a href="#active" class="me-2 text-decoration-none">
        ACTIVE
      </a>
      <a href="#done" class="me-2 text-decoration-none">
        DONE
      </a>
    </div>
  );
}
