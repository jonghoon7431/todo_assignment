import React, { useState } from "react";

function Form({ todo, setTodo }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const addContent = (e) => {
    e.preventDefault();
    if (!todoTitle || !todoContent) {
      alert("제목과 내용 모두 입력해주세요");
      return;
    }
    setTodo([...todo, { id: Date.now(), todoTitle, todoContent, isDone: false }]);
    setTodoTitle("");
    setTodoContent("");
  };

  return (
    <div className="input_area">
      <form onSubmit={addContent}>
        <div className="submit_input">
          <div className="title">
            <label>제목: </label>
            <input
              type="text"
              placeholder="제목"
              value={todoTitle}
              onChange={(event) => setTodoTitle(event.target.value)}
            />
          </div>
          <div className="content">
            <label>내용: </label>
            <input
              type="text"
              placeholder="내용"
              value={todoContent}
              onChange={(event) => setTodoContent(event.target.value)}
            />
          </div>
        </div>

        <button type="submit">추가</button>
      </form>
    </div>
  );
}

export default Form;
