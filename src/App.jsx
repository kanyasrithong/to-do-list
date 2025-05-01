import { createRoot } from "react-dom/client";
import Input from "./Input.jsx";

const App = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <Input />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
