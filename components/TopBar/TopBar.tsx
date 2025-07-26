import Image from "next/image";
import { Navigation } from "@/components/index";
import styles from "./TopBar.module.css";
export const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logoWrapper}>
        <Image className={styles.logo} src="/Logo.png" alt="Логотип Макулатура" fill priority />
      </div>
      <Navigation />
    </div>
  );
};
