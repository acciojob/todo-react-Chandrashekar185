import React from "react";

function Todo({ task, onDelete }) {
  return (
    <li className="todo-item">
      {task}
      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default Todo;
