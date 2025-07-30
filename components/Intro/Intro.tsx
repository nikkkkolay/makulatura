"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./Intro.module.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

type Props = {
  className: string;
  text: string;
};

export const Intro: FC<Props> = ({ className, text }) => {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const split = new SplitText(containerRef.current, { type: "words" });
    gsap.set(split.words, { opacity: 0, y: 40 });

    gsap.to(split.words, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom center",
        scrub: 0.5,
      },
    });

    setIsReady(true);

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h2
      className={`${styles.intro} ${className} ${!isReady ? styles.hiddenText : ""}`}
      ref={containerRef}
    >
      {text}
    </h2>
  );
};
