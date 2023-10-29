import "./App.css";
import Navbar from "./component/Navbar";
import TodoForm from "./component/main";
import React, { useState } from "react";
import TodoList from "./component/TodoList";
import Footer from "./component/Footer";
function App() {
  let [todo, setTodoList] = useState([
    {
      todoItem: "Wake Up",
    },
  ]);

  const addTodo = (todoItem) => {
    let newTodoList = [...todo];
    newTodoList.push({
      todoItem: todoItem,
    });
    setTodoList(newTodoList);
  };

  const removeTodo = (index) => {
    let newTodoList = [...todo];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <>
      <Navbar />
      <TodoForm addTodo={addTodo} />
      <TodoList todoList={todo} removeTodo={removeTodo} />

      <Footer />
    </>
  );
}
export default App;
