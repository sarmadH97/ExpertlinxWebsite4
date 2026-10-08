"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["What we solve", "#what-we-solve"],
  ["Capabilities", "#capabilities"],
  ["Case studies", "#case-studies"],
  ["Industries", "#work"],
  ["Insights", "#insights"],
  ["About", "https://expertlinx.com/about"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="nav-shell">
        <a href="#top" className="brand" aria-label="ExpertLinx home"><span>EXPERT</span><b>LINX</b></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="nav-cta" href="https://expertlinx.com/contact">Discuss your project <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className="mobile-nav" id="mobile-navigation" aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => <a key={label} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>)}
          <a className="button" href="https://expertlinx.com/contact">Discuss your project <ArrowUpRight size={18} /></a>
        </nav>
      </div>
    </header>
  );
}
