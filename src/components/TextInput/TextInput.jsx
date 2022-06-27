import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/taskContex";

function TextInput() {
  const [text, setText] = useState("");
  const { setUnCompletedTasks } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    setUnCompletedTasks((prevState) => [...prevState, { text: text }]);
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="container container-px form"
    >
      <input
        className="form-input box box-border"
        placeholder="Type your task"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default TextInput;
