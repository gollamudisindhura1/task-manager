import type { TaskListProps, Task } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";
import { TaskFilter} from "../TaskFilter/TaskFilter"
import { useState } from "react";


export const TaskList = ({
    tasks : initialTasks,
    onStatusChange,
    onDelete,}:TaskListProps)=>{
        const [tasks, setTasks] = useState<Task[]>(initialTasks);
        const [filters, setFilters] = useState<{
            status ? :"pending" | "in-progress" | "completed"
            priority ? : "low" |"medium"|"high"
        }>({});

        const [showAddForm, setShowAddForm] = useState(false);
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [priority, setPriority] = useState<"low"|"medium" | "high">("medium");
        const [dueDate, setDueDate] = useState("");

        const filteredTasks = tasks.filter((task)=>{
            if (filters.status && task.status ! == filters.status) 
                return false;
            if(filters.priority && task.priority !== filters.priority)
                return false;
            return true;
        });
        const handleAddTask = ()=>{
            if(!title.trim() || !dueDate)
                return;
            const newTask: Task = {
                id: Date.now().toString(),
                title: title.trim(),
                description: description.trim(),
                status: "pending",
                priority,
                dueDate,
            }
            setTasks([newTask, ...tasks]);
            setTitle("");
            setDescription("");
            setPriority("medium");
            setDueDate("");
            setShowAddForm(false);
        };
        return (
            <div>
                <TaskFilter onFilterChange = {setFilters} />
                <div className="text-center mb-4">
                    <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn btn-success btn-lg px-5 py-3 shadow"
        >
          {showAddForm ? 'Cancel' : '+ Add New Task'}
        </button>

                </div>
            {showAddForm && (
                <div className = "card border-sucess mb-4 shadow">
                    <div className="card-header bg-success text-white">
                        <h4 className="mb-0">Create A New Task</h4>
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-md-8">
                                <input 
                                type ="text"
                                className="form-control form-control-lg"
                                placeholder="Task Title (required)"
                                value = {title}
                                onChange={(e)=>setTitle(e.target.value)} />
                            </div>
                            <div className="col-md-4">
                                <input
                                type ="date"
                                className="form-control form-control-lg"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                              />
                            </div>
                            <div className="col-12">
                                <textarea
                                className="form-control"
                                rows={3}
                                placeholder="Description (optional)"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="col-md-4">
                <select
                  className="form-select form-select-lg"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
              </div>
              <div className="col-md-8 text-end">
                <button
                  onClick={handleAddTask}
                  className="btn btn-success btn-lg me-2"
                  disabled={!title || !dueDate}
                >
                  Create Task
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="btn btn-outline-secondary btn-lg"
                >
                  Cancel
                </button>

                       </div>
                        </div>
                    </div>
                </div>
            )}  
            {filteredTasks.length === 0 ? (
        <div className="text-center py-5">
          <h3 className="text-muted">No tasks found</h3>
          <p>Add one above or change filters!</p>
        </div>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};  


      