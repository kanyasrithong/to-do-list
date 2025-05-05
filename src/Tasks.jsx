import { useContext } from "react";
import { TasksContext } from "./contexts.jsx";

export default function Tasks(props) {
  const { tasksList } = props;
  const [tasks, setTasks] = useContext(TasksContext);

  return (
    <div className="task-list">
      <h2>{tasksList.length} tasks remaining</h2>
      <ul>
        {tasksList.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" value="" />
              <span className="task">{task}</span>
              <br />
              <button
                onClick={() => {
                  setTasks(tasksList.filter((item) => item.id !== task.id));
                }}
                className="delete"
              >
                Delete Task
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
