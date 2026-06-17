export default function TaskCard({ task, onDelete, onToggleComplete }) {
  const progressColor =
    task.status === "done"
      ? "var(--clr-success)"
      : task.progress >= 50
        ? "var(--clr-warning)"
        : "var(--clr-info)";
  const statusLabel = task.status.replace("_", " ");

  return (
    <div
      className="task"
      data-layout-structure="component"
      data-completed={String(task.completed)}
    >
      <div className="task-header">
        <h4 className="task-title-text">{task.title}</h4>
        <span className={`badge badge--${task.priority}`}>{task.priority}</span>
      </div>
      <p className="task-desc">{task.description}</p>
      <div className="task-footer">
        <div className="progress-wrap">
          <div className="progress-row">
            <span className={`badge badge--${task.status}`}>{statusLabel}</span>
            <span className="progress-pct">{task.progress}%</span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${task.progress}%`, background: progressColor }}
            />
          </div>
        </div>
        <div className="task-meta">
          <div className="tags">
            {task.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <span className="due-date">
            Due{" "}
            {new Date(task.dueDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
      <div className="task-actions">
        <button
          className={`btn-complete${task.status === "done" ? " btn-complete--active" : ""}`}
          onClick={() => onToggleComplete(task.id)}
        >
          {task.status === "done" ? "✓ Completed" : "Mark Complete"}
        </button>
        <button className="btn-delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
