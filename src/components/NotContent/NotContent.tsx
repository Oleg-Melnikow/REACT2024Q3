import { Component, ReactNode } from "react";
import warning from "assets/warning.svg";
import style from "./NotContent.module.scss";

class NotContent extends Component {
  render(): ReactNode {
    return (
      <div className={style.notFound}>
        <img src={warning} alt="warning" />
        <p>Not content</p>
      </div>
    );
  }
}

export default NotContent;
