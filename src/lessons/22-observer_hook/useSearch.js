import React, { useEffect, useState } from "react";

export default function useSearch(limit, pageNumber) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${pageNumber}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        setLoading(false);
      });
  }, []);
  return { todos, loading };
}
