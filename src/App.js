import React from 'react';


const title = React.createElement('h1', {class: "xxx"}, 'Примеры работ курса.');
const subTitle = React.createElement('h2', {class: "xxx"}, 'Откоментируйте нужную строку с элементом.');
function App() {   
  return (
    <div className="wrapper">
      <div>{title}{subTitle}</div>
    </div>
  );
}

export default App;
