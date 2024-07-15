import { ReactElement, useEffect } from "react";
import Search from "components/Search/Search";
import Loader from "components/Loader/Loader";
import ContentBlock from "components/ContentBlock/ContentBlock";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import useApp from "hooks/useApp";

function MainPage(): ReactElement {
  const { search, pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { getItems, isLoading, isError, resetDetails } = useApp();

  useEffect(() => {
    const item = localStorage.getItem("search") ?? "";
    if (item && !searchParams.size) {
      setSearchParams({ search: item });
    }
    if (!pathname.includes("details")) {
      getItems(search || `?search=${item}` || "");
    }
  }, [getItems, pathname, search, searchParams.size, setSearchParams]);

  if (isError) {
    throw new Error("App was crashed!");
  }

  return (
    <>
      <div className="app">
        {pathname.includes("details") && (
          <div onClick={resetDetails} className="blocked" />
        )}
        <Search />
        <ContentBlock />
        {isLoading && <Loader />}
      </div>
      <Outlet />
    </>
  );
}

export default MainPage;
