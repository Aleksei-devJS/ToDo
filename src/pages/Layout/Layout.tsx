import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AlertToggle from "../../components/Alert/AlertToggle";
import ModalDel from "../../components/ModalDelete/ModalDel";

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
