// src/components/TaskFilter/TaskFilter.tsx

import React, { useState } from 'react';
import type { TaskFilterProps, TaskStatus } from '../../types';

export const TaskFilter = ({ onFilterChange }: TaskFilterProps) => {
    const [status, setStatus] = useState<TaskStatus | ''>('');
const [priority, setPriority] = useState<'low' | 'medium' | 'high' | ''>('');
//   const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = e.target.value;
//     onFilterChange({
//       status: value === 'all' ? undefined : (value as TaskStatus),
//     });
//   };
const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const value = e.target.value;
  const newStatus = value === 'all' ? '' : (value as TaskStatus);
  setStatus(newStatus);
  
  onFilterChange({
    status: newStatus ? newStatus : undefined,
    priority: priority ? priority : undefined
  });
};


const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const value = e.target.value;
  const newPriority = value === 'all' ? '' : (value as 'low' | 'medium' | 'high');
  setPriority(newPriority);
  
  onFilterChange({
    status: status ? status : undefined,
    priority: newPriority ? newPriority : undefined
  });
};

  return (
    <div className="row g-3 mb-4">
      <div className="col-md-6">
        <label className="form-label fw-bold text-muted"style={{ fontFamily: 'cursive' }}>Status</label>
        <select
          className="form-select form-select-lg"
          onChange={handleStatusChange}
          value = {status || "all"}
          style={{ fontFamily: 'cursive' }}
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="col-md-6">
        <label className="form-label fw-bold text-muted" style={{ fontFamily: 'cursive' }}>Priority</label>
        <select
          className="form-select form-select-lg"
          onChange={handlePriorityChange}
          value = {priority || "all"}
          style={{ fontFamily: 'cursive' }}
        >
          <option value="all">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
  );
};