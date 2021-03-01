import React, { useEffect, useState } from "react";

import { makeApiClient } from "./api";

let apiClient = makeApiClient("https://api.github.com");

export default function Lesson15() {
  let [user, setUser] = useState(null);
  let [repos, setRepos] = useState(null);
  let [error, setError] = useState(null);
  let [loading1, setLoading1] = useState(true);
  let [loading2, setLoading2] = useState(true);

  // Effect-1
  useEffect((_) => {
    apiClient.fetchJSON("/users/ybeliaev").then((user) => {
      setUser(user);
      setLoading1(false);
    });
  }, []);
  // Effect-2
  useEffect((_) => {
    apiClient
      .fetchJSON("/users/ybeliaev/repos?sort=created&per_page=5")
      .then((repos) => {
        setRepos(repos);
        setLoading2(false);
      });
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  if (loading1 || loading2) {
    return <Loading />;
  }

  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 16.</h3>
      <h4>Git API. Multiple requests.</h4>
      <h5>My name is {user.name}</h5>
      <img
        className="border border-primary"
        width="150px"
        src={user.avatar_url}
      />
      <span className="ms-2 badge bg-primary">{user.login}</span>
      <h4 className="h4">Repositories</h4>
      {repos.map((repo) => {
        return (
          <ul className="list-group" key={repo.id}>
            <li className="list-group-item">
              <h4 className="h5">
                <a href={repo.html_url}>{repo.name}</a> ★{" "}
                {repo.stargazers_count}
              </h4>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

function Error({ error }) {
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
