import { Dispatch } from "react";
import { Task, TaskAction } from "./TasksProvider";
import React from "react";

// this is the object that we are gonna transport using React Context
interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
); // this is the default value of the context

export default TasksContext;
