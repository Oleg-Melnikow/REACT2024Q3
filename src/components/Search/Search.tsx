import { ChangeEvent, PureComponent, ReactNode } from "react";
import style from "./Search.module.scss";
import Button from "../Button/Button.tsx";

interface InputState {
  searchValue: string;
}

interface SearchProps {
  getItems: (search?: string) => Promise<void>;
  onError: () => void;
}

class Search extends PureComponent<SearchProps> {
  state: InputState = {
    searchValue: "",
  };

  searchInput(): void {
    const search = this.state.searchValue.trim();
    localStorage.setItem("search", search);
    this.props.getItems(search);
  }

  onChangeInput(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchValue: event.target.value });
  }

  componentDidMount(): void {
    const item = localStorage.getItem("search");
    if (item) {
      this.setState({ searchValue: item });
    }
  }

  render(): ReactNode {
    return (
      <header className={style.header}>
        <div className={style.search}>
          <input
            type="text"
            placeholder="Enter search words"
            value={this.state.searchValue}
            onChange={(e) => this.onChangeInput(e)}
          />
          <Button
            onClick={() => this.searchInput()}
            title="Search"
            isDisabled={!this.state.searchValue.length}
          />
          <Button onClick={this.props.onError} title="Error" />
        </div>
      </header>
    );
  }
}

export default Search;
