import TaskList from "./components/TaskList";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <TaskList />
      </TaskContextProvider>
      {/* <CreateTask /> */}
    </div>
  );
}

export default App;
