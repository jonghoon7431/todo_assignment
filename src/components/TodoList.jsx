import React from "react";

function TodoList({ todo, setTodo }) {
  const removeContent = (id) => {
    setTodo(todo.filter((e) => e.id !== id));
  };

  const finishOrNot = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  return (
    <>
      <h2 className="sub_title">on going..⏱</h2>
      <div className="card_container">
        {todo
          .filter((e) => !e.isDone)
          .map(({ id, todoTitle, todoContent, isDone }) => (
            <div key={id} className="on_going_card">
              <h2>{todoTitle}</h2>
              <h3>{todoContent}</h3>
              <div className="on_going_button">
                <button onClick={() => removeContent(id)}>삭제</button>
                <button onClick={() => finishOrNot(id)}>
                  {isDone ? "완료 취소" : "완료"}
                </button>
              </div>
            </div>
          ))}
      </div>
      <h2 className="sub_title">Done !🎉</h2>
      <div className="card_container">
        {todo
          .filter((e) => e.isDone)
          .map(({ id, todoTitle, todoContent, isDone }) => (
            <div key={id} className="on_going_card">
              <h2>{todoTitle}</h2>
              <h3>{todoContent}</h3>
              <div className="on_going_button">
                <button onClick={() => removeContent(id)}>삭제</button>
                <button onClick={() => finishOrNot(id)}>
                  {isDone ? "완료 취소" : "완료"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default TodoList;
