import React, { useContext, useEffect } from "react";
import CreateTask from "./CreateTask";
import TaskContext from "../context/TaskContext";
// import { TaskContextProvider } from "../context/TaskContext";\

const TaskList = () => {
  const { listOfTasks, getList } = useContext(TaskContext);

  useEffect(() => {
    getList();
  }, []);

  //   const getList = () => {
  //     axios.get("http://localhost:8080/TodoApp/getTasks").then((res) => {
  //       setListOfTasks(res.data);
  //     });
  //   };

  return (
    <div>
      TaskList
      {listOfTasks.map((ele, i) => (
        <div key={ele?.id}>{ele?.description}</div>
      ))}
      <CreateTask />
    </div>
  );
};

export default TaskList;
