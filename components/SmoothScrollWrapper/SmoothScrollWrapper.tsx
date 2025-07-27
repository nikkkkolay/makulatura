"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
    gsap.to(".sticky-element", {
      scrollTrigger: {
        trigger: ".sticky-element",
        start: "top top",
        end: () => document.body.scrollHeight,
        pin: true,
        pinSpacing: false,
        scrub: false,
      },
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};
