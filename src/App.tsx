// src/App.tsx

import React, { useState } from 'react';
import { TaskList } from './components/TaskList/TaskList';
import type { Task, TaskStatus } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
      status: 'in-progress' as TaskStatus,
      priority: 'high',
      dueDate: '12-09-2025',
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Description 2',
      status: 'pending' as TaskStatus,
      priority: 'medium',
      dueDate: '12-09-2025',
    },
    {
      id: '3',
      title: 'Task 3',
      description: 'Description 3',
      status: 'completed' as TaskStatus,
      priority: 'low',
      dueDate: '12-09-2025',
    },
    {
      id: '4',
      title: 'Task 4',
      description: 'Description 4',
      status: 'pending' as TaskStatus,
      priority: 'high',
      dueDate: '12-09-2025',
    },
  ]);

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const handleDelete = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="min-vh-100 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">
            Task Manager
          </h1>
          <p className="lead text-muted">
            Lab 3 – Lists, Keys, and Conditional Rendering
          </p>
        </div>

        <TaskList
          tasks={tasks}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;