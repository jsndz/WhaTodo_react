import React from "react";
import Todo from "./todo";

export default function TodoList(props, i) {
  return (
    <div className="justify-content-center">
      {props.todoList.length > 0 ? (
        <ul>
          {props.todoList.map((todo, i) => (
            <li key={i}>
              <Todo todo={todo} removeTodo={props.removeTodo} _id={props._id} />
            </li>
          ))}
        </ul>
      ) : (
        <h1>Add your Todo List</h1>
      )}
    </div>
  );
}
