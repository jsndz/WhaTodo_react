import logo from "./logo.svg";
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

  return (
    <>
      <Navbar />
      <TodoForm addTodo={addTodo} />
      <TodoList todoList={todo} />
      
      <Footer/>
    </>
  );
}
export default App;
