import { TopBar, Button, Footer, TextField } from "@/components";

import styles from "./page.module.css";
import { LuArrowDownRight } from "react-icons/lu";
import { Feedback } from "@/components/Feedback/Feedbak";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className={styles.main}>
        <section className={`${styles.main__section} ${styles.main__section_intro}`}>
          <h1>Мы делаем наклейки.</h1>
        </section>

        <section>
          <Feedback className={styles.feedback} />
        </section>

        <Footer />
      </main>
    </>
  );
}
