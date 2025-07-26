import { FC } from "react";
import styles from "./Social.module.css";

const socialLinks = [
  { name: "Ozon", path: "https://www.ozon.ru/seller/makulatura-3196910/?miniapp=seller_3196910" },
  { name: "Rutube", path: "https://rutube.ru/channel/66403734/" },
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
            <a href={link.path} target="blank">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
