import React from "react";

import Lesson1 from "./lessons/1-jsx-to-hyperscript/Lesson1";
import Lesson2 from "./lessons/2-hyperscript-to-jsx/Lesson2";
import Lesson3 from "./lessons/3-progress-bar/Lesson3";
import Lesson4 from "./lessons/4-common-card/Lesson4";
import Lesson5Resource from "./lessons/5-pattert-slots/Lesson5Resource";
import Lesson5 from "./lessons/5-pattert-slots/Lesson5";
import Lesson6 from "./lessons/6-pagination/Lesson6";
import Lesson7 from "./lessons/7-project-tweet";
import Lesson8 from "./lessons/8-bmi-culculator";
import Lesson9 from "./lessons/9-norm-weight-calulate";
import Lesson10 from "./lessons/10-project_RGB-slider";
import Lesson11 from "./lessons/11-TODO-APP-1";
import Lesson12 from "./lessons/12-calories-app";
import Lesson13 from "./lessons/13-profile-form";
import Lesson14 from "./lessons/14-pomodoro";
import Lesson15 from "./lessons/15-git_api";

const title = React.createElement(
  "h1",
  { class: "xxx", style: { color: "#4d2600" } },
  "Примеры работ курса."
);

function App() {
  return (
    <div className="wrapper">
      <div>
        {title}

        <Lesson1 />
        <Lesson2 />
        <Lesson3 />
        <Lesson4 />
        <Lesson5Resource />
        <Lesson5 />
        <Lesson6 />
        <Lesson7 />
        <Lesson8 />
        <Lesson9 />
        <Lesson10 />
        <Lesson11 />
        <Lesson12 />
        <Lesson13 />
        <Lesson14 />
        <Lesson15 />
      </div>
    </div>
  );
}

export default App;
