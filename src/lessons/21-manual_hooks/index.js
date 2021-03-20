import React, { useState, useEffect, useRef } from "react";

import useInputs from "./hooks/useInput";
import useHover from "./hooks/useHover";

function Lesson21() {
  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 21.</h3>
      <h4>
        Хуки самодельные <span>&#128540;</span>
      </h4>
      <span className="mb-1 fs-6 badge bg-warning text-dark">
        Хуки нельзя использовать внутри вложенных функций. Только на высшем
        уровне.
      </span>
      <h5 className="text-center">Hook useInput</h5>
      <Inputs />
      <span className="mb-1 fs-6 badge bg-warning text-dark">
        Тут проблема: как реализовать обнуление инпутов, если кнопкой до стейта
        не дотянуться?
      </span>
      <span className="mb-1 fs-6 badge bg-warning text-dark">
        Пришлось присвоить свойство объекта переменной с другим названием
      </span>
      <hr />
      <h5 className="text-center">Hook useHover</h5>
      <div style={{ display: "flex" }}>
        <Hover1 />
        <Hover2 />
      </div>
      <hr />
      <h5 className="text-center">Hook pagination</h5>
      <List />
    </div>
  );
}
// ***************************************************************
function Inputs() {
  const userObj = useInputs("");
  let { value: user, onChange: onChangeUser, resetValue: resetUser } = userObj;

  const passObj = useInputs("");
  let { value: pass, onChange: onChangePass, resetValue: resetPass } = passObj;
  function resetAllvalue() {
    resetPass();
    resetUser();
  }
  return (
    <div class="mb-3 w-25 fs-5">
      <label className="form-label">Usename</label>
      <input
        type="text"
        className="form-control"
        placeholder="user"
        {...userObj}
      />
      <label className="form-label">Password</label>
      <input
        type="text"
        className="form-control"
        value={pass}
        placeholder="password"
        {...passObj}
      />
      <button className="btn btn-primary mt-2" onClick={resetAllvalue}>
        CLEAR
      </button>
      <br />
      Username:
      <span className="bg-info"> {user}</span>
      <br />
      Password:
      <span className=" bg-info"> {pass}</span>
    </div>
  );
}
// ***************************************************************
function Hover1() {
  const ref = useRef();
  const isHover = useHover(ref);
  return (
    <div
      ref={ref}
      style={{
        width: 150,
        height: 150,
        backgroundColor: isHover ? "#ff0066" : "#00cc99",
      }}
    ></div>
  );
}
function Hover2() {
  const ref = useRef();
  const isHover = useHover(ref);
  return (
    <div
      ref={ref}
      style={{
        width: 150,
        height: 150,
        backgroundColor: isHover ? "#9900ff" : "#0099ff",
      }}
    ></div>
  );
}
// ***************************************************************
function List() {
  const [todos, setTodos] = useState([]);

  function fetchTodos() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ul className="list-group w-50">
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item list-group-item-action">
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default Lesson21;
