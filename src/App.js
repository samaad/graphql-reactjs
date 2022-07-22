import React, { useEffect, useState, useCallback } from "react";
import github from "./db";
import githubQuery from "./Query";
import RepoInfo from "./RepoInfo";

function App() {
  const [user, setUser] = useState({ viewer: {} });

  const fetchData = useCallback(() => {
    console.log("executed twice");

    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(githubQuery),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setUser(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill">Response</i>
      </h1>
      <p>Hey There {user.viewer.name}</p>
      {user.search?.nodes && <RepoInfo nodes={user.search.nodes} />}
    </div>
  );
}

export default App;
