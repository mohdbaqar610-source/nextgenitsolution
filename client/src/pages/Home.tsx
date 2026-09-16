import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";

type IconName =
  | "arrow"
  | "shield"
  | "lock"
  | "backup"
  | "grid"
  | "pulse"
  | "check"
  | "menu"
  | "close"
  | "phone"
  | "mail"
  | "pin"
  | "spark";

const PHONE = "+19251588467";
const DISPLAY_PHONE = "+1 (925) 158-8467";
const EMAIL = "Cyber558278@gmail.com";
const ADDRESS = "160 Atherton DR, Exton PA 19341";

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  shield: <><path d="M12 3 20 7v5c0 4.8-3.4 8.3-8 9-4.6-.7-8-4.2-8-9V7l8-4Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
  lock: <><rect width="14" height="11" x="5" y="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v3" /></>,
  backup: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
  grid: <><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /></>,
  pulse: <><path d="M3 12h4l2-7 4 14 2-7h6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
  close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  spark: <><path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3Z" /><path d="m19 16-.6 2.4L16 19l2.4.6L19 22l.6-2.4L22 19l-2.4-.6L19 16Z" /></>,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

const solutions = [
  {
    number: "01",
    icon: "shield" as IconName,
    eyebrow: "Protect",
    title: "Cybersecurity that stays ahead.",
    copy: "Build a calm, controlled security posture across people, devices, identities, and data—without slowing down the work that matters.",
    items: ["Threat detection & response", "Identity and access control", "Firewall, endpoint & email defense"],
    accent: "cyan",
  },
  {
    number: "02",
    icon: "backup" as IconName,
    eyebrow: "Recover",
    title: "Your next day starts today.",
    copy: "Resilient backup and recovery plans turn disruption into a manageable moment. Keep critical operations moving, whatever happens.",
    items: ["Automated cloud & server backup", "Disaster recovery planning", "Business continuity playbooks"],
    accent: "lime",
  },
  {
    number: "03",
    icon: "grid" as IconName,
    eyebrow: "Connect",
    title: "Infrastructure built for momentum.",
    copy: "Create a stable, scalable foundation with systems that work together—from networks and servers to collaboration and cloud tools.",
    items: ["Network & systems architecture", "Cloud and hybrid infrastructure", "High availability & performance"],
    accent: "violet",
  },
  {
    number: "04",
    icon: "pulse" as IconName,
    eyebrow: "Support",
    title: "A smarter team on standby.",
    copy: "Practical guidance and responsive support, delivered with the context to solve the root cause—not just close the ticket.",
    items: ["Managed IT support", "Implementation & migration", "Consulting and team training"],
    accent: "orange",
  },
];

