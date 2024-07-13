import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import style from "./Search.module.scss";
import Button from "../Button/Button.tsx";

interface SearchProps {
  getItems: (search?: string) => Promise<void>;
  onError: () => void;
}

function Search({ getItems, onError }: SearchProps): ReactElement {
  const [searchValue, setSearchValue] = useState("");

  const searchInput = (): void => {
    const search = searchValue.trim();
    localStorage.setItem("search", search);
    getItems(search);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const item = localStorage.getItem("search");
    if (item) {
      setSearchValue(item);
    }
  }, []);

  return (
    <header className={style.header}>
      <div className={style.search}>
        <input
          type="text"
          placeholder="Enter search words"
          value={searchValue}
          onChange={onChangeInput}
        />
        <Button
          onClick={searchInput}
          title="Search"
          isDisabled={!searchValue.length}
        />
        <Button onClick={onError} title="Error" />
      </div>
    </header>
  );
}

export default Search;
