
import React from "react";

export default function Todo(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h3>{props.todo.todoItem}</h3>
      </div>
      <div className="col-4">
        <button
          className="col-2 btn btn-danger"
          onClick={() => {
            props.removeTodo(props.key);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
