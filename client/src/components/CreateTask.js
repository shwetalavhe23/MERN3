import React, { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
// import axios from "axios";
// import { TaskContextProvider } from "../context/TaskContext";

const CreateTask = () => {
  const { createTask, getList } = useContext(TaskContext);
  const [description, setDescription] = useState("");

  const addTask = async () => {
    let payload = {
      id: Math.random() * 1000,
      description: description,
    };
    // axios.post("http://localhost:8080/createTask", payload).then((res) => {
    //   console.log(res.data);
    // });
    createTask(payload);
    // getList();
  };

  return (
    <div>
      CreateTask
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e?.target?.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default CreateTask;
