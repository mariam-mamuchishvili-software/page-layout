import type { Task } from "../types/task.types";

interface Props {
  task: Task;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

export default function TaskCard({ task, onDelete, onToggleComplete }: Props) {
  const {
    id,
    title,
    description,
    status,
    priority,
    progress,
    tags,
    dueDate,
    completed,
  } = task;
  const progressColor =
    status === "done"
      ? "var(--clr-success)"
      : progress >= 50
        ? "var(--clr-warning)"
        : "var(--clr-info)";
  const statusLabel = status.replace("_", " ");

  return (
    <div
      className="task"
      data-layout-structure="component"
      data-completed={String(completed)}
    >
      <div className="task-header">
        <h4 className="task-title-text">{title}</h4>
        <span className={`badge badge--${priority}`}>{priority}</span>
      </div>
      <p className="task-desc">{description}</p>
      <div className="task-footer">
        <div className="progress-wrap">
          <div className="progress-row">
            <span className={`badge badge--${status}`}>{statusLabel}</span>
            <span className="progress-pct">{progress}%</span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%`, background: progressColor }}
            />
          </div>
        </div>
        <div className="task-meta">
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <span className="due-date">
            Due{" "}
            {new Date(dueDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
      <div className="task-actions">
        <button
          className={`btn-complete${status === "done" ? " btn-complete--active" : ""}`}
          onClick={() => onToggleComplete(id)}
        >
          {status === "done" ? "✓ Completed" : "Mark Complete"}
        </button>
        <button className="btn-delete" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
