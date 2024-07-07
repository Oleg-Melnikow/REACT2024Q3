import { Component, ReactNode } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  title: string;
  onClick: () => void;
  isDisabled?: boolean;
}

class Button extends Component<ButtonProps> {
  render(): ReactNode {
    const { isDisabled, onClick, title } = this.props;
    return (
      <button disabled={isDisabled} className={style.button} onClick={onClick}>
        {title}
      </button>
    );
  }

  static defaultProps = {
    isDisabled: false,
  };
}

export default Button;
