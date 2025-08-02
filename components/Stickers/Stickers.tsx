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
    const elements = containerRef.current?.querySelectorAll(".sticker");
    if (!elements) return;

    elements.forEach((el, index) => {
      const fromX = index % 2 === 0 ? -150 : 150;
      const rotation = index % 2 === 0 ? -20 : 20;

      gsap.from(el, {
        x: fromX,
        opacity: 0,
        rotate: rotation,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div className={styles.stickers} ref={containerRef}>
      <div className="sticker">
        <Image src="/Бэк1.png" alt="" width={200} height={200} />
      </div>
      <div className="sticker">
        <Image src="/Бэк2.png" alt="" width={220} height={220} />
      </div>
      <div className="sticker">
        <Image src="/Бэк3.png" alt="" width={180} height={180} />
      </div>
      <div className="sticker">
        <Image src="/Бэк4.png" alt="" width={200} height={200} />
      </div>
    </div>
  );
};
