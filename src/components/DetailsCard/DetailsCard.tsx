import useApp from "hooks/useApp";
import { ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getItemIdFromPath } from "helpers/getItemIdFromPath";
import style from "./DetailsCard.module.scss";

function DetailsCard(): ReactElement {
  const { currentPerson, getPerson, resetDetails } = useApp();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("details") && !currentPerson) {
      const id = getItemIdFromPath(pathname);
      getPerson(id);
    }
  }, []);

  return (
    <div className={style.detailsBlock}>
      {currentPerson && (
        <div className={style.detailsCard}>
          <h2>{currentPerson.name}</h2>
          <p>Birth year: {currentPerson.birth_year}</p>
          <p>Gender: {currentPerson.gender}</p>
          <p>Height: {currentPerson.height}</p>
          <p>Mass: {currentPerson.mass}</p>
          <p>Eye color: {currentPerson.eye_color}</p>
          <p>Hair color: {currentPerson.hair_color}</p>
          <button className={style.close} onClick={resetDetails}></button>
        </div>
      )}
    </div>
  );
}

export default DetailsCard;
