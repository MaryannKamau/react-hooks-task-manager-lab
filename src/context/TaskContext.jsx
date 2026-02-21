import React, { createContext, useState,useEffect, useContext } from "react";



export const TaskContext = createContext();

export function TaskProvider({ children }) {
     const [tasks, setTasks] = useState([]);


     useEffect(() => {
    fetch("http://localhost:6001/tasks")
      .then((r) => r.json())
      .then(setTasks);
  }, []);


  const addTask = (newTask) => {
    fetch("http://localhost:6001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    })
    .then((r) => r.json())
      .then((savedTask) => setTasks([...tasks, savedTask]));
  };

   const toggleComplete = (id, currentStatus) => {
    fetch(`http://localhost:6001/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !currentStatus }),
    })
      .then((r) => r.json())
      .then((updatedTask) => {
        setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
      });
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
};


export const useTaskContext = () => useContext(TaskContext);

