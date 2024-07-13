import { ReactElement, useEffect, useState } from "react";
import { ResultPeoople, People } from "interfaces/interface";
import { searchAPI } from "api/api";
import Search from "components/Search/Search";
import Loader from "components/Loader/Loader";
import ContentBlock from "components/ContentBlock/ContentBlock";

interface StateApp {
  people: People[];
  loading: boolean;
  error: boolean;
}

const initialState: StateApp = {
  people: [],
  loading: true,
  error: false,
};

function MainPage(): ReactElement {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const getItems = async (search?: string): Promise<void> => {
    setLoading(true);
    try {
      const result = search
        ? await searchAPI.searchItems(search)
        : await searchAPI.getItems();
      const { results } = result.data as ResultPeoople;
      setState((prev) => ({ ...prev, people: results }));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const item = localStorage.getItem("search") ?? "";
    getItems(item);
  }, []);

  const onError = (): void => {
    setState((prev) => ({ ...prev, error: true }));
  };

  if (state.error) {
    throw new Error("App was crashed!");
  }

  return (
    <>
      <Search getItems={getItems} onError={onError} />
      <ContentBlock people={state.people} />
      {loading && <Loader />}
    </>
  );
}

export default MainPage;
