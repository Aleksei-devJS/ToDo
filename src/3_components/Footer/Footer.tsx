import { Telegram } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

function Footer(): React.JSX.Element {
  return (
    <footer>
      {"мой tg: "}

      <IconButton
        size="small"
        href="https://t.me/voroschiloff"
        aria-label="Telegram"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ boxShadow: "0px 1px 4px 1px rgba(0, 0, 0, 0.41);" }}
      >
        <Telegram fontSize="small" color="primary" />
      </IconButton>
    </footer>
  );
}

export default Footer;
