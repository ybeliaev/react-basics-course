import React from "react";

import Lesson1 from "./lessons/1-jsx-to-hyperscript/Lesson1";
import Lesson2 from "./lessons/2-hyperscript-to-jsx/Lesson2";

const title = React.createElement(
  "h1",
  { class: "xxx" },
  "Примеры работ курса."
);
const subTitle = React.createElement(
  "h2",
  { class: "xxx" },
  "Откоментируйте нужную строку с элементом."
);
function App() {
  return (
    <div className="wrapper">
      <div>
        {title}
        {subTitle}
        
        <Lesson1/>
        <Lesson2/>
      </div>
    </div>
  );
}

export default App;
