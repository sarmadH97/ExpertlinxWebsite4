import {
  ArrowUpRight,
  Cloud,
  Database,
  Gauge,
  LockKeyhole,
  Network,
  ShieldCheck,
} from "lucide-react";
import { KineticHero } from "@/components/kinetic-hero";
import { MotionController } from "@/components/motion-controller";
import { Navigation } from "@/components/navigation";

const challenges = [
  {
    number: "01",
    word: "MODERNIZE",
    title: "Legacy systems.",
    body: "Replace aging applications and infrastructure without disrupting the operations your business depends on.",
    capabilities: ["Cloud modernization", "Application modernization", "Microsoft Azure", "System integration"],
  },
  {
    number: "02",
    word: "UNIFY",
    title: "Disconnected operations.",
    body: "Create one operational picture across data, ERP, CRM, teams, and the workflows between them.",
    capabilities: ["Dynamics 365", "Microsoft 365", "Data platforms", "Integration strategy"],
  },
  {
    number: "03",
    word: "AUTOMATE",
    title: "Manual work.",
    body: "Remove repetitive steps and slow approvals with automation designed around real operating constraints.",
    capabilities: ["Power Platform", "Power Automate", "Applied AI", "Workflow engineering"],
  },
  {
    number: "04",
    word: "BUILD",
    title: "What products cannot solve.",
    body: "Engineer secure, maintainable software for the requirements that off-the-shelf platforms cannot meet.",
    capabilities: ["Enterprise applications", "API engineering", "Mobile systems", "Long-term support"],
  },
];

const capabilities = [
  ["01", "Microsoft Solutions", "Dynamics 365, Microsoft 365, Power Platform and the connective tissue that makes them useful."],
  ["02", "Cloud & Infrastructure", "Migration, architecture and managed Azure foundations designed for continuity and scale."],
  ["03", "AI & Automation", "Practical intelligence and workflow automation tied to a clear operational case."],
  ["04", "Custom Software", "Web, mobile and enterprise applications built around the way your organization actually works."],
  ["05", "Data & BI", "Connected data and Power BI decision systems that turn operations into a shared source of truth."],
  ["06", "Security & Architecture", "Identity, governance, performance and maintainability considered before implementation begins."],
];

const process = [
  ["01", "Understand", "Business goals, systems, users, dependencies and constraints."],
  ["02", "Architect", "Define the right technology approach before expensive implementation begins."],
  ["03", "Build", "Engineering with clear milestones, visibility and quality control."],
  ["04", "Evolve", "Support, optimization and continuous modernization after launch."],
];

const engineering = [
  [ShieldCheck, "Security-conscious engineering", "Identity, access and data protection are architectural decisions—not final checks."],
  [Network, "Integration strategy", "Systems are planned as one operating environment, with ownership and dependencies made visible."],
  [Cloud, "Scalable cloud foundations", "Infrastructure is designed to support growth, resilience and controlled change."],
  [Gauge, "Performance & maintainability", "Quality is measured by how well the system performs and how safely it can evolve."],
  [Database, "Data governance", "Clear structures, reliable flows and accountable access create decision-ready information."],
  [LockKeyhole, "Ongoing support", "Operational continuity, optimization and support extend well beyond launch day."],
];

