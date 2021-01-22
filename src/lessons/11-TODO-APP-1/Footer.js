import React from "react";

export default function Footer() {
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
