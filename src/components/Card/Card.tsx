import { ReactElement } from "react";
import { People } from "interfaces/interface";
import Button from "components/Button/Button";
import useApp from "hooks/useApp";
import { getItemIdFromPath } from "helpers/getItemIdFromPath";
import style from "./Card.module.scss";

interface CardProps {
  person: People;
}

function Card(props: CardProps): ReactElement {
  const {
    name,
    birth_year: birthYear,
    gender,
    height,
    mass,
    url,
  } = props.person;
  const { getPerson } = useApp();

  const onClickCard = (): void => {
    const urlSrt = new URL(url);
    const id = getItemIdFromPath(urlSrt.pathname);
    getPerson(id);
  };

  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <h4 className={style.cardTitlte}>{name}</h4>
      </div>
      <div className={style.cardBody}>
        <p>Birth year: {birthYear}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
      </div>
      <div className={style.cardAction}>
        <Button onClick={onClickCard} title="More info" />
      </div>
    </div>
  );
}

export default Card;
