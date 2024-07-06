import { PureComponent, ReactNode } from "react";
import Search from "./components/Search/Search.tsx";
import { ResultPeoople, People } from "./interfaces/interface";
import { searchAPI } from "./api/api";
import Loader from "./components/Loader/Loader.tsx";
import "./App.css";

interface StateApp {
  people: People[];
  loading: boolean;
}

class App extends PureComponent {
  state: StateApp = {
    people: [],
    loading: true,
  };

  async getItems(search?: string): Promise<void> {
    this.setState({ loading: true });
    try {
      const result = search
        ? await searchAPI.searchItems(search)
        : await searchAPI.getItems();
      const { results } = result.data as ResultPeoople;
      this.setState({ people: results, loading: false });
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidMount(): Promise<void> {
    const item = localStorage.getItem("search") ?? "";
    await this.getItems(item);
  }

  render(): ReactNode {
    const { loading } = this.state;
    return (
      <>
        <Search />
        {loading && <Loader />}
      </>
    );
  }
}

export default App;
