import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todo, setTodo }) {
  const removeContent = (id) => {
    setTodo(todo.filter((e) => e.id !== id));
  };

  const toggle = (id) => {
    setTodo(todo.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
  };

  return (
    <>
      <h2 className="sub_title">on going..⏱</h2>
      <div className="ongoing_container">
        {todo
          .filter((e) => !e.isDone)
          .map((todo) => (
            <TodoItem todo={todo} key={todo.id} removeContent={removeContent} toggle={toggle} />
          ))}
      </div>

      <h2 className="sub_title">Done !🎉</h2>
      <div className="done_container">
        {todo
          .filter((e) => e.isDone)
          .map((todo) => (
            <TodoItem todo={todo} key={todo.id} removeContent={removeContent} toggle={toggle} />
          ))}
      </div>
    </>
  );
}

export default TodoList;
