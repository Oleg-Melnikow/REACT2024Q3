import { ReactElement, useEffect } from "react";
import Search from "components/Search/Search";
import Loader from "components/Loader/Loader";
import ContentBlock from "components/ContentBlock/ContentBlock";
import { useLocation, useSearchParams } from "react-router-dom";
import useApp from "hooks/useApp";

function MainPage(): ReactElement {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { getItems, isLoading, isError } = useApp();

  useEffect(() => {
    const item = localStorage.getItem("search") ?? "";
    if (item && !searchParams.size) {
      setSearchParams({ search: item });
    }
    getItems(search || `?search=${item}` || "");
  }, [getItems, search, searchParams.size, setSearchParams]);

  if (isError) {
    throw new Error("App was crashed!");
  }

  return (
    <>
      <Search />
      <ContentBlock />
      {isLoading && <Loader />}
    </>
  );
}

export default MainPage;
