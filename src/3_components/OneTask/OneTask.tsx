import React from "react";
import style from "./OneTask.module.scss";
import { Checkbox, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import useTaskStore, { useModal } from "../../1_app/store/zustand";
import { TaskList } from "../../5_types/types";

interface TaskProps {
  task: TaskList;
}

function OneTask({ task }: TaskProps): React.JSX.Element {
  const changeStatus = useTaskStore((state) => state.changeStatus);
  const openModal = useModal((state) => state.setOpen);

  const checkClick = (): void => {
    changeStatus(task.id);
  };

  return (
    <div className={style.task}>
      <Checkbox
        checked={task.status === "done"}
        onClick={checkClick}
        color="secondary"
      />
      <span
        className={`${style.title} ${
          task.status === "done" ? style["title--done"] : style["title--active"]
        }`}
      >
        {task.title}
      </span>
      <IconButton onClick={() => openModal(task)}>
        <Delete />
      </IconButton>
    </div>
  );
}

export default OneTask;
