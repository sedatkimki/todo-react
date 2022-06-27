import { createContext, useState } from "react";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [unCompletedTasks, setUnCompletedTasks] = useState([
    {
      text: "example task 1",
    },
    {
      text: "example task 2",
    },
    {
      text: "example task 3",
    },
  ]);

  const [completedTasks, setCompletedTasks] = useState([
    {
      text: "example task 4",
    },
    {
      text: "example task 5",
    },
    {
      text: "example task 6",
    },
  ]);
  const value = {
    unCompletedTasks,
    setUnCompletedTasks,
    completedTasks,
    setCompletedTasks,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export { TaskProvider, TaskContext };
