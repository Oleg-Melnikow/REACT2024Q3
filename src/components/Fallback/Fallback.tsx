import { ReactElement } from "react";
import Button from "../Button/Button.tsx";
import style from "./Fallback.module.scss";

interface FallbackProps {
  onReset: () => void;
}

function Fallback({ onReset }: FallbackProps): ReactElement {
  return (
    <div className={style.fallback}>
      <h1>Sorry.. there was an error</h1>
      <Button onClick={onReset} title="Reset" />
    </div>
  );
}

export default Fallback;
