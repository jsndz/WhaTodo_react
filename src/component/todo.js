
import React from "react";

export default function Todo(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h3>{props.todo.content}</h3>
      </div>
      <div className="col-4">
        <button
          className="col-2 btn btn-danger"
          onClick={() => {
            props.removeTodo(props.todo._id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
