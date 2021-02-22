import React from "react";

function createMarkup1() {
  return {
    __html: `<pre>
        <code>
    (async function () {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await res.json();
        console.log(data);
        console.log(res);
        })();
    </code>
    </pre>
      `,
  };
}
function createMarkup2() {
  return {
    __html: `<pre>
          <code>
    function() {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(resp => [resp, resp.json()])
        .then(([resp,data]) => {console.log(data); console.log(res);})
    };
    
    // или

    function() {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(resp => resp.json().then(data => {console.log(data); console.log(res)}
    };
      </code>
      </pre>
    `,
  };
}

function MyComponent1() {
  return <div dangerouslySetInnerHTML={createMarkup1()} />;
}
function MyComponent2() {
  return <div dangerouslySetInnerHTML={createMarkup2()} />;
}
// let data = null;
(async function () {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await res.json();
  console.log(data);
  console.log(res);
})();

export default function Lesson15() {
  return (
    <div className="wrapper_lesson">
      <h3>Урок 15</h3>
      <h4>Git API</h4>
      <p>
        fetch install like as <strong>cross-fetch</strong>
      </p>
      <MyComponent1 />
      <p>Такая запись даёт возможность работать с несколькими переменными</p>
      <p>Похожее в формате then:</p>
      <MyComponent2 />
    </div>
  );
}
