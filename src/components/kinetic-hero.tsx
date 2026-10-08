"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const states = [
  ["MODERNIZE", "SYSTEMS"],
  ["CONNECT", "OPERATIONS"],
  ["AUTOMATE", "WORKFLOWS"],
  ["BUILD", "WHAT’S NEXT"],
];

export function KineticHero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".kinetic-word");
      const subjects = gsap.utils.toArray<HTMLElement>(".kinetic-subject");
      gsap.set([...words, ...subjects], { yPercent: 110, opacity: 0 });
      gsap.set([words[0], subjects[0]], { yPercent: 0, opacity: 1 });
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.25 });
      states.forEach((_, index) => {
        const next = (index + 1) % states.length;
        timeline
          .to([words[index], subjects[index]], { yPercent: -110, opacity: 0, duration: 0.65, ease: "power3.inOut" }, `+=${index === 0 ? 1.7 : 1.35}`)
          .fromTo(
            [words[next], subjects[next]],
            { yPercent: 110, opacity: 0, immediateRender: false },
            { yPercent: 0, opacity: 1, duration: 0.72, ease: "power3.out" },
            "<0.1",
          );
      });
      gsap.from(".hero-intro > *", { y: 24, opacity: 0, duration: 0.8, stagger: 0.1, delay: 0.25, ease: "power3.out" });
      gsap.from(".hero-support", { y: 30, opacity: 0, duration: 0.9, delay: 0.85, ease: "power3.out" });
      gsap.from(".hero-system-line", { scaleX: 0, duration: 1.2, delay: 0.5, transformOrigin: "left", ease: "power3.inOut" });
    }, root);
    return () => context.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={root} aria-labelledby="hero-title">
      <div className="hero-grid section-shell">
        <div className="hero-intro"><span>Technology transformation partner</span><span>Toronto · Microsoft ecosystem · Global delivery</span></div>
        <div className="hero-system-line"><i /><i /><i /><i /><i /></div>
        <h1 id="hero-title" className="hero-title">
          <span className="hero-static">WE</span>
          <span className="kinetic-window kinetic-window-main">
            {states.map(([word], index) => <span className="kinetic-word" key={word} aria-hidden={index !== 0}>{word}</span>)}
          </span>
          <span className="kinetic-window kinetic-window-subject">
            {states.map(([, subject], index) => <span className="kinetic-subject" key={subject} aria-hidden={index !== 0}>{subject}.</span>)}
          </span>
        </h1>
        <div className="hero-support">
          <p>ExpertLinx helps organizations modernize operations through Microsoft technologies, cloud, AI, automation and custom enterprise software.</p>
          <div className="hero-actions"><a className="button" href="https://expertlinx.com/contact">Discuss your project <ArrowUpRight size={18} /></a><a className="text-link" href="#case-studies">Explore our work <ArrowDown size={17} /></a></div>
        </div>
        <div className="hero-technology"><span>Microsoft</span><span>Cloud</span><span>AI</span><span>Custom software</span></div>
        <div className="hero-scroll" aria-hidden="true"><span>Scroll to explore</span><i /></div>
      </div>
    </section>
  );
}
