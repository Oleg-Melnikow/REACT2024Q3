import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import notFound from "assets/notfound.jpeg";
import styles from "./NotFound.module.scss";

function PageNotFound(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={notFound} alt="notFound" />
        </div>
        <h2>This page is not fully armed and operational.</h2>
        <p>Try something else?</p>
        <NavLink to="/">Home</NavLink>
      </div>
    </div>
  );
}

export default PageNotFound;
