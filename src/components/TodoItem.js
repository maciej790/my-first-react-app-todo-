
function TodoItem({ id, title, handleClickTodo }) {
  return (
    <div className="todoItem">
      <h2>{title}</h2>
      <button onClick={() => handleClickTodo(id)}>Remove</button>
    </div>
  );
}

export default TodoItem;
