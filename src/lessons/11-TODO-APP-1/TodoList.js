import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

const FILTER_ALL = 0;
const FILTER_DONE = 1;
const FILTER_ACTIVE = 2;

const todos = [
  { text: "To study React.", done: "true" },
  { text: "To read Bible.", done: "false" },
  { text: "To do fitness.", done: "false" },
];

export default function TodoList() {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
      <Footer />
    </>
  );
}
