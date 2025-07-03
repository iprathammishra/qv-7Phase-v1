import React from 'react';

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          <strong>{task.title}</strong>: {task.description}
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}