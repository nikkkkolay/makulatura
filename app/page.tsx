import Image from "next/image";
import { ProductCard, Feedback, Intro, Hero, Stickers } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />

      <main className={styles.main}>
        <section>
          <Stickers />
        </section>

        <section>
          <Intro
            className={styles.intro}
            text="Мы любим наклейки — просто потому, что это весело."
          />
          <hr />
        </section>

        <section className={styles.shop} id="shop">
          <h2>Магазинчик</h2>

          <div className={styles.cardList}>
            <ProductCard
              name="Лабубу"
              type="vertical-card"
              image="/1.png"
              descriptrion="Наклейка на банковскую карту"
            />
            <ProductCard
              name="Собачки-котики"
              type="horizontal-card"
              image="/5.png"
              descriptrion="Наклейка на банковскую карту"
            />
            <ProductCard
              name="Котики-слачки"
              type="vertical-card"
              image="/2.png"
              descriptrion="Наклейка на банковскую карту"
            />
            <ProductCard
              name="НЛО коты"
              type="vertical-card"
              image="/3.png"
              descriptrion="Наклейка на банковскую карту"
            />
            <ProductCard
              name="Пухля"
              type="vertical-card"
              image="/6.png"
              descriptrion="Наклейка на банковскую карту"
            />
          </div>
        </section>

        <section id="feedback">
          <Feedback className={styles.feedback} />
        </section>
      </main>
    </>
  );
}
