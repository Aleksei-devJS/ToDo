import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";
import Header from "../../3_components/Header/Header";
import Footer from "../../3_components/Footer/Footer";
import AlertToggle from "../../3_components/Alert/AlertToggle";
import ModalDel from "../../3_components/ModalDelete/ModalDel";

export default function Layout(): React.JSX.Element {
  return (
    <div className={style.layout}>
      <ModalDel />
      <AlertToggle />
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
