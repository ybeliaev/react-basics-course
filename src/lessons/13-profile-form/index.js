import React, { useState } from "react";

import * as yup from "yup";

let schema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  about: yup.string().min(3).max(100),
});

export default function Lesson13() {
  let initialState = {
    userName: "john-snow",
    email: "john-snow@gmail.com",
    about: "...",
  };
  let [inputs, setInputs] = useState({
    userName: initialState.userName,
    email: initialState.email,
    about: initialState.about,
  });
  let [errors, setErrors] = useState({});

  function onChange() {}
  return (
    <div className="wrapper_lesson">
      <h3>Урок 13</h3>
      <h4>Profile Form</h4>
      <form className="w-50 fs-5">
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Username
          </label>
          <span>&nbsp;(*)</span>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={inputs.userName}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <span>&nbsp;(*)</span>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={inputs.email}
          />
        </div>

        <div className="form-group mb-2">
          <label>About</label>
          <span>&nbsp;(*)</span>
          <br />
          <textarea
            name="body"
            rows={5}
            className="form-control"
            value={null}
            onChange={null}
            value={inputs.about}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
