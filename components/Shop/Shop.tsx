import { ProductCard } from "../ProductCard/ProductCard";
import type { ProductResponse } from "@/types/product";
import styles from "./Shop.module.css";

async function getProducts(): Promise<ProductResponse | null> {
  try {
    const res = await fetch(`${process.env.API}/api/stickers?populate=image`);

    if (!res.ok) return null;

    return res.json();
  } catch {
    return null;
  }
}

export const Shop = async () => {
  const productsResponse = await getProducts();

  return (
    <div className={styles.shop}>
      <h2>Магазинчик</h2>

      {!productsResponse ? (
        <div className={styles.messageContainer}>
          <h3>
            Ошибка! <br />
            Не удалось загрузить наклейки =(
          </h3>
        </div>
      ) : productsResponse.data.length === 0 ? (
        <div className={styles.messageContainer}>
          <h3>Товаров пока нет</h3>
        </div>
      ) : (
        <div className={styles.cardList}>
          {productsResponse.data.map((product) => (
            <ProductCard
              key={product.documentId}
              name={product.name}
              type={product.type}
              image={`${process.env.API}${product.image[0]?.url}`}
              description={product.description}
              ozonLink={product.ozonLink}
            />
          ))}
        </div>
      )}
    </div>
  );
};
