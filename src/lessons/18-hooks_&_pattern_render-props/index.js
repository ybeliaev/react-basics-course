import React, { useEffect, useState } from "react";

function Lesson18() {
  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 18.</h3>
      <h4>ХУКИ И ПАТТЕРН РЕНДЕР-ПРОП.</h4>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <div className="col">
        <div className="collapse">
          <div className="card card-body">
            Some placeholder content for the first collapse component of this
            multi-collapse example. This panel is hidden by default but revealed
            when the user activates the relevant trigger.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lesson18;
