import { Feedback } from "@/components/Feedback/Feedbak";
import { ProductCard } from "@/components";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.main__section_intro}`}>
          <h1>
            Мы <br />
            делаем <br /> наклейки.
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae a officiis!
            Possimus fugit cum ex eos. Quasi, vero expedita!
          </h2>
        </section>

        <section className={styles.shop}>
          <h2>Магазин наклеек</h2>

          <div className={styles.cardList}>
            <ProductCard
              name="Лабубу"
              type="vertical-card"
              image="/1.png"
              descriptrion="Наклейка на банковскую карту"
            />
            <ProductCard
              name="Лабубу"
              type="horizontal-card"
              image="/5.png"
              descriptrion="Наклейка на банковскую карту"
            />
            <ProductCard
              name="Лабубу"
              type="vertical-card"
              image="/2.png"
              descriptrion="Наклейка на банковскую карту"
            />
            <ProductCard
              name="Лабубу"
              type="vertical-card"
              image="/3.png"
              descriptrion="Наклейка на банковскую карту"
            />
            <ProductCard
              name="Лабубу"
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
