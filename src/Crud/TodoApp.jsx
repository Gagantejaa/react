import React, { useState } from "react";
import "./TodoApp.css"; // ✅ Import CSS for styling

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // Delete Task
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
