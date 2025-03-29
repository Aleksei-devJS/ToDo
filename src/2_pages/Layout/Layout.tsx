import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";
import Header from "../../3_components/Header/Header";
import Footer from "../../3_components/Footer/Footer";
import AlertToggle from "../../3_components/Alert/AlertToggle";

export default function Layout(): React.JSX.Element {
  return (
    <div className={style.main}>
      <AlertToggle />
      <div>
        <Header />
      </div>
      <div className={style.container}>
        <Outlet />
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}
