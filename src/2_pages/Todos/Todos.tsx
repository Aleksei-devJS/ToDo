import React from "react";
import style from "./Todos.module.scss";
import Input from "../../3_components/Input/Input";
import AllTasks from "../../3_components/AllTasks/AllTasks";
import ModalDel from "../../3_components/ModalDelete/ModalDel";

export default function Todos(): React.JSX.Element {
  return (
    <div className={style.container}>
      <Input />
      <AllTasks />
      <ModalDel />
    </div>
  );
}
