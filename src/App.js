import Header from "./components/Header/Header";
import List from "./components/List/List";
import TextInput from "./components/TextInput/TextInput";
import { useContext } from "react";
import { TaskContext } from "./contexts/taskContex";

import "./styles/styles.scss";
function App() {
  const { unCompletedTasks, completedTasks, setCompletedTasks } =
    useContext(TaskContext);
  const handleDelete = () => {
    setCompletedTasks([]);
  };
  return (
    <div className="App ">
      <Header />
      <TextInput />
      <p className="container container-pall label">Uncompleted Tasks</p>
      <List tasks={unCompletedTasks} className="list-uncompleted" />
      <div className="flex flex-jc-sb flex-ai-c container container-pall ">
        <p className="label">Completed Tasks</p>
        <button onClick={handleDelete} className="btn btn-warning">
          Delete All
        </button>
      </div>
      <List tasks={completedTasks} className="list-completed" />
    </div>
  );
}

export default App;
