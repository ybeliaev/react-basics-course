import React, { useEffect, useState } from "react";

import { makeApiClient } from "./api";

import { MyComponent1 } from "./components";
import { MyComponent2 } from "./components";

// fetch("https://api.github.com/users/ybeliaev").then((resp) =>
//   resp.json().then((data) => {
//     console.log(data);
//     console.log(resp);
//   })
// );
let client = makeApiClient("https://api.github.com");

export default function Lesson15() {
  let [user, setUser] = useState(null);

  useEffect(() => {
    client.fetchJSON("/users/ybeliaev").then((user) => setUser(user));
  }, []);

  if (!user) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

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
      <h4>My name is {user.name}</h4>
      <img
        className="border border-primary"
        width="150px"
        src={user.avatar_url}
      />
      <span className="ms-2 badge bg-primary">{user.login}</span>
    </div>
  );
}
