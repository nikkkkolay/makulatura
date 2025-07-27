"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRegSmile } from "react-icons/fa";
import { Button } from "../Button/Button";
import styles from "./ScrollUp.module.css";

gsap.registerPlugin(ScrollTrigger);

export const ScrollUp = () => {
  useEffect(() => {
    gsap.to(".fixed", {
      y: 700,
      scrollTrigger: {
        // trigger: element,
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className={styles.fixedContainer}>
      <Button round size="xl" className={styles.fixed} id="fixed">
        <FaRegSmile />
      </Button>
    </div>
  );
};
