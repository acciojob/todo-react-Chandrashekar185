import React, { useState } from "react";
import Todo from "./Todo";
import "./style.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (input.trim() === "") return;
    setList([...list, input]);
    setInput("");
  };

  const handleDelete = (indexToRemove) => {
    const updatedList = list.filter((_, index) => index !== indexToRemove);
    setList(updatedList);
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>

      <ul>
        {list.map((task, index) => (
          <Todo
            key={index}
            task={task}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
