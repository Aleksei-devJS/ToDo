import { Alert, Slide, Snackbar } from "@mui/material";
import React from "react";
import { useModal } from "../../1_app/store/zustand";

function AlertToggle(): React.JSX.Element {
  const alertShow = useModal((state) => state.alertShow);
  const closeAlert = useModal((state) => state.closeAlert);
  const alertText = useModal((state) => state.textAlert);

  return (
    <Snackbar
      slots={{ transition: Slide }}
      open={alertShow}
      onClose={closeAlert}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      slotProps={{
        transition: { direction: "left" },
      }}
    >
      <Alert variant="filled" severity="warning">
        {`${alertText} нету`}
      </Alert>
    </Snackbar>
  );
}

export default AlertToggle;
