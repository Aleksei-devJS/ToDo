import { Alert, Slide, Snackbar } from "@mui/material";
import React from "react";
import { useModal } from "../../1_app/store/zustand";

function AlertToggle(): React.JSX.Element {
  const alertShow = useModal((state) => state.alertShow);
  const closeAlert = useModal((state) => state.closeAlert);

  return (
    <Snackbar
      slots={{ transition: Slide }}
      open={alertShow}
      onClose={closeAlert}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      message="Выполненных задач нету"
      slotProps={{
        transition: { direction: "left" },
      }}
    >
      <Alert variant="filled" severity="warning">
        {"Выполненных задач нету"}
      </Alert>
    </Snackbar>
  );
}

export default AlertToggle;
