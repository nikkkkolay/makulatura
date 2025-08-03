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
    const elements = containerRef.current?.querySelectorAll(`.${styles.sticker}`);
    if (!elements) return;

    elements.forEach((el, index) => {
      const rotation = index % 2 === 0 ? -15 : 15;
      const fromX = index % 2 === 0 ? -100 : 100;

      gsap.fromTo(
        el,
        {
          x: fromX,
          opacity: 0,
          rotate: rotation,
          zIndex: index + 1,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            start: `top ${80 - index * 5}%`,
            toggleActions: "play none none none",
            scrub: true,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className={styles.stickers} ref={containerRef}>
      <div className={styles.sticker}>
        <Image src="/Бэк1.png" alt="" fill />
      </div>
      <div className={styles.sticker}>
        <Image src="/Бэк2.png" alt="" fill />
      </div>
      <div className={styles.sticker}>
        <Image src="/Бэк3.png" alt="" fill />
      </div>
      <div className={styles.sticker}>
        <Image src="/Бэк4.png" alt="" fill />
      </div>
    </div>
  );
};
