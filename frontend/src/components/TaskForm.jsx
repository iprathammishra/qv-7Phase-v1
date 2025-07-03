import React, { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title) return;
    onAdd(task);
    setTask({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={task.title} onChange={e => setTask({ ...task, title: e.target.value })} placeholder='Title' />
      <input value={task.description} onChange={e => setTask({ ...task, description: e.target.value })} placeholder='Description' />
      <button type='submit'>Add Task</button>
    </form>
  )
}