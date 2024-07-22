// src/components/AddTask.js
import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [task, setTask] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ task });
      setTask('');
    }
  };

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
    </div>
  );
}

export default AddTask;
