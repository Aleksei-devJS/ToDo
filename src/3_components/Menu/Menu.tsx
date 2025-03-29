import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import style from "./Menu.module.scss";
import useTaskStore, { useModal } from "../../1_app/store/zustand";
import { controlClearDone, lengthTasks } from "../../4_utils/functions";
import { TaskFilter } from "../../5_types/types";

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
          variant={buttonStyle === "all" ? "contained" : "text"}
          sx={{ fontSize: "11px", padding: "5px" }}
          color="inherit"
          onClick={() => removeStyleBtn("all")}
        >
          Все
        </Button>
        <Button
          variant={buttonStyle === "done" ? "contained" : "text"}
          sx={{ fontSize: "11px", padding: "5px" }}
          color="inherit"
          onClick={() => removeStyleBtn("done")}
        >
          Выполненные
        </Button>
        <Button
          variant={buttonStyle === "active" ? "contained" : "text"}
          sx={{ fontSize: "11px", padding: "5px" }}
          color="inherit"
          onClick={() => removeStyleBtn("active")}
        >
          Активные
        </Button>
      </div>
      <div className={style.menu_right}>
        <FormControl fullWidth sx={{ minWidth: "150px" }} size="small">
          <InputLabel sx={{ fontSize: "13px" }}>{"Удалить задачи"}</InputLabel>
          <Select size="small" variant="outlined" label="Удалить задачи">
            <MenuItem
              onClick={() =>
                controlClearDone(tasks, "active")
                  ? openModal("active")
                  : openAlert("Задач")
              }
              sx={{ fontSize: "13px" }}
            >
              {"Удалить все "}
            </MenuItem>
            <MenuItem
              onClick={() =>
                controlClearDone(tasks, "done")
                  ? openModal("done")
                  : openAlert("Выполненных задач")
              }
              sx={{ fontSize: "13px" }}
            >
              {"Удалить выполненные "}
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Menu;
