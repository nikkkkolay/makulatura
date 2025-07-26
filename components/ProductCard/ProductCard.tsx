import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components";
import styles from "./ProductCard.module.css";

type Props = {
  name: string;
  image: string;
  type: "sticker" | "vertical-card" | "horizontal-card";
  descriptrion: string;
};

export const ProductCard: FC<Props> = ({ name, image, type = "sticker", descriptrion }) => {
  return (
    <article className={styles.card}>
      <h3>{name}</h3>
      <figure>
        <div className={`${styles.imgWrapper} ${styles[type]}`}>
          <Image src={image} alt="" fill priority />
        </div>
        <figcaption>{descriptrion}</figcaption>
      </figure>
      <Button size="sm">Купить</Button>
    </article>
  );
};
