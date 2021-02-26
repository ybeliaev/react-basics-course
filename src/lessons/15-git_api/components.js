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

export function MyComponent1() {
  return (
    <div
      className="fs-4 text-info bg-dark"
      dangerouslySetInnerHTML={createMarkup1()}
    />
  );
}
export function MyComponent2() {
  return (
    <div
      className="fs-4 text-info bg-dark"
      dangerouslySetInnerHTML={createMarkup2()}
    />
  );
}
