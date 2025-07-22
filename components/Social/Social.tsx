import { FC } from "react";
import styles from "./Social.module.css";

const socialLinks = [
  { name: "Ozon", path: "#" },
  { name: "Rutube", path: "#" },
];

type Props = {
  classNames?: string;
};

export const Social: FC<Props> = ({ classNames = "" }) => {
  return (
    <nav className={`${styles.social} ${classNames}`}>
      <ul>
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
