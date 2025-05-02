import { TasksContext } from "./contexts.jsx";

export default function Tasks(props) {
  const { tasks } = props;
  return (
    <div className="task-list">
      <h2>{tasks.length} tasks remaining</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" value="" />
            <span className="task">{task}</span>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
