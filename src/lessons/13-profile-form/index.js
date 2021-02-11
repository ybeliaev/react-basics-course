import React, { useState } from "react";

import * as yup from "yup";

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
  let [busy, setBusy] = useState(false); // state для блокировки формы

  async function onChange(event) {
    let {
      target: { value, name, type, checked },
    } = event;
    value = type == "checkbox" ? checked : value;

    let newErrors = await schema
      .validateAt(name, { [name]: value }, { abortEarly: false })
      // validateAt позволяет валидировать по пути. У меня - это name. { [name]: value } - обяз объект(определено схемой)
      .then((_) => ({ [name]: "" }))
      .catch(convert);

    setInputs((inputs) => ({ ...inputs, [name]: value })); // [name] - атрибут name у input

    setErrors({ ...errors, ...newErrors }); // реализовано c возможностью сохранять старые ошибки
  }
  function onSubmit(afterSubmit) {
    return async function (event) {
      event.preventDefault();
      setBusy(true);
      let errors = await schema
        .validate(inputs, { abortEarly: false })
        .then((_) => ({}))
        .catch(convert);

      setErrors(errors);
      if (Object.keys(errors).length) {
        setBusy(false);
      } else {
        await afterSubmit(inputs);
        setInputs(initialState);
        setBusy(false);
      }
    };
  }
  async function handleSubmit(inputs) {
    await delay(500);
    console.log(inputs);
  }

  return (
    <div className="wrapper_lesson">
      <h3>Урок 13</h3>
      <h4>Profile Form</h4>
      <form className="w-50 fs-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="password-13" className="form-label">
            Username
          </label>
          {errors.userName ? (
            <span className="text-danger">&nbsp;({errors.userName})</span>
          ) : (
            <span className="text-success">&nbsp;(field is ok)</span>
          )}
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
          {errors.email ? (
            <span className="text-danger">&nbsp;({errors.email})</span>
          ) : (
            <span className="text-success">&nbsp;(field is ok)</span>
          )}

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
          {errors.about ? (
            <span className="text-danger">&nbsp;({errors.about})</span>
          ) : (
            <span className="text-success">&nbsp;(field is ok)</span>
          )}
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
        <button type="submit" className="btn btn-primary" disabled={busy}>
          Submit{" "}
          {busy && (
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
        </button>
      </form>
    </div>
  );
}

// flag {abortEarly: true/false}, true - валидация прекращается при первой ошибке
// {abortEarly: true} - поле errors будет массивом с текстом ошибки
// {abortEarly: false} - поле inner будет массивом с текстом ошибки
let schema = yup.object().shape({
  userName: yup.string().min(3).max(50).required(),
  email: yup.string().email().required(),
  about: yup.string().min(3).max(500),
});

// функция для конвертации ошибок в объект с ключами-именами инпутов: оставляю для каждого поля только первую ошибку
function convert(errors) {
  if (errors.inner) {
    return errors.inner.reduce((acc, item) => {
      let name = (item.path || "").includes(".")
        ? item.path.split(".")[0]
        : item.path || "";
      return acc[item.path || ""] ? acc : { ...acc, [name]: item.message };
    }, {});
  } else {
    throw errors;
  }
}

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
