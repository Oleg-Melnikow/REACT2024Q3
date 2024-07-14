import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useApp from "hooks/useApp";
import style from "./Search.module.scss";
import Button from "../Button/Button.tsx";

function Search(): ReactElement {
  const { setIsError } = useApp();
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchInput = (): void => {
    const search = searchValue.trim();
    localStorage.setItem("search", search);

    const querySearch = searchParams.get("search") !== searchValue;
    if (querySearch) {
      setSearchParams({ search });
    }
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const onChnageError = (): void => {
    setIsError(true);
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
        <Button onClick={onChnageError} title="Error" />
      </div>
    </header>
  );
}

export default Search;
