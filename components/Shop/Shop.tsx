import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./Shop.module.css";

export const Shop = () => {
  return (
    <div className={styles.shop}>
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
    </div>
  );
};
