import { ProductCard, Feedback, ScrollUp } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Мы <br />
          делаем <br /> наклейки.
        </h1>
      </header>

      <main className={styles.main}>
        <section>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae a officiis!
            Possimus fugit cum ex eos. Quasi, vero expedita!
          </h3>
        </section>

        <section className={styles.shop}>
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

        <section>
          <Feedback className={styles.feedback} />
        </section>
      </main>
    </>
  );
}
