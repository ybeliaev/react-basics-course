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
schema
  .validate(
    { userName: "a", email: "a sdasdas@asd.com" },
    { abortEarly: false }
  )
  .then((x) => console.log(x))
  .catch((e) => console.dir(e.inner));
// e:
// Object:
// errors: (2) ["userName must be at least 3 characters", "email must be a valid email"]
// inner: (2) [ValidationError: userName must be at least 3 characters at createError (http://localhost:3000/0…, ValidationError: email must be a valid email at createError (http://localhost:3000/0.a0741293c4…]
// message: "2 errors occurred"
// name: "ValidationError"
// path: undefined
// type: undefined
// value: {userName: "a", email: "a sdasdas@asd.com"}

// e.inner:
//Array(2)
// 0: ValidationError: userName must be at least 3 characters at createError (http://localhost:3000/0.a0741293c468a136e8c2.hot-update.js:2786:21) at http://localhost:3000/0.a0741293c468a136e8c2.hot-update.js:2804:139
//   errors: ["userName must be at least 3 characters"]
//   inner: []
//   message: "userName must be at least 3 characters"
//   name: "ValidationError"
//   params: {value: "a", originalValue: "a", label: undefined, path: "userName", min: 3}
//   path: "userName"
//   type: "min"
//   value: "a"
//   stack: "ValidationError: userName must be at least 3 characters↵
// 1: ValidationError: email must be a valid email at createError (http://localhost:3000/0.a0741293c468a136e8c2.hot-update.js:2786:21) at http://localhost:3000/0.a0741293c468a136e8c2.hot-update.js:2804:139
//   errors: ["email must be a valid email"]
//   inner: []
//   message: "email must be a valid email"
//   name: "ValidationError"
//   params: {value: "a sdasdas@asd.com", originalValue: "a sdasdas@asd.com", label: undefined, path: "email", regex: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A…]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i}
//   path: "email"
//   type: "email"
//   value: "a sdasdas@asd.com"
//   stack: "ValidationError: email must be a valid email
// функция для конвертации ошибок в нужный формат: оставляю для каждого поля только первую ошибку
function convert(errors) {
  return errors.inner.reduce((acc, item) => {
    let name = (item.path || "").includes(".")
      ? item.path.split(".")[0]
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
  async function onSubmit(event) {
    event.preventDefault();
    let error = await schema
      .validate(inputs, { abortEarly: false })
      .then((_) => ({}))
      .catch(convert);
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
          <span>&nbsp;({errors.username || "*"})</span>
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
          <span>&nbsp;({errors.email || "*"})</span>
          <input
            type="email"
            className="form-control"
            id="email-13"
            aria-describedby="emailHelp"
            value={inputs.email}
            onChange={onChange}
            name="email"
          />
        </div>

        <div className="form-group mb-2">
          <label>About</label>
          <span>&nbsp;({errors.about || "*"})</span>
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
