import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import style from "./Menu.module.scss";
import useTaskStore, { useModal } from "../../app/store/zustand";
import { controlClearDone, lengthTasks } from "../../utils/functions";
import { TaskFilter } from "../../types/types";
import { DeleteSweepOutlined } from "@mui/icons-material";

function Menu(): React.JSX.Element {
  const setFilter = useTaskStore((state) => state.setFilter);
  const [word, setWord] = useState("задач");
  const [buttonStyle, setButtonStyle] = useState<string | null>(null);
  const tasks = useTaskStore((state) => state.tasks);
  const openModal = useModal((state) => state.setOpenAll);
  const openAlert = useModal((state) => state.openAlert);

  const lengthTask = useMemo(
    (): number => lengthTasks(tasks, setWord),
    [tasks]
  );

  const removeStyleBtn = (type: TaskFilter): void => {
    setFilter(type);
    setButtonStyle(type);
  };

  return (
    <div className={style.menu}>
      <div className={style.menu_left}>
        <span className={style.word}>{`${lengthTask} ${word}`}</span>
        <Button
          className={style.btnMenu}
          variant={buttonStyle === "all" ? "contained" : "text"}
          color="inherit"
          onClick={() => removeStyleBtn("all")}
        >
          Все
        </Button>
        <Button
          className={style.btnMenu}
          variant={buttonStyle === "done" ? "contained" : "text"}
          color="inherit"
          onClick={() => removeStyleBtn("done")}
        >
          Выполненные
        </Button>
        <Button
          className={style.btnMenu}
          variant={buttonStyle === "active" ? "contained" : "text"}
          color="inherit"
          onClick={() => removeStyleBtn("active")}
        >
          Активные
        </Button>
      </div>
      <div className={style.menu_right}>
        <FormControl fullWidth size="small">
          <InputLabel className={style.selectText}>Удалить задачи</InputLabel>
          <InputLabel className={style.selectCrash}>
            <DeleteSweepOutlined />
          </InputLabel>
          <Select size="small" variant="outlined" label="Удалить задачи">
            <MenuItem
              className={style.item}
              onClick={() =>
                controlClearDone(tasks, ["active", "done"])
                  ? openModal("active")
                  : openAlert("Задач")
              }
            >
              {"Удалить все"}
            </MenuItem>
            <MenuItem
              className={style.item}
              onClick={() =>
                controlClearDone(tasks, "done")
                  ? openModal("done")
                  : openAlert("Выполненных задач")
              }
            >
              {"Удалить выполненные"}
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Menu;
