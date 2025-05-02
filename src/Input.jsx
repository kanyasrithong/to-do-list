import Tasks from "./Tasks.jsx";
import { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="input-container">
      <h2>Enter New Task Below</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="submit" onClick={() => setTasks([...tasks, input])}>
        Add
      </button>
      <Tasks tasks={tasks} />
    </div>
  );
}
