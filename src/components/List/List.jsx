import { useContext } from "react";
import { TaskContext } from "../../contexts/taskContex";
import tickSVG from "../../icons/tick-icon.svg";

function List({ className, tasks }) {
  const { setCompletedTasks, setUnCompletedTasks } = useContext(TaskContext);
  const handleClick = (text) => {
    setUnCompletedTasks((prevState) =>
      prevState.filter((task) => task.text !== text)
    );
    setCompletedTasks((prevState) => [...prevState, { text: text }]);
  };

  return (
    <div className={"container container-px list"}>
      {tasks &&
        tasks.map((item, index) => {
          return (
            <div
              className={"list-item box box-border " + className}
              key={index}
            >
              {item.text}
              <button
                onClick={() => handleClick(item.text)}
                className="btn btn-active btn-circle "
              >
                <img src={tickSVG} alt="" />
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default List;
