import React from "react";

import ReactLogo from  "./lessons/1-jsx-to-hyperscript/close.svg"

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
        <img src={ReactLogo} alt="React Logo" />
      </div>
    </div>
  );
}

export default App;
