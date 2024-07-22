import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import TaskDetailPage from './Pages/TaskDetailPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task/:id"  element={<TaskDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
