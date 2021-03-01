import React, { useEffect, useState } from "react";

import { makeApiClient } from "./api";

let client = makeApiClient("https://api.github.com");

export default function Lesson16() {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetchJSON("/users/ybeliaev")
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((error) => setError(error)); // or catch(setError)
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 16</h3>
      <h4>Git API. Multiple requests</h4>
    </div>
  );
}

function Error({ error }) {
  // объект error приводить к строке - временное решение
  return (
    <h1>
      <span className="badge bg-danger">{String(error)}</span>
    </h1>
  );
}

function Loading() {
  return (
    <div class="d-flex justify-content-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
