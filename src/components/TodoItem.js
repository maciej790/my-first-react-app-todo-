import { useState } from "react";

function TodoItem({ id, title, done, handleClickTodo }) {
  const [status, setStatus] = useState(false);

  //marked item
  const mark = (done) => {
    setStatus(!status);
  };

  return (
    <div
      className="todoItem"
      onClick={() => mark(done)}
      className={status ? "xyz" : "todoItem"}
    >
      <h2>{title}</h2>
      <button onClick={() => handleClickTodo(id)}>Remove</button>
    </div>
  );
}

export default TodoItem;
