export type TaskStatus = "in_progress" | "todo" | "done";

export type TaskPriority = "urgent" | "high" | "medium" | "low";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  createdAt: string;
  assigneeId: number;
  tags: string[];
  completed: boolean;
  progress: number;
}
