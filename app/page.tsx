import { Feedback, Intro, Hero, Stickers, Shop } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <main className={styles.main}>
        <Stickers />
        <Intro
          className={styles.intro}
          text="Мы любим наклейки — потому, что это весело и круто."
        />
        <hr />
        <section id="shop">
          <Shop />
        </section>

        <section id="feedback">
          <Feedback className={styles.feedback} />
        </section>
      </main>
    </>
  );
}
