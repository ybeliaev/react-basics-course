import React from "react";

import * as R from "ramda";
import { func } from "prop-types";

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
        .then(([resp, data]) => {console.log(data); console.log(res);})
    };
    
    // или

    function() {
      fetch("https://jsonplaceholder.typicode.com/todos/1").then((resp) =>
      resp.json().then((data) => {
        console.log(data);
        console.log(resp);
      })
    );
    };
      </code>
      </pre>
    `,
  };
}

function MyComponent1() {
  return (
    <div
      className="fs-4 text-info bg-dark"
      dangerouslySetInnerHTML={createMarkup1()}
    />
  );
}
function MyComponent2() {
  return (
    <div
      className="fs-4 text-info bg-dark"
      dangerouslySetInnerHTML={createMarkup2()}
    />
  );
}

// fetch("https://api.github.com/users/ybeliaev").then((resp) =>
//   resp.json().then((data) => {
//     console.log(data);
//     console.log(resp);
//   })
// );

async function fetchJSON(url, optons = {}) {
  optons = R.mergeDeepRight(optons, {
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(optons.body),
  });
  let resp = await fetch(url, optons);
  return resp.json();
}

export default function Lesson15() {
  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 15</h3>
      <h4>Git API</h4>
      <p>
        fetch install like as <strong>cross-fetch</strong>
      </p>
      <MyComponent1 />
      <p>Такая запись даёт возможность работать с несколькими переменными</p>
      <p>Похожее в формате then:</p>
      <MyComponent2 />
      <p>
        Когда возможно, испол первый вариант с async\await, если нет -
        последний, с чейнингом
      </p>
    </div>
  );
}
