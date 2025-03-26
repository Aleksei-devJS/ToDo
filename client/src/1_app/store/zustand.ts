import { create } from "zustand";
import { TaskFilter, TaskList } from "../../5_types/types";

interface TaskState {
  tasks: TaskList[];
  filter: TaskFilter;
  addTask: (text: string) => void;
  deleteTask: (id: string) => void;
  changeStatus: (id: string) => void;
  setFilter: (status: TaskFilter) => void;
  clearDone: () => void;
}

const useTaskStor = create<TaskState>((set) => ({
  tasks: [],
  filter: "all",

  //добавление
  addTask: (text) =>
    set((state) => ({
      tasks: [
        { id: Date.now().toString(), title: text, status: "active" },
        ...state.tasks,
      ],
    })),

  // удаление
  deleteTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),

  // отметка выполнено
  changeStatus: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "active" ? "done" : "active" }
          : task
      ),
    })),

  // фильтрация заметок
  setFilter: (status) => {
    set({ filter: status });
  },

  // очистка done
  clearDone: () =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.status !== "done"),
    })),
}));

export default useTaskStor;
