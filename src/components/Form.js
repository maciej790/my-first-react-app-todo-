//controlled input and send event and value to parent

function Form({ inputValue, handleChangeInput, handleAddNewTodo }) {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Type Your task here"
        value={inputValue}
        onChange={handleChangeInput}
      />
      <button className="btn" onClick={handleAddNewTodo}>
        Add todo
      </button>
    </div>
  );
}

export default Form;
