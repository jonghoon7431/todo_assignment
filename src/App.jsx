import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const initialState = [
    { id: 0, todoTitle: "", todoContent: "", isDone: false },
  ];

  const [todo, setTodo] = useState([]);

  // const onChangeInput = (event) => {
  //   setTodoTitle(event.target.value);
  //   setTodoContent(event.target.value);
  // };

  return (
    <>
      <Header />
      <Form todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
