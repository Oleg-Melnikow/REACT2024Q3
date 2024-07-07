import { PureComponent, ReactNode } from "react";
import { People } from "interfaces/interface";
import Card from "../Card/Card.tsx";
import NotContent from "../NotContent/NotContent.tsx";
import style from "./ContentBlock.module.scss";

interface ContentProps {
  people: People[];
}

class ContentBlock extends PureComponent<ContentProps> {
  render(): ReactNode {
    return (
      <main className={style.content}>
        {this.props.people.length ? (
          <div className={style.items}>
            {this.props.people.map((person) => (
              <Card key={person.name} person={person} />
            ))}
          </div>
        ) : (
          <NotContent />
        )}
      </main>
    );
  }
}

export default ContentBlock;
