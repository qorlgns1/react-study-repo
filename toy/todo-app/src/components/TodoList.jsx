import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
}
