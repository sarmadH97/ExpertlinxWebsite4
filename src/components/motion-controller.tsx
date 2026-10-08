"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionController() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 90%", toggleActions: "play none none reverse" } });
      });
      gsap.utils.toArray<HTMLElement>("[data-assemble]").forEach((element) => {
        const chars = element.querySelectorAll(".split-char");
        gsap.fromTo(chars, { yPercent: (index) => index % 2 === 0 ? 100 : -100, xPercent: (index) => (index % 3 - 1) * 45, opacity: 0, rotate: (index) => (index % 2 ? 5 : -5) }, { yPercent: 0, xPercent: 0, opacity: 1, rotate: 0, stagger: 0.025, ease: "none", scrollTrigger: { trigger: element, start: "top 95%", end: "top 55%", scrub: 0.65 } });
      });
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((element, index) => {
        gsap.fromTo(element, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: index * 0.05, scrollTrigger: { trigger: element, start: "top 88%", toggleActions: "play none none reverse" } });
      });
      gsap.fromTo(".process-line span", { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".process-track", start: "top 78%", end: "bottom 65%", scrub: true } });
      gsap.fromTo("[data-diagram]", { scale: 0.88, opacity: 0 }, { scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: ".featured", start: "top 90%", end: "top 35%", scrub: 0.7 } });
      gsap.fromTo("[data-orbit]", { scale: 0.84, opacity: 0, rotate: -4 }, { scale: 1, opacity: 1, rotate: 0, ease: "none", scrollTrigger: { trigger: ".ecosystem", start: "top 85%", end: "top 30%", scrub: 0.8 } });
      gsap.fromTo(".workflow-step", { x: 45, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.14, duration: 0.7, scrollTrigger: { trigger: ".workflow", start: "top 80%", toggleActions: "play none none reverse" } });
    });
    return () => context.revert();
  }, []);
  return null;
}
