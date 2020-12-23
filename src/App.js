import React from "react";

import Lesson1 from "./lessons/1-jsx-to-hyperscript/Lesson1";
import Lesson2 from "./lessons/2-hyperscript-to-jsx/Lesson2";
import Lesson3 from "./lessons/3-progress-bar/Lesson3";
import Lesson4 from "./lessons/4-common-card/Lesson4";
import Lesson5Resource from "./lessons/5-pattert-slots/Lesson5Resource"
import Lesson5 from "./lessons/5-pattert-slots/Lesson5"
import Lesson6 from "./lessons/6-pagination/Lesson6"

const title = React.createElement(
  "h1",
  { class: "xxx", style:{color: '#4d2600'} },
  "Примеры работ курса."
);

function App() {
  return (
    <div className="wrapper">
      <div>
        {title}
        
        <Lesson1/>
        <Lesson2/>
        <Lesson3/>
        <Lesson4/>
        <Lesson5Resource/>
        <Lesson5/>
        <Lesson6/>
      </div>
    </div>
  );
}

export default App;