function SplitWord({ word }: { word: string }) {
  return (
    <span className="split-word" aria-label={word}>
      <span aria-hidden="true">
        {word.split("").map((character, index) => (
          <span className="split-char" key={`${character}-${index}`}>{character}</span>
        ))}
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <MotionController />
      <Navigation />
      <main>
        <KineticHero />

        <section className="proof section-shell" aria-labelledby="proof-title">
          <div className="eyebrow-row" data-reveal>
            <span>Enterprise proof</span><span className="rule" /><span>02 / 14</span>
          </div>
          <div className="proof-heading" data-reveal>
            <h2 id="proof-title">Trusted for complex<br />technology projects.</h2>
            <p>Technology decisions carry operational risk. ExpertLinx combines platform expertise, implementation discipline and ongoing support to reduce it.</p>
          </div>
          <div className="proof-grid">
            <div className="proof-stat" data-reveal><strong>50+</strong><span>Successful projects</span></div>
            <div className="proof-stat" data-reveal><strong>15+</strong><span>Years of experience</span></div>
            <div className="proof-stat wordmark-stat" data-reveal><strong>Microsoft</strong><span>Partner organization</span></div>
          </div>
        </section>

        <section className="challenges" id="what-we-solve" aria-labelledby="challenges-title">
          <div className="section-shell section-intro">
            <div className="eyebrow-row light" data-reveal><span>Transformation challenges</span><span className="rule" /><span>03 / 14</span></div>
            <h2 id="challenges-title" data-reveal>Business problems first.<br /><span>Technology with purpose.</span></h2>
          </div>
          <div className="challenge-list">
            {challenges.map((item) => (
              <article className="challenge section-shell" key={item.number}>
                <div className="challenge-index">{item.number}</div>
                <div className="challenge-word" data-assemble><SplitWord word={item.word} /></div>
                <div className="challenge-copy" data-reveal>
                  <h3>{item.title}</h3><p>{item.body}</p>
                  <ul>{item.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities section-shell" id="capabilities" aria-labelledby="capabilities-title">
          <div className="eyebrow-row" data-reveal><span>Capabilities</span><span className="rule" /><span>04 / 14</span></div>
          <div className="section-heading-grid" data-reveal>
            <h2 id="capabilities-title">The technology behind the transformation.</h2>
            <p>Strategy, architecture and engineering across the Microsoft ecosystem—and custom technology where the platform needs to go further.</p>
          </div>
          <div className="capability-list">
            {capabilities.map(([number, title, description]) => (
              <article className="capability-row" key={number} data-reveal>
                <span>{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="featured" id="case-studies" aria-labelledby="featured-title">
          <div className="featured-grid section-shell">
            <div className="featured-visual" aria-hidden="true" data-diagram>
              <div className="system-frame frame-a"><span>FINANCE</span></div>
              <div className="system-frame frame-b"><span>INVENTORY</span></div>
              <div className="system-frame frame-c"><span>OPERATIONS</span></div>
              <div className="system-core">BC</div>
              <svg viewBox="0 0 640 640" role="presentation"><path d="M96 118H320V320H543"/><path d="M96 520H320V320H543"/><circle cx="320" cy="320" r="192"/></svg>
            </div>
            <div className="featured-copy" data-reveal>
              <div className="eyebrow-row light"><span>01 / Featured transformation</span></div>
              <h2 id="featured-title"><span>From</span> fragmented finance and inventory <span>to</span> one connected ERP.</h2>
              <p>For Inner City Health Associates in Toronto, ExpertLinx delivered a Dynamics 365 Business Central transformation focused on financial management and inventory tracking.</p>
              <dl className="project-facts">
                <div><dt>Delivery</dt><dd>16 weeks</dd></div><div><dt>Team</dt><dd>5 consultants</dd></div><div><dt>Platform</dt><dd>Business Central</dd></div>
              </dl>
              <a className="text-link light-link" href="https://expertlinx.com/case-studies">Explore the case study <ArrowUpRight size={18} /></a>
            </div>
          </div>
        </section>

        <section className="delivery section-shell" aria-labelledby="delivery-title">
          <div className="eyebrow-row" data-reveal><span>How ExpertLinx works</span><span className="rule" /><span>06 / 14</span></div>
          <div className="section-heading-grid" data-reveal>
            <h2 id="delivery-title">How we turn complexity into delivery.</h2>
            <p>A deliberate path from business context to an operating system your team can rely on.</p>
          </div>
          <div className="process-track">
            <div className="process-line" aria-hidden="true"><span /></div>
            {process.map(([number, title, description]) => (
              <article className="process-step" key={number}><span className="process-node" /><span className="process-number">{number}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </section>

        <section className="ecosystem" aria-labelledby="ecosystem-title">
          <div className="section-shell ecosystem-grid">
            <div className="ecosystem-copy" data-reveal>
              <div className="eyebrow-row light"><span>Microsoft ecosystem</span><span className="rule" /><span>07 / 14</span></div>
              <h2 id="ecosystem-title">One ecosystem.<br />Connected around your operation.</h2>
              <p>ExpertLinx brings the platform together as an operating architecture—not a list of disconnected licenses.</p>
            </div>
            <div className="orbit-system" data-orbit aria-label="Microsoft ecosystem connecting Azure, Dynamics 365, Microsoft 365, Power Platform and Power BI">
              <div className="orbit-ring orbit-ring-one" aria-hidden="true" /><div className="orbit-ring orbit-ring-two" aria-hidden="true" /><div className="orbit-core"><span>MICROSOFT</span></div>
              <span className="orbit-label label-azure">Azure</span><span className="orbit-label label-dynamics">Dynamics 365</span><span className="orbit-label label-m365">Microsoft 365</span><span className="orbit-label label-platform">Power Platform</span><span className="orbit-label label-bi">Power BI</span>
            </div>
          </div>
        </section>

        <section className="ai-section section-shell" aria-labelledby="ai-title">
          <div className="eyebrow-row" data-reveal><span>AI + automation</span><span className="rule" /><span>08 / 14</span></div>
          <div className="ai-layout">
            <div className="ai-copy" data-reveal>
              <h2 id="ai-title">AI where it creates value.</h2>
              <p>ExpertLinx applies AI and automation to real operational problems—removing friction, shortening cycle times and giving people better information at the moment of decision.</p>
              <p className="ai-note">No technology theatre. A clear business case, controlled implementation and a system your teams can govern.</p>
            </div>
            <div className="workflow" data-workflow>
              {[["01", "REQUEST", "Captured"], ["02", "INTELLIGENCE", "Interprets"], ["03", "WORKFLOW", "Routes"], ["04", "OUTCOME", "Completed"]].map(([number, title, state], index) => (
                <div className="workflow-step" key={number}><span>{number}</span><div><strong>{title}</strong><small>{state}</small></div>{index < 3 && <i aria-hidden="true" />}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="engineering" aria-labelledby="engineering-title">
          <div className="section-shell">
            <div className="eyebrow-row light" data-reveal><span>Enterprise engineering</span><span className="rule" /><span>09 / 14</span></div>
            <div className="section-heading-grid engineering-heading" data-reveal>
              <h2 id="engineering-title">Built for what happens after launch.</h2>
              <p>The first release is only the beginning. We design for the operating reality that follows: adoption, resilience, governance, change and support.</p>
            </div>
            <div className="engineering-list">
              {engineering.map(([Icon, title, description]) => {
                const EngineeringIcon = Icon as typeof ShieldCheck;
                return <article key={title as string} data-reveal><EngineeringIcon size={23} strokeWidth={1.5} /><h3>{title as string}</h3><p>{description as string}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section className="work section-shell" id="work" aria-labelledby="work-title">
          <div className="eyebrow-row" data-reveal><span>Selected work</span><span className="rule" /><span>10 / 14</span></div>
          <h2 id="work-title" data-reveal>Transformation, measured in operations.</h2>
          <article className="work-story" data-reveal>
            <div className="work-meta"><span>02 / Architecture & design</span><span>Dynamics 365 Business Central</span></div>
            <h3><span>From</span> multiple legacy systems<br /><span>to</span> one connected operation.</h3>
            <div className="work-detail"><p>Diamond Architectural Openings consolidated disconnected systems into a unified platform for improved collaboration, project management and finance.</p><dl><div><dt>Delivery</dt><dd>22 weeks</dd></div><div><dt>Team</dt><dd>6 consultants</dd></div></dl></div>
          </article>
          <article className="work-story" data-reveal>
            <div className="work-meta"><span>03 / Customer services</span><span>Dynamics 365 Sales + Customer Service</span></div>
            <h3><span>From</span> manual customer practices<br /><span>to</span> one responsive CRM.</h3>
            <div className="work-detail"><p>Nomad Nexus centralized customer information and automated sales follow-up with Dynamics 365.</p><dl><div><dt>Published impact</dt><dd>75% engagement improvement</dd></div></dl></div>
          </article>
          <a className="text-link" href="https://expertlinx.com/case-studies">View all case studies <ArrowUpRight size={18} /></a>
        </section>

        <section className="insights section-shell" id="insights" aria-labelledby="insights-title">
          <div className="eyebrow-row" data-reveal><span>Insights</span><span className="rule" /><span>11 / 14</span></div>
          <div className="section-heading-grid" data-reveal><h2 id="insights-title">Insights for technology leaders.</h2><p>Practical thinking for leaders planning modernization, adoption and controlled change.</p></div>
          <div className="insight-list">
            {[
              ["Cloud", "Azure Cloud Migration: A Complete Enterprise Guide", "12 min read"],
              ["ERP", "Dynamics 365 Business Central: Complete Implementation Guide", "14 min read"],
              ["Automation", "Power Automate Mastery: Business Process Automations That Deliver ROI", "15 min read"],
              ["Security", "Microsoft 365 Security: Enterprise Cybersecurity Best Practices", "16 min read"],
            ].map(([category, title, time], index) => (
              <a className="insight-row" href="https://expertlinx.com/blog" key={title} data-reveal><span>{String(index + 1).padStart(2, "0")}</span><small>{category}</small><h3>{title}</h3><em>{time}</em><ArrowUpRight size={20} /></a>
            ))}
          </div>
        </section>

        <section className="executive-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta-grid section-shell">
            <div className="eyebrow-row light" data-reveal><span>Start a conversation</span><span className="rule" /><span>12 / 14</span></div>
            <h2 id="cta-title" data-reveal>Have a complex<br />technology challenge?</h2>
            <div className="cta-copy" data-reveal><p>Tell us what isn&apos;t working, what you&apos;re trying to change, or what you need to build. We&apos;ll help determine the right path forward.</p><a className="button button-light" href="https://expertlinx.com/contact">Discuss your project <ArrowUpRight size={18} /></a></div>
            <div className="cta-contact"><a href="mailto:sales@expertlinx.com">sales@expertlinx.com</a><a href="tel:+12892050570">+1 (289) 205 0570</a></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-shell footer-grid">
          <div className="footer-brand"><a href="#top" className="brand brand-light" aria-label="ExpertLinx home"><span>EXPERT</span><b>LINX</b></a><p>Technology transformation through Microsoft, cloud, AI and custom enterprise software.</p></div>
          <div><h2>What we solve</h2><a href="#what-we-solve">Modernization</a><a href="#what-we-solve">Automation</a><a href="#what-we-solve">Integration</a><a href="#capabilities">Custom technology</a></div>
          <div><h2>Capabilities</h2><a href="#capabilities">Microsoft</a><a href="#capabilities">Cloud</a><a href="#capabilities">AI</a><a href="#capabilities">Data</a></div>
          <div><h2>Company</h2><a href="https://expertlinx.com/about">About</a><a href="#case-studies">Case studies</a><a href="#insights">Insights</a><a href="#contact">Contact</a></div>
          <div className="footer-bottom"><span>© 2026 ExpertLinx</span><span>Toronto, Ontario, Canada</span><span>Microsoft Partner Organization</span></div>
        </div>
      </footer>
    </>
  );
}
