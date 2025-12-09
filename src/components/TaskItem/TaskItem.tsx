import type { TaskItemProps, TaskStatus } from "../../types";

export const TaskItem = ({
  task,
  onStatusChange,
  onDelete,
}:TaskItemProps) =>{

  //Pending / in-progress /completed /pending 
  const getStatus =(current : TaskStatus): TaskStatus =>{
    if (current === "pending") return "in-progress";
    if (current === "in-progress") return "completed";
    return "pending";
  }
  const statusBadgeClass ={
    pending :'bg-warning text-dark',
    'in-progress': 'bg-primary',
    completed: 'bg-success'
  }[task.status];
  
const priorityBadgeClass = {
    low: 'bg-success',
    medium: 'bg-warning text-dark',
    high: 'bg-danger'
  }[task.priority];
  const priorityBorderClass = {
    low: 'border-success',
    medium: 'border-warning',
    high: 'border-danger'
  }[task.priority];
  return(
    <div className={`card shadow-sm mb-3 border-start border-5 ${priorityBorderClass}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-1">{task.title}</h5>
          <span className={`badge ${priorityBadgeClass} fs-6`}> {task.priority.toUpperCase()}</span>
</div>
      </div>
      <p className="card-text text-muted mb-3">{task.description}</p>
      <div className="d-flex justify-content-between align-items-center mb-3">
          <small className="text-muted">
            Due: {task.dueDate}
          </small>

          <span className={`badge ${statusBadgeClass} px-3 py-2`}>
            {task.status.replace('-', ' ').toUpperCase()}
          </span>
        </div>

        <div className="d-flex gap-2">
          <button
            onClick={() => onStatusChange(task.id, getStatus(task.status))}
            className={`btn btn-sm ${
              task.status === 'pending'
                ? 'btn-outline-warning'
                : task.status === 'in-progress'
                ? 'btn-outline-primary'
                : 'btn-outline-success'
            }`}
          >
            {task.status === 'pending' && 'Start'}
            {task.status === 'in-progress' && 'Mark Complete'}
            {task.status === 'completed' && 'Restart'}
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="btn btn-sm btn-outline-danger"
          >
            Delete
          </button>
        </div>
      </div>
  )

}

  
