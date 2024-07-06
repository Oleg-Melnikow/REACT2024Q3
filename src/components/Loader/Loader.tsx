import { Component, ReactNode } from "react";
import style from "./Loader.module.scss";

class Loader extends Component {
  render(): ReactNode {
    return (
      <div className={style.loaderBlock}>
        <div className={style.loader}></div>
      </div>
    );
  }
}

export default Loader;
