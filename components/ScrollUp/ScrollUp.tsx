"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRegSmile, FaArrowAltCircleUp } from "react-icons/fa";
import { Button } from "../Button/Button";
import styles from "./ScrollUp.module.css";

gsap.registerPlugin(ScrollTrigger);

export const ScrollUp = () => {
  const [hovered, setHovered] = useState(false);
  const button = useRef(null);

  useEffect(() => {
    const header = document.querySelector("header");

    if (!header) return;

    gsap.to(".smile-icon", {
      rotate: 360,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    gsap.fromTo(
      button.current,
      { y: 200 },
      {
        y: 0,
        scrollTrigger: {
          trigger: header,
          start: "center top",
          end: "bottom top",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <Button
      round
      size="xl"
      ref={button}
      className={styles.fixed}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <span>
        <FaRegSmile
          className={`${styles.icon} smile-icon`}
          style={{
            opacity: hovered ? 0 : 1,
          }}
        />
        <FaArrowAltCircleUp
          className={styles.icon}
          style={{
            opacity: hovered ? 1 : 0,
          }}
        />
      </span>
    </Button>
  );
};
