import React, { useEffect, useState } from "react";
import useToggle from "./useToggle";

function Lesson18() {
  const [on, setToggle] = useToggle(false);

  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 18.</h3>
      <h4>ХУКИ И ПАТТЕРН РЕНДЕР-ПРОП.</h4>
      <button
        type="button"
        className={`btn ${on ? "btn-success" : "btn-warning"}`}
        onClick={setToggle}
      >
        {on ? "HIDE" : "SHOW"}
      </button>
      <div className="col">
        <div className={`${on ? "" : "collapse"}`}>
          <div className="card card-body">
            Some placeholder content for the first collapse component of this
            collapse example. This panel is hidden by default but revealed when
            the user activates the relevant trigger.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lesson18;
