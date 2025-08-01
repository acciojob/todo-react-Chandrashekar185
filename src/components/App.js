import React, { useState } from "react";
import Todo from "./Todo";
import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;
    setList([...list, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  return (
    <div className="app">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add Todo</button>
      <Todo list={list} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
