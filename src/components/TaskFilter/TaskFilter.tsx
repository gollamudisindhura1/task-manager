// src/components/TaskFilter/TaskFilter.tsx

import React from 'react';
import type { TaskFilterProps, TaskStatus } from '../../types';

export const TaskFilter = ({ onFilterChange }: TaskFilterProps) => {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onFilterChange({
      status: value === 'all' ? undefined : (value as TaskStatus),
    });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onFilterChange({
      priority: value === 'all' ? undefined : (value as 'low' | 'medium' | 'high'),
    });
  };

  return (
    <div className="row g-3 mb-4">
      <div className="col-md-6">
        <label className="form-label fw-bold text-muted">Status</label>
        <select
          className="form-select form-select-lg"
          onChange={handleStatusChange}
          defaultValue="all"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="col-md-6">
        <label className="form-label fw-bold text-muted">Priority</label>
        <select
          className="form-select form-select-lg"
          onChange={handlePriorityChange}
          defaultValue="all"
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