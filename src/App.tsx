
import { useState } from 'react';
import { TaskList } from './components/TaskList/TaskList';
import type { Task, TaskStatus } from './types';
import  { TaskFilter } from './components/TaskFilter/TaskFilter';
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

  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }>({});

  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [dueDate, setDueDate] = useState('');


  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const handleDelete = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleFilterChange = (newFilters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => {
    setFilters(newFilters);
  };
  const handleAddTask = () => {
    // Don't add if title or date is missing
    if (!title.trim() || !dueDate) return;

    const newTask: Task = {
      id : Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      status: "pending",
      priority,
      dueDate,
    }

    setTasks([newTask, ...tasks]);
    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
    setShowAddForm(false);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true;
  })

  return (
    <div className="min-vh-100">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3"  style={{ fontFamily: 'cursive' }}>
            Task Manager 🗓️
          </h1>
          <p className="lead text-muted"  style={{ fontFamily: 'cursive' }}>
            Lab 3 – Lists, Keys, and Conditional Rendering
          </p>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="filters-wrapper">
            <TaskFilter onFilterChange={handleFilterChange} />
          </div>
        </div>
          <div className="add-button-wrapper text-center mb-5">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn btn-success btn-lg px-5 py-3 shadow-lg"
            style={{ fontFamily: 'cursive' }}
          >
            {showAddForm ? 'Cancel' : 'Add New Task'}
          </button>
        </div>
         {showAddForm && (
          <div className="card border-success mb-4 shadow">
             <div className="card-header bg-success text-white">
              <div className="filters-wrapper mb-5">
  
              <h4 className="mb-0" style={{ fontFamily: 'cursive' }}>
                Create A New Task
              </h4>
            </div>
            <div className="card-body">
              <div className="row g-3">

               <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Task Title (required)"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ fontFamily: 'cursive' }}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    style={{ fontFamily: 'cursive' }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Description (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ fontFamily: 'cursive' }}
                  />
                </div>
                 <div className="col-md-4">
                  <select
                    className="form-select form-select-lg"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
                    style={{ fontFamily: 'cursive' }}
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                  </select>
                </div>
                <div className="col-md-8 text-end">
                  {/* CREATE BUTTON - Disabled if title or date is missing  */}
                  <button
                    onClick={handleAddTask}
                    className="btn btn-success btn-lg me-2"
                    disabled={!title || !dueDate}
                    style={{ fontFamily: 'cursive' }}
                  >
                    Create A New Task
                  </button>
                  
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="btn btn-outline-secondary btn-lg"
                    style={{ fontFamily: 'cursive' }}
                  >
                    Cancel
                  </button>
                </div>
                
              </div>
            </div>
          </div>
          </div>
        
        )}
   <div className="task-list-wrapper">
            
    <TaskList
          tasks={filteredTasks}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
        </div>
    </div>
      </div>
  );
}

export default App;