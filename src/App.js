// import "./App.css";
// import Navbar from "./component/Navbar";
// import TodoForm from "./component/main";
// import React, { useEffect, useState } from "react";
// import TodoList from "./component/TodoList";
// import Footer from "./component/Footer";
// import axios from "axios";
// function App() {
//   const [todo, setTodoList] = useState([]);
//   // let [todo, setTodoList] = useState([]);


//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/api/todos")
//       .then((response) => {
//         setTodoList(response.data);
//       })
//       .catch((error) => {
//         console.log("failed to fetch the todos", error);
//       });
//   });
//   const addTodo = (todoItem) => {
//     let newTodoList = [...todo];
//     newTodoList.push({
//       todoItem: todoItem,
//     });
//     setTodoList(newTodoList);
//     // axios
//     //   .post("http://localhost:3001/api/todos",{content:todoItem})
//     //   .then((response) => {
//     //     setTodoList([...todo, response.data]);
//     //   })
//     //   .catch((error) => {
//     //     console.log("failed to post the todos", error);
//     //   });
//   };

//   const removeTodo = (index) => {
//     let newTodoList = [...todo];
//     newTodoList.splice(index, 1);
//     setTodoList(newTodoList);
//   };

//   return (
//     <>
//       <Navbar />
//       <TodoForm addTodo={addTodo} />
//       <TodoList todoList={todo} removeTodo={removeTodo} />

//       <Footer />
//     </>
//   );
// }
// export default App;


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
        setTodoList(response.data);
      })
      .catch((error) => {
        console.log("failed to fetch the todos", error);
      });
  }, []); // Add an empty dependency array here

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
