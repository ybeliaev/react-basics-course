import React, { useEffect, useState } from "react";

export function makeApiClient(origin) {
  async function fetchJSON(url, options = {}) {
    if (!url.startsWith("http")) {
      url = origin + url;
    }

    options = R.mergeDeepRight(options, {
      headers: {
        Accept: "application/json", // "Accept" почему то кавычки снимаются
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options.body),
    });
    let resp = await fetch(url, options);

    if ((resp.headers.get("content-type") || "").includes("application/json")) {
      try {
        return resp.json();
      } catch (err) {
        throw new Error(`API: Invalid JSON`);
      }
    } else {
      throw new Error(`API: Invalid mime-type`);
    }
  }
  return {
    fetchJSON,
  };
}

export default function Lesson17() {
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
