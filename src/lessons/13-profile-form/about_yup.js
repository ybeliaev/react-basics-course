schema
  .validate({ userName: "yura", email: "aasd@asd.com" }, { abortEarly: false })
  .then((x) => console.log(x))
  .catch((e) => console.dir(e)); // сюда зайдёт если есть ошибка и соответственно появится объект e

const e = {
  errors: [
    "userName must be at least 3 characters",
    "email must be a valid email",
  ],
  inner: [
    {
      errors: ["userName must be at least 3 characters"],
      inner: [],
      message: "userName must be at least 3 characters",
      name: "ValidationError",
      params: {
        value: "a",
        originalValue: "a",
        label: undefined,
        path: "userName",
        min: 3,
      },
      path: "userName",
      type: "min",
      value: "a",
      stack: "ValidationError: userName must be at least 3 characters",
    },
    {
      errors: ["email must be a valid email"],
      inner: [],
      message: "email must be a valid email",
      name: "ValidationError",
      params: {
        value: "a sdasdas@asd.com",
        originalValue: "a sdasdas@asd.com",
        label: undefined,
        path: "email",
        regex: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A…]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
      },
      path: "email",
      type: "email",
      value: "a sdasdas@asd.com",
      stack: "ValidationError: email must be a valid email",
    },
    { message: "2 errors occurred" },
    { name: "ValidationError" },
    { path: undefined },
    { type: undefined },
    {
      value: {
        email: "a sdasdas@asd.com",
        userName: "a",
      },
    },
  ],
};
