import React, { useState, useEffect } from "react";

export default function Lesson14() {
  let [state, setState] = useState({
    time: 3000,
    running: false,
  });

  useEffect(() => {
    let interval;
    if (state.running) {
      interval = setInterval(() => {
        let newTime = state.time - 100;
        setState(({ time, running }) => {
          let newTime = time - 100;
          return {
            time: newTime,
            running: newTime > 0,
          };
        });
      }, 100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [state.running]);

  function getLeftTime() {
    setState({
      ...state,
      running: !state.running,
    });
  }

  function restartTime() {
    setState({
      time: 3000,
      running: false,
    });
  }

  return (
    <div className="wrapper_lesson">
      <h3>Урок 14</h3>
      <h4>Pomodoro timer</h4>
      <div className="w-50 fs-5">
        <div>
          Seconds Left:{" "}
          <span className="badge bg-dark  me-1">
            {(state.time / 1000).toFixed(1)}
          </span>
          Running:{" "}
          <span className="badge bg-dark me-2">
            {state.running ? "true" : "false"}
          </span>
        </div>
        <hr />
        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={getLeftTime}
            disabled={!state.time}
          >
            {state.running == false ? (
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
