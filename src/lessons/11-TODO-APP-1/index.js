import React from "react";

export default function Lesson11() {
  return (
    <div className="wrapper_lesson">
      <h3>Урок 11</h3>
      <h4>TODO-APP-1</h4>
      <p className="fs-5 text-center">Ivan's variant</p>
      <div className="mb-3">
        <input
          type="text"
          className="form-control d-inline w-25 me-2"
          id="exampleInputEmail1"
        />
        <button className="btn btn-primary">ADD</button>
      </div>
      <div className="mb-3">
        <div class="form-check fs-5">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label me-1" for="flexCheckDefault">
            Some text
          </label>
          <i class="bi bi-x-square-fill"></i>
        </div>
      </div>
      <div>
        <div className="fs-5">
          <span>Show: </span>
          <a href="#all" class="stretched-link me-2">
            ALL
          </a>
          <a href="#active" class="stretched-link me-2">
            ACTIVE
          </a>
          <a href="#done" class="stretched-link me-2">
            DONE
          </a>
        </div>
      </div>
    </div>
  );
}
