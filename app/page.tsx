import { ProductCard, Feedback, Intro } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header} id="header">
        <h1>
          Мы <br />
          делаем <br /> наклейки.
        </h1>
      </header>

      <main className={styles.main}>
        <section>
          <Intro
            className={styles.intro}
            text="Качественная печать и надежные материалы. Уникальный стиль и дизайн. Стойкие наклейки при любой погоде и на любой поверхности."
          />
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
          </div>
        </section>

        <section id="feedback">
          <Feedback className={styles.feedback} />
        </section>
      </main>
    </>
  );
}
