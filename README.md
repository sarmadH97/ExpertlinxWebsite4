# ExpertLinx DRAFT-4

A premium enterprise-consulting website concept positioning ExpertLinx as a technology transformation partner across Microsoft, cloud, AI, automation, data, and custom software.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS
- GSAP and ScrollTrigger
- Lucide React
- SVG and CSS motion graphics

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Motion architecture

The page uses small client boundaries for navigation and kinetic typography. Scroll animation is coordinated through one GSAP controller with `gsap.context()` cleanup. Ambient SVG/CSS motion is kept on internal elements so it does not compete with ScrollTrigger-owned transforms. Reduced-motion users receive the completed static visual state.

## Content

Business details, public proof points, services, case studies, contact information, and article titles are based on the public ExpertLinx website as reviewed in October 2026. No custom domain is configured in this repository.
