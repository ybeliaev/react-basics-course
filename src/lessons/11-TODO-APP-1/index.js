import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Lesson11() {
  return (
    <div className="wrapper_lesson">
      <h3>Урок 11</h3>
      <h4>TODO-APP-1</h4>
      <p className="fs-5 text-center">Ivan's variant</p>
      <TodoForm />
      <TodoList />
    </div>
  );
}
