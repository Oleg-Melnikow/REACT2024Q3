import { ReactElement } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router.tsx";
import "./App.css";

function App(): ReactElement {
  const content = useRoutes(routes);

  return <>{content}</>;
}

export default App;
