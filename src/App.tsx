import { Component, ReactNode } from "react";
import Search from "./components/Search/Search.tsx";
import "./App.css";

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Search />
      </>
    );
  }
}

export default App;
