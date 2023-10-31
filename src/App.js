import "./App.css";
import Navbar from "./component/Navbar";
import TodoForm from "./component/main";
import React, { useEffect, useState } from "react";
import TodoList from "./component/TodoList";
import Footer from "./component/Footer";
import axios from "axios";

function App() {
  const [todo, setTodoList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/todos")
      .then((response) => {
        console.log("response data", response.data.data);
        setTodoList(response.data.data);
      })
      .catch((error) => {
        console.log("failed to fetch the todos", error);
      });
  }, []);

  const addTodo = (todoItem) => {
    let newTodoList = [...todo];
    axios
      .post("http://localhost:3001/api/todos", { todoItem: todoItem })
      .then((response) => {
        setTodoList([...newTodoList, response.data.data]);
      })
      .catch((error) => {
        console.log("failed to post the todos", error);
      });
  };

  const removeTodo = (_id) => {
    let newTodoList = [...todo];
    console.log({ data: { _id: _id } });
    axios
      .delete("http://localhost:3001/api/todos", { data: { _id: _id } })
      .then((response) => {
        setTodoList(newTodoList.filter((todo) => todo._id !== _id));
      })
      .catch((error) => {
        console.log("failed to detele the todos", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center ">
        <TodoForm addTodo={addTodo} />
      </div>
      <TodoList todoList={todo} removeTodo={removeTodo} />
      <Footer />
    </>
  );
}

export default App;
