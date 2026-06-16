import TaskCard from "../components/TaskCard";

export default function TasksBlock({
  title = "Team Tasks",
  icon = "checklist",
  tasks = [],
  onDelete,
}) {
  return (
    <div
      className="tasks-block"
      data-layout-structure="block"
      data-media="container"
    >
      <h3 className="block-header task-title">
        <span className="material-symbols-outlined">{icon}</span>
        {title}
      </h3>
      <div className="tasks-wrapper">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
