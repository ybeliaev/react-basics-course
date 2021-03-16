import React, { useEffect, useState } from "react";

function Toggle({ children }) {
  const [on, setOn] = useState(false);
  function toggle() {
    setOn((on) => !on);
  }
  return <>{children({ on, toggle })}</>;
}

function Lesson19() {
  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 19.</h3>
      <h4>ПАТТЕРН RENDER-PROP.</h4>
      <span className="fs-6 badge bg-warning text-dark">
        Этот паттерн хорош, когда много состояний, т.к. аргументы функций
        инкапсулированы
      </span>
      <Toggle>
        {({ on, toggle }) => {
          return (
            <div>
              <button
                type="button"
                className={`btn ${on ? "btn-success" : "btn-warning"}`}
                onClick={toggle}
              >
                {on ? "HIDE" : "SHOW"}
              </button>
              <div className="col">
                <div className={`${on ? "" : "collapse"}`}>
                  <div className="card card-body">
                    Some placeholder content for the first collapse component of
                    this collapse example. This panel is hidden by default but
                    revealed when the user activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Toggle>
    </div>
  );
}

export default Lesson19;
