import React, { useEffect, useState } from "react";

let apiClient = makeApiClient("https://api.github.com");

apiClient("/users/ybeliaev").then((res) => console.log("res from git: ", res));

function Lesson17() {
  let [user, setUser] = useState(null);
  let [repos, setRepos] = useState(null);
  let [loading1, setLoading1] = useState(true);
  let [loading2, setLoading2] = useState(true);

  useEffect((_) => {
    apiClient("/users/ybeliaev").then((user) => {
      //   console.log("user from useEffect: ", user);
      setUser(user);
      setLoading1(false);
    });
  }, []);
  useEffect((_) => {
    apiClient("/users/ybeliaev/repos?sort=created&per_page=7").then((repos) => {
      // console.log("user from useEffect: ", repos);
      setRepos(repos);
      setLoading2(false);
    });
  }, []);
  if (loading1 || loading2) {
    return <Loading />;
  }

  return (
    <div className="wrapper_lesson fs-4">
      <h3>Урок 17.</h3>
      <h4>Git API. Multiple requests.</h4>
      <span className="badge bg-warning text-dark">
        Особенность: при более одного запроса нужно ждать все, и после
        отображать контент. Поэтому заведено два состояния лоадинга
      </span>
      <h5>My name is {user.name}</h5>
      <img
        className="border border-primary rounded-3"
        width="150px"
        src={user.avatar_url}
      />
      <span className="ms-2 badge bg-primary">{user.login}</span>
      <h4 className="h4">Repositories</h4>
      {repos.map((repo) => {
        return (
          <ul className="list-group" key={repo.id}>
            <li className="list-group-item mb-2 bg-light ">
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

function makeApiClient(origin) {
  async function fetchJSON(url) {
    url = origin + url;

    let resp = await fetch(url);
    try {
      return resp.json();
    } catch (err) {
      throw new Error(`API: Invalid JSON`);
    }
  }
  return fetchJSON;
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

export default Lesson17;
