export interface TaskList {
  id: string;
  title: string;
  status: "active" | "done";
}
export type TaskFilter = TaskList["status"] | "all";
