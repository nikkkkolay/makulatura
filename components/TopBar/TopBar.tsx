import Image from "next/image";
import { Navigation } from "@/components/index";
import styles from "./TopBar.module.css";
export const TopBar = () => {
  return (
    <header className={styles.topBar}>
      <Image className={styles.logo} src="/Logo.png" alt="Логотип Макулатура" width={80} height={75} priority />
      <Navigation />
    </header>
  );
};
