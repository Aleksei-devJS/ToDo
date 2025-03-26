import React, { useMemo } from "react";
import OneTask from "../OneTask/OneTask";
import style from "./AllTasks.module.scss";
import Menu from "../Menu/Menu";
import useTaskStor from "../../1_app/store/zustand";

import { TaskList } from "../../5_types/types";

function AllTasks(): React.JSX.Element {
  const tasks = useTaskStor((state) => state.tasks);
  const filter = useTaskStor((state) => state.filter);

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
      {actualTask.map((task) => (
        <OneTask key={task.id} task={task} />
      ))}
    </div>
  );
}

export default AllTasks;
