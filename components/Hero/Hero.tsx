import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <header className={styles.header} id="header">
      <h1>
        Мы <br />
        делаем <br /> наклейки.
      </h1>
    </header>
  );
};
