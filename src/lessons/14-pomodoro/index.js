import React, { useState } from "react";

export default function Lesson14() {
  let [time, setTime] = useState("3.0");
  let [running, setRunning] = useState("false");

  function getLeftTime(e) {
    console.log(time);
    setTime((time) => {
      return ((time * 10 - 1) / 10).toFixed(1);
    });
  }

  function restartTime(e) {
    console.log(running);
    return running;
  }

  return (
    <div className="wrapper_lesson">
      <h3>Урок 14</h3>
      <h4>Pomodoro timer</h4>
      <div className="w-50 fs-5">
        <div>
          Seconds Left: <span className="badge bg-dark  me-1">{time}</span>
          Running: <span className="badge bg-dark me-1">{running}</span>
        </div>
        <hr />
        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={getLeftTime}
          >
            <i className="fa fa-play"></i>
          </button>
          <button className="btn btn-outline-dark" onClick={restartTime}>
            <i className="fa fa-stop"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
