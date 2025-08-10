import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components";
import styles from "./ProductCard.module.css";
import type { Product } from "@/types/product";

type Props = Pick<Product, "name" | "type" | "description" | "ozonLink"> & {
  image: string;
};

export const ProductCard: FC<Props> = ({ name, ozonLink, image, type, description }) => {
  return (
    <a href={ozonLink} className={styles.link} target="_blank">
      <article className={styles.card}>
        <h3>{name}</h3>
        <figure>
          <div className={`${styles.imgWrapper} ${styles[type]}`}>
            <Image src={image} alt={name} fill priority />
          </div>
          <figcaption>{description}</figcaption>
        </figure>
        <Button size="sm">Купить</Button>
      </article>
    </a>
  );
};
