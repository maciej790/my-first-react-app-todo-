import { useState } from "react";

//controlled input and send event and value to parent

function Form({ handleClick }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="Type Your task here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="submit"
          value="Add task"
          onClick={(e) => handleClick(e, inputValue, setInputValue)}
        />
      </form>
    </div>
  );
}

export default Form;
