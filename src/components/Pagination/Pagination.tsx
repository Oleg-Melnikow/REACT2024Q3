import { memo, ReactElement, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Pagination.module.scss";

interface PaginationProps {
  count: number;
}

const Pagination = memo(({ count }: PaginationProps): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const buttonsArray = useMemo(() => {
    const items = Math.ceil(count / 10);
    return Array(items)
      .fill(0)
      .map((_, i) => i + 1);
  }, [count]);

  const onChnagePage = (page: number): void => {
    if (currentPage !== page) {
      setSearchParams((prev) => {
        prev.set("page", `${page}`);
        return prev;
      });
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    setCurrentPage(+page);
  }, [searchParams]);

  return (
    <div className={style.pagination}>
      {buttonsArray.map((item) => {
        const isActive = item === currentPage;
        return (
          <div
            className={
              isActive ? `${style.pageItem} ${style.active}` : style.pageItem
            }
            key={item}
            onClick={() => onChnagePage(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
});

export default Pagination;
