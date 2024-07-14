import { ReactElement } from "react";
import useApp from "hooks/useApp";
import Card from "../Card/Card.tsx";
import NotContent from "../NotContent/NotContent.tsx";
import style from "./ContentBlock.module.scss";
import Pagination from "../Pagination/Pagination.tsx";

function ContentBlock(): ReactElement {
  const { count, people, isPagination } = useApp();

  return (
    <main className={style.content}>
      {people.length ? (
        <>
          {isPagination && <Pagination count={count} />}
          <div className={style.items}>
            {people.map((person) => (
              <Card key={person.name} person={person} />
            ))}
          </div>
        </>
      ) : (
        <NotContent />
      )}
    </main>
  );
}

export default ContentBlock;
