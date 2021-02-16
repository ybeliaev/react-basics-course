import React, { useState, useEffect } from "react";

export default function Lesson14() {
  let [time, setTime] = useState(3000);
  let [running, setRunning] = useState("false");

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((time) => {
          return time > 0 ? (time - 100).toFixed(1) : 0.0;
        });
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [running]);

  function getLeftTime(e) {
    setRunning((running) => !running);
  }

  function restartTime(e) {
    console.log(running);
    setTime(3000);
    setRunning((running) => false);
  }

  return (
    <div className="wrapper_lesson">
      <h3>Урок 14</h3>
      <h4>Pomodoro timer</h4>
      <div className="w-50 fs-5">
        <div>
          Seconds Left:{" "}
          <span className="badge bg-dark  me-1">
            {(time / 1000).toFixed(1)}
          </span>
          Running:{" "}
          <span className="badge bg-dark me-2">
            {running ? "true" : "false"}
          </span>
        </div>
        <hr />
        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={getLeftTime}
            disabled={!time}
          >
            {running == false ? (
              <i className="fa fa-play"></i>
            ) : (
              <i className="fa fa-pause"></i>
            )}
          </button>
          <button className="btn btn-outline-dark" onClick={restartTime}>
            <i className="fa fa-stop"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
