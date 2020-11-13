function TodoItem({ id, title, handleClickRemoveTask }) {
  return (
    <div className="todoItem">
      <h2>{title}</h2>
      <button onClick={() => handleClickRemoveTask(id)}>Remove</button>
    </div>
  );
}

export default TodoItem;
