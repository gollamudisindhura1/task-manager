// This component is responsible for displaying a list of tasks

import type { TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = ({
    tasks,
    onStatusChange,
    onDelete,}:TaskListProps)=>{
        return (
            <div className = "text-center mb-5">
                <h2 className=" text-center mb-4" style={{ fontFamily: 'cursive', fontSize: '2rem' }}>
        My Tasks
      </h2>
       {tasks.length === 0 ? (
        <div className = "text-center py-5">
            <h3 className="text-muted" style={{ fontFamily: 'cursive' }}>
            No tasks found
          </h3>
          <p style={{ fontFamily: 'cursive' }}>
            Add one above or change filters!
          </p>
        </div>
      ) : (
        <div className="row justify-content-center g-4">
          {tasks.map((task) => (

             <div key={task.id} className="col-12 col-md-8 col-lg-6">
              <TaskItem
                task={task}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
 
      