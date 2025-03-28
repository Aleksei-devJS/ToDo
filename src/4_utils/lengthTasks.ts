import { TaskList } from "../5_types/types";

export function lengthTasks(
  tasks: TaskList[],
  setWord: (word: string) => void
): number {
  const result = tasks.filter((task) => task.status !== "done").length;
  switch (result) {
    case 1:
      setWord("задача");
      break;
    case 2:
    case 3:
    case 4:
      setWord("задачи");
      break;
    default:
      setWord("задач");
  }
  return result;
}

export function controlClearDone(tasks: TaskList[]): boolean {
  const result = tasks.filter((task) => task.status === "done");
  if (result.length) {
    return true;
  }
  return false;
}
