import { TopBar, Button, Footer } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className={styles.main}>
        <section className={`${styles.main__section} ${styles.main__section_intro}`}>
          <h1>Мы делаем наклейки.</h1>
          <h2>Мы делаем наклейки.</h2>
          <h3>Мы делаем наклейки.</h3>
          <h4>Мы делаем наклейки.</h4>
          <h5>Мы делаем наклейки.</h5>
          <Button size="sm">Наклейки</Button>
          <Button>Наклейки</Button>
          <Button size="l">Наклейки</Button>
        </section>
        <Footer />
      </main>
    </>
  );
}
