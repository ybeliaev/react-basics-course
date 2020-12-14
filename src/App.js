import React from "react";

import Lesson1 from "./lessons/1-jsx-to-hyperscript/Lesson1";
import Lesson2 from "./lessons/2-hyperscript-to-jsx/Lesson2";
import Lesson3 from "./lessons/3-progress-bar/Lesson3";

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
      </div>
    </div>
  );
}

export default App;
