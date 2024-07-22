// src/pages/TaskDetailPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EditTask from '../Components/EditTask';
import '../App.css';

function TaskDetail() {
  const { id } = useParams();
  const taskId = parseInt(id, 10);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    return <div>Task not found</div>;
  }

  const editTask = (newDescription) => {
    const updatedTasks = tasks.map(t =>
      t.id === taskId ? { ...t, discription: newDescription } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className='"container'>
      <h1>Task Detail for Task {task.id}</h1>
      <p>Name: {task.task}</p>
      <p>Discription: {task.discription}</p>
      <EditTask task={task} saveTask={editTask} />
    </div>
  );
}

export default TaskDetail;
