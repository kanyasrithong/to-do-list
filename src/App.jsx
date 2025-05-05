import { createRoot } from "react-dom/client";
import Input from "./Input.jsx";
import { TasksContext } from "./contexts.jsx";
import { useState } from "react";

const App = () => {
  const tasksHook = useState([]);
  return (
    <TasksContext value={tasksHook}>
      <div>
        <h1>To-Do List</h1>
        <Input />
      </div>
    </TasksContext>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
