import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const initialTodos = [
  { text: "To study React", done: false },
  { text: "To read Bible", done: true },
  { text: "To do fitness", done: false },
];

export default function Lesson11() {
  let [todos, setTodos] = useState(initialTodos);

  function createTodo({ text }) {
    let todo = { text, done: false };
    return setTodos([...todos, todo]);
  }

  return (
    <div className="wrapper_lesson">
      <h3>Урок 11</h3>
      <h4>TODO-APP-1</h4>
      <p className="fs-5 text-center">Ivan's variant</p>
      <TodoForm createTodo={createTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
