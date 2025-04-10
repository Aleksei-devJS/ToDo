import React from "react";
import { ScaleLoader } from "react-spinners";
import style from "./Loader.module.scss";

function Loader(): React.JSX.Element {
  return (
    <div className={style.loader}>
      <ScaleLoader
        color="rgba(200, 71, 92, 0.88)"
        height={40}
        margin={2}
        radius={1}
      />
    </div>
  );
}

export default Loader;
