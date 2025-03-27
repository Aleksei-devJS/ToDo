import { Button } from "@mui/material";
import React, { useMemo, useState } from "react";
import style from "./Menu.module.scss";
import { Delete } from "@mui/icons-material";
import useTaskStor from "../../1_app/store/zustand";

function Menu(): React.JSX.Element {
  const { setFilter, clearDone } = useTaskStor((state) => state);
  const [word, setWord] = useState("задач");
  const tasks = useTaskStor((state) => state.tasks);

  const lengthTask = useMemo((): number => {
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
  }, [tasks]);

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
          onClick={() => clearDone()}
        >
          Очистить выполненные
        </Button>
      </div>
    </div>
  );
}

export default Menu;
