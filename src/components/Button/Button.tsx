import { ReactElement } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  title: string;
  onClick: () => void;
  isDisabled?: boolean;
}

function Button({ onClick, title, isDisabled }: ButtonProps): ReactElement {
  return (
    <button disabled={isDisabled} className={style.button} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
