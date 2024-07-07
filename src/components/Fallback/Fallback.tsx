import { Component, ReactNode } from "react";
import Button from "../Button/Button.tsx";
import style from "./Fallback.module.scss";

interface FallbackProps {
  onReset: () => void;
}

class Fallback extends Component<FallbackProps> {
  render(): ReactNode {
    return (
      <div className={style.fallback}>
        <h1>Sorry.. there was an error</h1>
        <Button onClick={this.props.onReset} title="Reset" />
      </div>
    );
  }
}

export default Fallback;
