import React from "react";
import Todo from "./todo";


export default function TodoList(props, i) {
  return props.todoList.length > 0 ? (
    props.todoList.map((todo, i) => {
      return (
        <Todo
          todo={todo}
          key={i}
          
        />
      );
    })
  ) : (
    <h1>Add your Todo List</h1>
  );
}
