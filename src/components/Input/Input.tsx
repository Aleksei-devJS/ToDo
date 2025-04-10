import { Button, InputBase } from "@mui/material";
import React, { useRef, useState } from "react";
import style from "./Input.module.scss";
import { Add } from "@mui/icons-material";
import useTaskStore from "../../app/store/zustand";

function Input(): React.JSX.Element {
  const [text, setText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addTask = useTaskStore((state) => state.addTask);

  const createNewTask = (): void => {
    const clearText = text.trim();
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (clearText) {
      addTask(clearText);
      setText("");
    } else {
      setText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      createNewTask();
    }
  };

  return (
    <div className={style.addForm}>
      <div className={style.input_costom}>
        <InputBase
          size="small"
          sx={{ fontSize: "1em", paddingTop: "5px" }}
          inputProps={{ ref: inputRef }}
          type="text"
          value={text}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => setText(e.currentTarget.value)}
          color="primary"
          fullWidth
          multiline
          placeholder="Напиши задачу..."
        />
      </div>
      <div className={style.btn}>
        <Button
          onClick={() => createNewTask()}
          color="inherit"
          variant="outlined"
          size="small"
          sx={{ fontSize: "1em", borderRadius: "10px", height: "100%" }}
          endIcon={<Add />}
        >
          Добавить задачу
        </Button>
      </div>
    </div>
  );
}

export default Input;
