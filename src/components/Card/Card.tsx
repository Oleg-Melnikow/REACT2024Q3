import { PureComponent, ReactNode } from "react";
import { People } from "interfaces/interface";
import style from "./Card.module.scss";

interface CardProps {
  person: People;
}

class Card extends PureComponent<CardProps> {
  render(): ReactNode {
    const {
      name,
      birth_year: birthYear,
      gender,
      height,
      mass,
      skin_color: skinColor,
    } = this.props.person;

    return (
      <div className={style.card}>
        <div className={style.cardHeader}>
          <h4 className={style.cardTitlte}>{name}</h4>
        </div>
        <div className={style.cardBody}>
          <div>
            <p>Birth year: {birthYear}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Skin color: {skinColor}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
