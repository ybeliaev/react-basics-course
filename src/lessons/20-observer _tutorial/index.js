import React, { useRef } from "react";
import { useIntersection } from "react-use";
import App from "./App";

function Lesson20() {
  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 20.</h3>
      <h4>ПАТТЕРН RENDER-PROP.</h4>
      <span className="mb-1 fs-6 badge bg-warning text-dark">
        I use react-use & gsap
      </span>
      <App />
    </div>
  );
}

export default Lesson20;
