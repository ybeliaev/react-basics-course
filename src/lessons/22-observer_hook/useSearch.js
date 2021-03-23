import React, { useEffect, useState } from "react";

export default function useSearch(limit, pageNumber) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${pageNumber}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        setLoading(false);
      })
      .catch((error) => console.log("useSerch error: ", error));
  }, []);
  return { todos, loading };
}
