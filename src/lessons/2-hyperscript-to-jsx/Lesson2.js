// JSX
let jsx = <div>
  <pre>
    <code>Modify index.js</code>
  </pre>
</div>

// HyperScript
let hs = React.createElement("div", {}, [
  React.createElement("pre", {}, [
    React.createElement("code", {}, ["Modify index.js"]),
  ]),
])

export default function Lesson2() {
  return <div>
    <h4>JSX Breadcrumbs (toDo)</h4>
    <div>{jsx}</div>

    <h4>HyperScript Breadcrumbs (toDo)</h4>
    <div>{hs}</div>
  </div>
}

