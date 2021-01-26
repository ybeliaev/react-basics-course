import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

export const FILTER_ALL = 0;
export const FILTER_DONE = 1;
export const FILTER_ACTIVE = 2;

export default function TodoList({ todos, removeTodo, toggleTodo }) {
  let [filter, setFilter] = useState(FILTER_ALL);

  let filtredTodos = todos.filter((todo) => {
    switch (filter) {
      case FILTER_DONE:
        return todo.done;
      case FILTER_ACTIVE:
        return !todo.done;
      default:
        return true;
    }
  });
  return (
    <>
      {filtredTodos.map((todo) => (
        <TodoItem
          key={todo.text}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
      <Footer filter={filter} setFilter={setFilter} />
    </>
  );
}
