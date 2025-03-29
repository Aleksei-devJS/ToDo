import { create } from "zustand";
import { TaskFilter, TaskList } from "../../5_types/types";
import { persist } from "zustand/middleware";

interface TaskState {
  tasks: TaskList[];
  filter: TaskFilter;
  addTask: (text: string) => void;
  deleteTask: (id?: string) => void;
  changeStatus: (id: string) => void;
  setFilter: (status: TaskFilter) => void;
  clearDone: () => void;
}

interface ModalState {
  alertShow: boolean;
  infoTask: TaskList | null | string;
  open: boolean;
  textAlert: string | null;
  openAlert: (text: string) => void;
  closeAlert: () => void;
  setOpen: (data: TaskList) => void;
  setOpenAll: (marker: string) => void;
  setClose: () => void;
}

const useTaskStore = create(
  persist<TaskState>(
    (set) => ({
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
        set((state) => {
          if (!id) {
            return { tasks: [] };
          }
          return { tasks: state.tasks.filter((task) => task.id !== id) };
        }),

      // отметка выполнено
      changeStatus: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  status: task.status === "active" ? "done" : "active",
                }
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
    }),
    {
      name: "tasks-session-storage",
      storage: {
        getItem: (name) => {
          const str = sessionStorage.getItem(name);
          if (!str) return null;
          return JSON.parse(str);
        },
        setItem: (name, value) =>
          sessionStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => sessionStorage.removeItem(name),
      },
    }
  )
);

export const useModal = create<ModalState>((set) => ({
  open: false,
  infoTask: null,
  alertShow: false,
  textAlert: null,

  openAlert: (text) => set({ alertShow: true, textAlert: text }),
  closeAlert: () => set({ alertShow: false, textAlert: null }),
  setOpen: (data: TaskList) =>
    set(() => ({
      open: true,
      infoTask: data,
    })),

  setOpenAll: (marker) =>
    set({
      open: true,
      infoTask: marker,
    }),

  setClose: () => {
    set(() => ({
      open: false,
      infoTask: null,
    }));
  },
}));

export default useTaskStore;
