import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [display, setDisplay] = useState(false);

  const todoLenght = tasks.length;

  //logic display component when tasks are typed, else not display
  useEffect(() => {
    if (tasks.length > 0) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [tasks]);

  //create and add new item
  const handleClickAdd = (e, inputValue, setInputValue) => {
    e.preventDefault();

    const newItem = {
      id: Math.random() + 1,
      title: inputValue,
      done: false,
    };

    const newList = [...tasks, newItem];

    //validate form in parent component (here)
    if (inputValue !== "") {
      setTasks(newList);
    } else {
      alert("First You must type value!");
    }

    setInputValue("");
  };

  //deleting clicked item
  const handleClickRemove = (id) => {
    const index = tasks.findIndex((el) => el.id === id);

    const arrayNew = tasks.slice(0, index).concat(tasks.slice(index + 1));

    setTasks(arrayNew);
  };

  return (
    <div className="App">
      <Header length={todoLenght} />
      <Form handleClick={handleClickAdd} />
      {display ? (
        tasks.map(({ id, title, done }) => (
          <TodoItem
            key={id}
            title={title}
            done={done}
            id={id}
            handleClickTodo={handleClickRemove}
          />
        ))
      ) : (
        <h2 className="alert">You don't have any tasks</h2>
      )}
    </div>
  );
}

export default App;
