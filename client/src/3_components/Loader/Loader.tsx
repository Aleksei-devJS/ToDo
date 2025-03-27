import React from "react";
import { BounceLoader } from "react-spinners";
import style from "./Loader.module.scss";

function Loader(): React.JSX.Element {
  return (
    <div className={style.loader}>
      <BounceLoader
        color="rgba(200, 71, 92, 0.88)"
        size={100}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Loader;
