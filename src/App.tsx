import { PureComponent, ReactNode } from "react";
import { ResultPeoople, People } from "interfaces/interface";
import Search from "./components/Search/Search.tsx";
import { searchAPI } from "./api/api";
import Loader from "./components/Loader/Loader.tsx";
import ContentBlock from "./components/ContentBlock/ContentBlock.tsx";
import "./App.css";

interface StateApp {
  people: People[];
  loading: boolean;
  error: boolean;
}

class App extends PureComponent {
  state: StateApp = {
    people: [],
    loading: true,
    error: false,
  };

  getItems = async (search?: string): Promise<void> => {
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
  };

  async componentDidMount(): Promise<void> {
    const item = localStorage.getItem("search") ?? "";
    await this.getItems(item);
  }

  onError = (): void => {
    this.setState({ error: true });
  };

  render(): ReactNode {
    const { loading, people } = this.state;
    if (this.state.error) {
      throw new Error("App was crashed!");
    }
    return (
      <>
        <Search getItems={this.getItems} onError={this.onError} />
        <ContentBlock people={people} />
        {loading && <Loader />}
      </>
    );
  }
}

export default App;
