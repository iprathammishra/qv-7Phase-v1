import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log('Fetch error:', err));
  }, []);

  const addTask = (task) => {
    fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    })
      .then(res => res.json())
      .then(data => setTasks(prev => [...prev, data]))
      .catch(err => console.log('Add task error:', err));
  };

  const deleteTask = (id) => {
    fetch(`/api/tasks/${id}`, { method: 'DELETE' })
      .then(() => setTasks(prev => prev.filter(t => t._id !== id)))
      .catch(err => console.log('Delete task error:', err));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
