import React, { useState } from "react";

import * as yup from "yup";

// flag {abortEarly: true/false}, true - валидация прекращается при первой ошибке
// {abortEarly: true} - поле errors будет массивом с текстом ошибки
// {abortEarly: false} - поле inner будет массивом с текстом ошибки
let schema = yup.object().shape({
  userName: yup.string().min(3).max(50).required(),
  email: yup.string().email().required(),
  about: yup.string().min(3).max(500),
});
// функция для конвертации ошибок в нужный формат
function convert(errors) {
  return errors.inner.reduce((acc, item) => {
    let name = (item.path || "").includes(".")
      ? item.path.split(".")
      : item.path || "";
    return acc[item.path || ""] ? acc : { ...acc, [name]: item.message };
  }, {});
}

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

  function onChange(event) {
    let {
      target: { value, name, type, checked },
    } = event;
    value = type == "checkbox" ? checked : value;
    setInputs((inputs) => ({ ...inputs, [name]: value })); // [name] - атрибут name у input
  }
  function onSubmit(event) {
    event.preventDefault();
    console.log(inputs);
  }
  return (
    <div className="wrapper_lesson">
      <h3>Урок 13</h3>
      <h4>Profile Form</h4>
      <form className="w-50 fs-5" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="password-13" className="form-label">
            Username
          </label>
          <span>&nbsp;(*)</span>
          <input
            type="text"
            name="userName"
            className="form-control"
            id="password-13"
            value={inputs.userName}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email-13" className="form-label">
            Email
          </label>
          <span>&nbsp;(*)</span>
          <input
            type="email"
            className="form-control"
            id="email-13"
            aria-describedby="emailHelp"
            value={inputs.email}
            onChange={onChange}
          />
        </div>

        <div className="form-group mb-2">
          <label>About</label>
          <span>&nbsp;(*)</span>
          <br />
          <textarea
            name="about"
            rows={5}
            className="form-control"
            value={null}
            onChange={null}
            value={inputs.about}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
