import React from "react";

export default function Lesson14() {
  return (
    <div className="wrapper_lesson">
      <h3>Урок 14</h3>
      <h4>Pomodoro timer</h4>
      <div className="w-50 fs-5">
        <div>
          Seconds Left: <span className="badge bg-dark  me-1">0.12</span>
          Running: <span className="badge bg-dark me-1">false</span>
        </div>
        <hr />
        <div>
          <button className="btn btn-outline-primary me-1">
            <i className="fa fa-play"></i>
          </button>
          <button className="btn btn-outline-dark">
            <i className="fa fa-stop"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