const signals = ["SECURITY", "BACKUP", "INFRASTRUCTURE", "SUPPORT"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.86) element.classList.add("is-visible");
      });
    };
    reveal();
    window.addEventListener("scroll", reveal, { passive: true });
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`New CyberShield enquiry from ${form.get("name") || "website visitor"}`);
    const body = encodeURIComponent(`Name: ${form.get("name") || ""}\nEmail: ${form.get("email") || ""}\nMessage: ${form.get("message") || ""}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="page-shell">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span><span className="status-dot" /> Systems that make work feel safer.</span>
          <a href={`tel:${PHONE}`}><Icon name="phone" size={14} /> {DISPLAY_PHONE}</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="CyberShield home">
            <span className="brand-mark"><span /><span /><span /></span>
            <span>CYBER<span className="brand-accent">SHIELD</span></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            <Icon name={menuOpen ? "close" : "menu"} size={23} />
          </button>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
            <a href="#solutions" onClick={closeMenu}>Solutions</a>
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-call" href={`tel:${PHONE}`} onClick={closeMenu}><Icon name="phone" size={16} /> Talk to an expert</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-layout">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow"><span className="eyebrow-line" /> Technology, with intent</div>
              <h1>Make your<br /><em>next move</em><br />secure.</h1>
              <p className="hero-intro">CyberShield helps growing teams protect what they’ve built, recover what matters, and move forward with confidence.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#solutions">Explore solutions <Icon name="arrow" size={18} /></a>
                <a className="text-link" href={`tel:${PHONE}`}><span className="round-icon"><Icon name="phone" size={15} /></span> Call our team</a>
              </div>
              <div className="hero-proof"><span className="proof-line" /> <span>Security-first. Human-led. Ready when you are.</span></div>
            </div>
            <div className="hero-visual" data-reveal>
              <div className="orbital orbital-one" /><div className="orbital orbital-two" /><div className="orbital orbital-three" />
              <div className="core-orb"><div className="core-inner"><Icon name="shield" size={44} /></div></div>
              <div className="orbit-label label-top"><span className="label-pulse" /> LIVE MONITORING</div>
              <div className="orbit-label label-right"><span className="mini-check"><Icon name="check" size={12} /></span> always on</div>
              <div className="orbit-label label-bottom">01 / 04 <span>PROTECTION LAYER</span></div>
              <div className="signal-card"><div className="signal-card-top"><span>SECURITY INDEX</span><span className="signal-value">98.4</span></div><div className="signal-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="signal-card-bottom"><span>+12.8% this quarter</span><Icon name="arrow" size={15} /></div></div>
            </div>
          </div>
          <div className="container hero-bottom"><span>Trusted systems for a changing world</span><span className="hero-bottom-line" /><span>EST. FOR WHAT’S NEXT</span></div>
        </section>

        <section className="ticker-section" aria-label="Our capabilities">
          <div className="ticker-track">{[...signals, ...signals].map((signal, index) => <span key={`${signal}-${index}`}><i /> {signal}</span>)}</div>
        </section>

        <section className="intro-section section-pad" id="approach">
          <div className="container intro-layout">
            <div className="section-kicker" data-reveal><span>01</span><span className="kicker-rule" /><span>THE WHY</span></div>
            <div className="intro-copy" data-reveal>
              <h2>Technology shouldn’t be<br /><span>another thing to worry about.</span></h2>
              <p>We look at the full picture—your people, your systems, your pressure points—and make it work better together. No noise. No jargon for jargon’s sake. Just clear thinking, capable technology, and a partner who’s already looking around the corner.</p>
              <a href="#contact" className="underlined-link">See how we can help <Icon name="arrow" size={16} /></a>
            </div>
            <div className="intro-stat" data-reveal><strong>24<span>/7</span></strong><small>Peace of mind<br />included.</small><div className="stat-orbit" /></div>
          </div>
        </section>

        <section className="solutions-section section-pad" id="solutions">
          <div className="container">
            <div className="section-heading" data-reveal><div><div className="section-kicker"><span>02</span><span className="kicker-rule" /><span>WHAT WE DO</span></div><h2>Four ways to feel<br /><em>more ready.</em></h2></div><p>From the first conversation to the everyday details, we build a technology environment that keeps your business moving.</p></div>
            <div className="solution-grid">
              {solutions.map((solution) => <article className={`solution-card card-${solution.accent}`} key={solution.number} data-reveal>
                <div className="card-top"><span className="card-number">{solution.number}</span><span className="card-icon"><Icon name={solution.icon} size={24} /></span></div>
                <div className="card-eyebrow">{solution.eyebrow}</div>
                <h3>{solution.title}</h3>
                <p>{solution.copy}</p>
                <ul>{solution.items.map((item) => <li key={item}><Icon name="check" size={15} /> {item}</li>)}</ul>
                <a href="#contact" className="card-link">Talk about this <Icon name="arrow" size={16} /></a>
              </article>)}
            </div>
          </div>
        </section>

        <section className="principles-section section-pad">
          <div className="container principles-layout">
            <div className="principles-title" data-reveal><div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>HOW WE WORK</span></div><h2>The steady hand<br /><em>behind the scenes.</em></h2></div>
            <div className="principles-list">
              {["Clarity over complexity.", "Proactive over reactive.", "People-first, always."].map((item, index) => <div className="principle" data-reveal key={item}><span className="principle-index">0{index + 1}</span><h3>{item}</h3><span className="principle-arrow"><Icon name="arrow" size={17} /></span></div>)}
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="container contact-layout">
            <div className="contact-intro" data-reveal><div className="section-kicker light"><span>04</span><span className="kicker-rule" /><span>LET’S TALK</span></div><h2>Ready for a<br /><em>clearer path?</em></h2><p>Tell us where you are, where you want to go, and what’s getting in the way. We’ll bring the right questions.</p><a className="contact-phone" href={`tel:${PHONE}`}><span className="round-icon"><Icon name="phone" size={17} /></span><span><small>Prefer to talk?</small>{DISPLAY_PHONE}</span></a></div>
            <form className="contact-form" onSubmit={handleSubmit} data-reveal><div className="form-heading"><span>Start a conversation</span><Icon name="spark" size={20} /></div><label><span>Your name</span><input name="name" type="text" placeholder="Jane Smith" required /></label><label><span>Email address</span><input name="email" type="email" placeholder="jane@company.com" required /></label><label><span>How can we help?</span><textarea name="message" rows={3} placeholder="A little about what you’re looking for..." required /></label><button className="button button-bright" type="submit">Send enquiry <Icon name="arrow" size={18} /></button>{submitted && <p className="form-note">Your email app is opening with the enquiry details.</p>}</form>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark"><span /><span /><span /></span><span>CYBER<span className="brand-accent">SHIELD</span></span></a><p>Modern IT solutions for<br />people building what’s next.</p></div><div className="footer-column"><span className="footer-label">Explore</span><a href="#solutions">Solutions</a><a href="#approach">Our approach</a><a href="#contact">Contact</a></div><div className="footer-column"><span className="footer-label">Reach us</span><a href={`tel:${PHONE}`}><Icon name="phone" size={15} /> {DISPLAY_PHONE}</a><a href={`mailto:${EMAIL}`}><Icon name="mail" size={15} /> {EMAIL}</a><a href="https://www.google.com/maps/search/?api=1&query=160+Atherton+DR+Exton+PA+19341" target="_blank" rel="noreferrer"><Icon name="pin" size={15} /> {ADDRESS}</a></div></div><div className="container footer-bottom"><span>© 2026 CyberShield Solutions</span><span>Built for safer momentum.</span></div></footer>
      <a className="floating-call" href={`tel:${PHONE}`} aria-label="Call CyberShield"><Icon name="phone" size={19} /></a>
    </div>
  );
}
