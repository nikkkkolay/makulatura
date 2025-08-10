"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Stickers.module.css";

gsap.registerPlugin(ScrollTrigger);

export const Stickers = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = gsap.utils.toArray<HTMLElement>(`.${styles.sticker}`);

    gsap.set(elements, {
      x: (i) => (i === 0 ? 0 : i % 2 === 0 ? -300 : 300),
      opacity: (i) => (i === 0 ? 1 : 0),
      rotate: 0,
      zIndex: (i) => i + 1,
    });

    gsap.to(elements, {
      x: 0,
      opacity: 1,
      rotate: (i) => {
        if (i === 0 || i === elements.length - 1) return 0;
        const baseAngle = 4;
        const sign = i % 2 === 0 ? -1 : 1;
        return sign * baseAngle * i;
      },
      stagger: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "10% 90%",
        end: "bottom top",
      },
    });
  }, []);

  return (
    <div className={styles.stickers} ref={containerRef}>
      <div className={styles.sticker}>
        <Image src="/Бэк4.png" alt="" fill />
      </div>
      <div className={styles.sticker}>
        <Image src="/Бэк2.png" alt="" fill />
      </div>
      <div className={styles.sticker}>
        <Image src="/Бэк1.png" alt="" fill />
      </div>

      <div className={styles.sticker}>
        <Image src="/Бэк3.png" alt="" fill />
      </div>
      <div className={`${styles.sticker} ${styles.logo}`}>
        <Image src="/logo.png" alt="" width={95} height={90} />
      </div>
    </div>
  );
};
