import Tasks from "./Tasks.jsx";
import { useState, useContext } from "react";
import { TasksContext } from "./contexts.jsx";

export default function Input() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useContext(TasksContext);

  return (
    <div className="input-container">
      <h2>Enter New Task Below</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="submit"
        onClick={() =>
          setTasks([
            ...tasks,
            {
              id: Date.now(),
              task: input,
            },
          ])
        }
      >
        Add
      </button>
      <Tasks tasksList={tasks} />
    </div>
  );
}
