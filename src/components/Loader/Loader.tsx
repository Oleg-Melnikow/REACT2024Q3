import { ReactElement } from "react";
import style from "./Loader.module.scss";

function Loader(): ReactElement {
  return (
    <div className={style.loaderBlock}>
      <div className={style.loader}></div>
    </div>
  );
}

export default Loader;
