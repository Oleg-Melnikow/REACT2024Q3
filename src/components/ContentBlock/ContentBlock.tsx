import { PureComponent, ReactNode } from "react";
import { People } from "interfaces/interface";
import style from "./ContentBlock.module.scss";
import Card from "../Card/Card.tsx";

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
          <div>not content</div>
        )}
      </main>
    );
  }
}

export default ContentBlock;
