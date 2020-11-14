import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("el"))) {
      setTasks(JSON.parse(localStorage.getItem("el")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("el", JSON.stringify(tasks));
  }, [tasks]);

  //change state inputValue
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  //add new todo item
  const handleAddNewTodo = () => {
    const newItem = {
      id: Math.random() + 1,
      title: inputValue,
    };
    if (inputValue != "") {
      setTasks((tasks) => [...tasks, newItem]);
    } else {
      alert("First You must type a value!");
    }
    setInputValue("");
  };

  //deleting todo item
  const handleClickRemoveTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Header tasksQuantity={tasks.length} />
      <Form
        handleChangeInput={handleChangeInput}
        handleAddNewTodo={handleAddNewTodo}
        inputValue={inputValue}
      />
      {tasks.map(({ id, title, done }) => (
        <TodoItem
          key={id}
          title={title}
          done={done}
          id={id}
          handleClickRemoveTask={handleClickRemoveTask}
        />
      ))}

      {tasks.length > 0 ? null : (
        <h2 className="alert">You don't have any tasks</h2>
      )}
    </div>
  );
}

export default App;
