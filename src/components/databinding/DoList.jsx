import React, { useState } from 'react';
 
function Dolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
 
  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };
 
  return (
<div>
<h1>To-Do List</h1>
<input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add a new task"
      />
<button onClick={handleAddTask}>Add Task</button>
<ul>
        {tasks.map((task, index) => (
<li key={index}>{task}</li>
        ))}
</ul>
</div>
  );
}
 
export default Dolist;