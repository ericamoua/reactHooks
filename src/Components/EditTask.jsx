// src/components/EditTask.js
import React, { useState, useEffect } from 'react';
import '../App.css';

function EditTask({ task, saveTask }) {
  const [taskValue, setTaskValue] = useState('');

  useEffect(() => {
    if (task) {
      setTaskValue(task.discription);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTask(taskValue);
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
        placeholder="Edit task"
      />
      <button type="submit" className='"edit-button'>Save Task</button>
    </form>
  );
}

export default EditTask;
