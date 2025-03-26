import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";
import Header from "../../3_components/Header/Header";

export default function Layout(): React.JSX.Element {
  return (
    <div className={style.main}>
      <div>
        <Header />
      </div>
      <div className={style.container}>
        <Outlet />
      </div>
    </div>
  );
}
