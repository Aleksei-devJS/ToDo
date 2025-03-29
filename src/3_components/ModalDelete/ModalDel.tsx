import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import useTaskStore, { useModal } from "../../1_app/store/zustand";

function ModalDel(): React.JSX.Element {
  const { infoTask, open, setClose } = useModal((state) => state);
  const { deleteTask, clearDone } = useTaskStore((state) => state);

  const deleteHandler = () => {
    try {
      if (infoTask && typeof infoTask !== "string") {
        deleteTask(infoTask.id);
        setClose();
      }
      if (infoTask === "done") {
        clearDone();
        setClose();
      }
      if (infoTask === "active") {
        deleteTask();
        setClose();
      }
    } catch {
      console.error("Заметка отсутствует");
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={setClose}>
        <DialogTitle sx={{ fontSize: "13px" }}>
          {"Вы уверены что хотите выполнить удаление?"}
        </DialogTitle>
        <DialogActions>
          <Button sx={{ fontSize: "11px" }} size="small" onClick={setClose}>
            {"Вернуться"}
          </Button>
          <Button
            sx={{ fontSize: "11px" }}
            size="small"
            variant="outlined"
            color="error"
            onClick={() => deleteHandler()}
          >
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalDel;
