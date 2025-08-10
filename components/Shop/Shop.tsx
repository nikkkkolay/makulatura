import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./Shop.module.css";
import type { ProductResponse } from "@/types/product";

export const Shop = async () => {
  const response = await fetch(`${process.env.API}/api/stickers?populate=image`);
  const productsResponse: ProductResponse = await response.json();

  return (
    <div className={styles.shop}>
      <h2>Магазинчик</h2>
      <div className={styles.cardList}>
        {productsResponse.data.map((product) => {
          const imageUrl = product.image[0]?.url || "";

          return (
            <ProductCard
              key={product.documentId}
              name={product.name}
              type={product.type}
              image={`${process.env.API}${imageUrl}`}
              description={product.description}
              ozonLink={product.ozonLink}
            />
          );
        })}
      </div>
    </div>
  );
};
