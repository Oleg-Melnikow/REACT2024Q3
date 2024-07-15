import { Component, ErrorInfo, ReactNode } from "react";
import Fallback from "../Fallback/Fallback.tsx";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  onReset = (): void => {
    this.setState({ hasError: false });
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      return <Fallback onReset={this.onReset} />;
    }

    return this.props.children;
  }

  static defaultProps = {
    children: null,
  };
}

export default ErrorBoundary;
