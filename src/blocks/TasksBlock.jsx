import TaskCard from "../components/TaskCard";

export default function TasksBlock({
  title = "Team Tasks",
  icon = "checklist",
  tasks = [],
  onDelete,
  onToggleComplete,
}) {
  const completedCount = tasks.filter((t) => t.status === 'done').length;

  return (
    <div
      className="tasks-block"
      data-layout-structure="block"
      data-media="container"
    >
      <h3 className="block-header task-title">
        <span className="material-symbols-outlined">{icon}</span>
        {title}
        <span className="task-count">{completedCount}/{tasks.length} completed</span>
      </h3>
      <div className="tasks-wrapper">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={onDelete} onToggleComplete={onToggleComplete} />
        ))}
      </div>
    </div>
  );
}
