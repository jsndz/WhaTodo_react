import React from "react";
import Todo from "./todo";

export default function TodoList(props, i) {
  return (
    <div>
      {props.todoList.length > 0 ? (
        <ul>
          {props.todoList.map((todo, i) => (
            <li key={i}>
              <Todo todo={todo} removeTodo={props.removeTodo} />
            </li>
          ))}
        </ul>
      ) : (
        <h1>Add your Todo List</h1>
      )}
    </div>
  );
}

// export default function TodoList(props) {
//   return (
//     <div>
// {props.todoList.length > 0 ? (
//   <ul>
//     {props.todoList.map((todo, i) => (
//       <li key={i}>
//         <Todo todo={todo} removeTodo={props.removeTodo} />
//       </li>
//     ))}
//   </ul>
//       ) : (
//         <h1>Add your Todo List</h1>
//       )}
//     </div>
//   );
// }
