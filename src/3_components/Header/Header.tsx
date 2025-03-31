import React from "react";
import style from "./Header.module.scss";

function Header(): React.JSX.Element {
  return <header className={style.title}>{"ToDo's"}</header>;
}

export default Header;
