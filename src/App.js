import "./App.css";
import Navbar from "./component/Navbar";
import TodoForm from "./component/main"; // Updated import
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
        console.log("response data",response.data.data)
        setTodoList(response.data.data);
      })
      .catch((error) => {
        console.log("failed to fetch the todos", error);
      });
  }, []);

  const addTodo = (todoItem) => {
    let newTodoList = [...todo];
    axios
      .post("http://localhost:3001/api/todos",{todoItem:todoItem})
      .then((response) => {
        setTodoList([...newTodoList, response.data.data]);
      })
      .catch((error) => {
        console.log("failed to post the todos", error);
      });
      
  };

  const removeTodo =( (_id) => {
    let newTodoList = [...todo];
    console.log({data:{ _id:_id }});
    // newTodoList.splice(_id, 1);
    // setTodoList(newTodoList);
    axios
      .delete("http://localhost:3001/api/todos",{data:{ _id:_id }})
      .then((response) => {
        setTodoList(newTodoList.filter((todo) => todo._id !== _id));      })
      .catch((error) => {
        console.log("failed to detele the todos", error);
      });
  });

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
