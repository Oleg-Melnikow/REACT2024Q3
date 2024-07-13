import { ReactElement } from "react";
import { People } from "interfaces/interface";
import Card from "../Card/Card.tsx";
import NotContent from "../NotContent/NotContent.tsx";
import style from "./ContentBlock.module.scss";

interface ContentProps {
  people: People[];
}

function ContentBlock({ people }: ContentProps): ReactElement {
  return (
    <main className={style.content}>
      {people.length ? (
        <div className={style.items}>
          {people.map((person) => (
            <Card key={person.name} person={person} />
          ))}
        </div>
      ) : (
        <NotContent />
      )}
    </main>
  );
}

export default ContentBlock;
