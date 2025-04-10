import React from "react";
import style from "./Todos.module.scss";
import Input from "../../components/Input/Input";
import AllTasks from "../../components/AllTasks/AllTasks";

export default function Todos(): React.JSX.Element {
  return (
    <div className={style.container}>
      <Input />
      <AllTasks />
    </div>
  );
}
