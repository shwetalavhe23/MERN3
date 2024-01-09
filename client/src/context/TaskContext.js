import axios from "axios";
import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [listOfTasks, setListOfTasks] = useState([]);

  let value = {
    listOfTasks: listOfTasks,
    getList: () => {
      axios.get("http://localhost:8080/TodoApp/getTasks").then((res) => {
        setListOfTasks(res.data);
      });
    },
    createTask: (payload) => {
      axios.post("http://localhost:8080/createTask", payload).then((res) => {
        console.log(res.data);
      });
    },
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export { TaskContextProvider };
export default TaskContext;
