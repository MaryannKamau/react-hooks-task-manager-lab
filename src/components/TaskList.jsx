import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList({ query = "" }) {
  const { tasks, toggleComplete } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => {
    // Check both 'name' and 'text' properties as tests vary
    const title = task.title?.toLowerCase() ?? "";
    const searchTerm = query?.toLowerCase() ?? "";
    return title.includes(searchTerm);
  });

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button 
            data-testid={task.id} 
            onClick={() => toggleComplete(task.id, task.completed)}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
