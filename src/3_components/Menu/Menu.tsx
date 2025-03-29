import { Button } from "@mui/material";
import React, { useMemo, useState } from "react";
import style from "./Menu.module.scss";
import { Delete } from "@mui/icons-material";
import useTaskStore, { useModal } from "../../1_app/store/zustand";
import { controlClearDone, lengthTasks } from "../../4_utils/lengthTasks";

function Menu(): React.JSX.Element {
  const setFilter = useTaskStore((state) => state.setFilter);
  const [word, setWord] = useState("задач");
  const tasks = useTaskStore((state) => state.tasks);
  const openModal = useModal((state) => state.setOpenAll);
  const openAlert = useModal((state) => state.openAlert);

  const lengthTask = useMemo(
    (): number => lengthTasks(tasks, setWord),
    [tasks]
  );

  return (
    <div className={style.menu}>
      <div className={style.menu_left}>
        <span className={style.word}>{`${lengthTask} ${word}`}</span>
        <Button size="small" color="inherit" onClick={() => setFilter("all")}>
          Все
        </Button>
        <Button size="small" color="inherit" onClick={() => setFilter("done")}>
          Выполненные
        </Button>
        <Button
          size="small"
          color="inherit"
          onClick={() => setFilter("active")}
        >
          Активные
        </Button>
      </div>
      <div className={style.menu_right}>
        <Button
          size="small"
          variant="outlined"
          color="inherit"
          endIcon={<Delete />}
          onClick={() => {
            controlClearDone(tasks) ? openModal("all") : openAlert();
          }}
        >
          Очистить выполненные
        </Button>
      </div>
    </div>
  );
}

export default Menu;
