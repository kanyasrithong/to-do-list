import Tasks from "./Tasks.jsx";

export default function Input() {
  return (
    <div>
      <h2>Enter New Task Below</h2>
      <form className="input">
        <input type="text" />
        <input type="submit" value="Add" />
      </form>
      <Tasks />
    </div>
  );
}
