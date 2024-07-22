// src/pages/TaskDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom'
import TaskDetail from '../Components/TaskDetail';

function TaskDetailPage() {
  const { id } = useParams();
  // Ideally, you would fetch the task details from a server or global state here
  // For simplicity, we're just displaying the task id
  return (
    <div>
      <TaskDetail id={id} />
    </div>
  );
}

export default TaskDetailPage;
