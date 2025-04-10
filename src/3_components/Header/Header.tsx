import React from "react";
import style from "./Header.module.scss";

function Header(): React.JSX.Element {
  return <div className={style.title} >{"ToDo's"}</div>;
}

export default Header;
