import { FC } from "react";
import styles from "./Navigation.module.css";

export const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <a href="#">Наклейки</a>
        </li>
        <li>
          <a href="#">Преимущества</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};
