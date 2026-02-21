import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList({ query = "" }) {
  const { tasks, toggleComplete } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
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
