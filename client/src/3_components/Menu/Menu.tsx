import { Button } from "@mui/material";
import React from "react";
import style from "./Menu.module.scss";
import { Delete } from "@mui/icons-material";
import useTaskStor from "../../1_app/store/zustand";

function Menu(): React.JSX.Element {
  const { setFilter, clearDone } = useTaskStor((state) => state);

  return (
    <div className={style.menu}>
      <div className={style.menu_left}>
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
