import { FC } from "react";
import { Social } from "@/components";
import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>МАКУЛАТУКРА | 2025</p>
      <Social />
    </footer>
  );
};
