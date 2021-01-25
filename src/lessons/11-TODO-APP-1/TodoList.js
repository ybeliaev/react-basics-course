import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

export const FILTER_ALL = 0;
export const FILTER_DONE = 1;
export const FILTER_ACTIVE = 2;

const todos = [
  { text: "To study React", done: false },
  { text: "To read Bible", done: true },
  { text: "To do fitness", done: false },
];

export default function TodoList() {
  let [filter, setFilter] = useState(FILTER_ALL);
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
      <Footer filter={filter} setFilter={setFilter} />
    </>
  );
}
