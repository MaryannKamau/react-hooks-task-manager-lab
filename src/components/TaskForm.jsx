import React, { useState, useId } from "react";

import { useTaskContext } from "../context/TaskContext"; 

function TaskForm() {
  const [taskName, setTaskName] = useState(""); 
  
 
 
  const inputId = useId(); 

 
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const newTask = {
      title: taskName,
      completed: false
    };

    
    addTask(newTask); 
    
    setTaskName("");
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={inputId}>Task Name:</label>
        <input
          id={inputId}
          type="text"
          placeholder="Add a new task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;

