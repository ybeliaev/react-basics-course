import React, { useState } from "react";

import useInputs from "./hooks/useInput";

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
    </div>
  );
}

function Inputs() {
  const userObj = useInputs("");
  let { value: user } = userObj;

  const passObj = useInputs("");
  let { value: pass } = passObj;

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
      {/* <button
        className="btn btn-primary mt-2"
        onClick={() => {
          useInputs("");
          setPass("");
        }}
      >
        CLEAR
      </button> */}
      <br />
      Username:
      <span className="bg-info"> {user}</span>
      <br />
      Password:
      <span className=" bg-info"> {pass}</span>
    </div>
  );
}

export default Lesson21;
