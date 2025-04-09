import React, { useMemo } from "react";
import OneTask from "../OneTask/OneTask";
import style from "./AllTasks.module.scss";
import Menu from "../Menu/Menu";
import useTaskStore from "../../1_app/store/zustand";
import { TaskList } from "../../5_types/types";


function AllTasks(): React.JSX.Element {
  const tasks = useTaskStore((state) => state.tasks);
  const filter = useTaskStore((state) => state.filter);

  const actualTask = useMemo<TaskList[]>(() => {
    return filter === "all"
      ? tasks
      : tasks.filter((task) => task.status === filter);
  }, [tasks, filter]);

  return (
    <div className={style.task_list}>
      <div className={style.menu}>
        <Menu />
      </div>
      <div className={style.list}>
        {actualTask.map((task) => (
          <OneTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default AllTasks;
