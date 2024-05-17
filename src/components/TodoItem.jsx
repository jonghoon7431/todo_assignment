// import React from 'react'
function TodoItem({ todo, removeContent, toggle }) {
  return (
    <div className="todo_card">
      <h2>{todo.todoTitle}</h2>
      <h3>{todo.todoContent}</h3>
      <div className="todo_button">
        <button onClick={() => removeContent(todo.id)}>삭제</button>
        <button onClick={() => toggle(todo.id)}>{todo.isDone ? "완료 취소" : "완료"}</button>
      </div>
    </div>
  );
}

export default TodoItem;
