import React, { useEffect, useState } from "react";

export default function useSearch(limit, page) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(false);
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos((prev) => [...prev, ...json]);
        setLoading(false);
      })
      .catch((error) => console.log("useSearch error: ", error));
  }, [page]);
  return { todos, loading };
}
