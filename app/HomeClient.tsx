"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import { CAPABILITIES, capabilityHref } from "@/lib/capabilities";
import { INDUSTRIES } from "@/lib/industries";
import { WORK_ITEMS } from "@/lib/work";
import "./home.css";

/* ── shared arrow ── */
function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ── capability icons keyed by slug (data stays in lib/capabilities.ts) ── */
const CAP_ICONS: Record<string, ReactNode> = {
  "private-ai": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" /></svg>
  ),
  "enterprise-ai": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="7" height="7" rx="1" /><rect x="14" y="4" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="6" rx="1" /><rect x="14" y="14" width="7" height="6" rx="1" /></svg>
  ),
  "ai-agents": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg>
  ),
  "ai-infrastructure": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="12" rx="1" /><path d="M8 21h8M12 15v6" /></svg>
  ),
  "software-engineering": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="14" rx="1" /><path d="M8 9l-2 2 2 2M16 9l2 2-2 2M13 8l-2 6" /></svg>
  ),
  "ai-strategy-governance": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 20l6-6 4 3 8-9" /><path d="M15 8h6v6" /></svg>
  ),
  "edge-ai": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="12" cy="12" r="3" /></svg>
  ),
};

/* ── industry taglines + background asset keyed by slug ── */
const INDUSTRY_META: Record<string, { tagline: string; ig: string }> = {
  "industrial-energy": { tagline: "Safer operations. Smarter decisions.", ig: "ig1" },
  "retail-hospitality": { tagline: "Better experiences. Higher efficiency.", ig: "ig2" },
  enterprise: { tagline: "Intelligence across your business.", ig: "ig3" },
  technology: { tagline: "AI infrastructure for what's next.", ig: "ig4" },
};

/* ── featured-work carousel slides (photos paired with lib/work.ts data) ── */
const WORK_MEDIA = [
  { dark: "/images/section-5-dark.png", light: "/images/section-5-light.png" },
  { dark: "/images/section-4-dark-asset-4.png", light: "/images/section-4-light-asset-4.png" },
  { dark: "/images/section-4-dark-asset-3.png", light: "/images/section-4-light-asset-3.png" },
];

/* ── static "Design / Deploy / Operate" step copy ── */
const STEPS = [
  { n: "01", label: "Design", body: "Define the right solution for your business." },
  { n: "02", label: "Deploy", body: "Run on your infrastructure. Your rules." },
  { n: "03", label: "Operate", body: "Monitor, evaluate and continuously improve." },
];

const LAB_ROWS = [
  { n: "01", title: "Small Language Models", body: "Domain-specific intelligence." },
  { n: "02", title: "Agent Infrastructure", body: "Systems that work together." },
  { n: "03", title: "Enterprise AI Research", body: "From research to real-world use." },
  { n: "04", title: "Open Innovation", body: "Collaborate. Build. Ship." },
];

const CUBE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" /></svg>
);
const CLOCK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
const STEP_ICONS = [CUBE_ICON, CUBE_ICON, CLOCK_ICON];

export default function HomeClient() {
  /* current theme mirrored from <html data-theme>, so photos swap on toggle */
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const read = () =>
      setTheme(
        document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"
      );
    read();
    const mo = new MutationObserver(read);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);

  /* scroll-reveal + progress bar */
  useEffect(() => {
    const bar = document.getElementById("cf-progress");
    const onScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (h > 0 ? Math.min((st / h) * 100, 100) : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const els = document.querySelectorAll(".cf-home .reveal, .cf-home .stagger");
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io!.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((el) => io!.observe(el));
    } else {
      els.forEach((el) => el.classList.add("in"));
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  /* featured-work carousel */
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((n: number) => {
    const next = (n + WORK_ITEMS.length) % WORK_ITEMS.length;
    setFade(true);
    setTimeout(() => {
      setIdx(next);
      setFade(false);
    }, 220);
  }, []);

  useEffect(() => {
    timer.current = setInterval(() => go(idx + 1), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [idx, go]);

  const work = WORK_ITEMS[idx];
  const media = WORK_MEDIA[idx] ?? WORK_MEDIA[0];
  const caseImg = theme === "light" ? media.light : media.dark;

  return (
    <div className="cf-home">
      <div id="cf-progress" />

      {/* ───────────── HERO (01) ───────────── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="wrap hero-content">
          <div className="hero-inner">
            <div className="snum hero-anim d1" style={{ marginBottom: 0 }}>01</div>
            <div className="crumbs hero-anim d1">
              PRIVATE LLMS <span>/</span> ON-PREMISE AI <span>/</span> EDGE AI
            </div>
            <h1 className="hero-anim d2">
              Engineering<br />intelligent systems<br />
              <span className="accent">for the real world.</span>
            </h1>
            <p className="hero-sub hero-anim d3">
              Coreframe Technologies designs, deploys and operates private LLMs,
              on-premise AI and edge AI systems inside enterprise environments.
            </p>
            <div className="hero-cta hero-anim d4">
              <Link href="/contact" className="btn btn-primary">
                Discuss a Project
                <Arrow />
              </Link>
              <Link href="/work" className="btn btn-ghost">
                Explore Our Work
              </Link>
            </div>
            <div className="deploy hero-anim d5">
              <div className="lbl">DEPLOY ANYWHERE</div>
              <div className="row">
                ON-PREMISE<span>/</span>PRIVATE CLOUD<span>/</span>HYBRID<span>/</span>EDGE
              </div>
            </div>
          </div>
        </div>
        <div className="hero-txt">
          YOUR DATA.<br />YOUR INFRASTRUCTURE.<br />YOUR INTELLIGENCE.<br />—
        </div>
        <div className="trusted">TRUSTED BY TEAMS BUILDING WHAT&apos;S NEXT</div>
      </section>

      <div className="divider" />

      {/* ───────────── APPROACH (02) ───────────── */}
      <section id="company" className="sec-bg2">
        <div className="wrap">
          <div className="snum">02</div>
          <div className="approach-top reveal">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>OUR APPROACH</div>
              <h2>Design.<br />Deploy.<br />Operate.</h2>
            </div>
            <div>
              <p className="approach-copy">
                From strategy to production, we partner with you across the entire AI
                engineering lifecycle.
              </p>
              <Link href="/capabilities" className="link">
                Learn how we work
                <Arrow />
              </Link>
              <div className="steps stagger">
                {STEPS.map((s, i) => (
                  <div className="step" key={s.n}>
                    <div className="n">{s.n}</div>
                    <div className="ico">{STEP_ICONS[i]}</div>
                    <h4>{s.label}</h4>
                    <p>{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ───────────── CAPABILITIES (03) ───────────── */}
      <section id="capabilities" className="sec-bg3">
        <div className="cap-side">SYSTEMS&nbsp;FOR&nbsp;A&nbsp;MORE&nbsp;CAPABLE&nbsp;TOMORROW</div>
        <div className="wrap">
          <div className="snum">03</div>
          <div className="cap-layout">
            <div className="cap-info reveal">
              <div className="eyebrow" style={{ marginBottom: 20 }}>CAPABILITIES</div>
              <h2>
                <span>Real expertise.</span>
                <span>Real systems.</span>
                <span>Real outcomes.</span>
              </h2>
              <p className="cap-desc">End-to-end AI engineering for high-stakes environments.</p>
              <Link href="/capabilities" className="link">
                Explore all capabilities
                <Arrow />
              </Link>
              <div className="cap-foot">
                BUILD<span>/</span>DEPLOY<span>/</span>OPERATE
              </div>
            </div>
            <div className="cap-cards stagger">
              {CAPABILITIES.map((c, i) => (
                <Link href={capabilityHref(c)} className="capc" key={c.slug}>
                  <div className="capc-n">{String(i + 1).padStart(2, "0")}</div>
                  <div className="capc-ic">{CAP_ICONS[c.slug]}</div>
                  <h4>{c.short}</h4>
                  <p>{c.oneLiner}</p>
                  <span className="capc-arr"><Arrow /></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ───────────── INDUSTRIES (04) ───────────── */}
      <section id="industries" className="sec-bg4">
        <div className="wrap">
          <div className="snum">04</div>
          <div className="ind-head reveal">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>INDUSTRIES</div>
              <h2>Built for<br />what&apos;s next.</h2>
              <p className="cap-desc" style={{ marginTop: 24 }}>
                Domain expertise.<br />Real-world impact.
              </p>
              <Link href="/industries" className="link">
                Explore industries
                <Arrow />
              </Link>
            </div>
            <div className="ind-grid stagger">
              {INDUSTRIES.map((ind, i) => {
                const meta = INDUSTRY_META[ind.slug];
                return (
                  <Link href="/industries" className="ind-card" key={ind.slug}>
                    <div className={`ind-bg ${meta?.ig ?? "ig1"}`} />
                    <span className="ind-num">{String(i + 1).padStart(2, "0")}</span>
                    <div className="ind-body">
                      <h4>{ind.short}</h4>
                      <p>{meta?.tagline}</p>
                      <span className="arr"><Arrow /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="sec-foot">
          <div className="wrap">
            <div className="sf-l">PEOPLE<span>/</span>INDUSTRIES<span>/</span>IMPACT</div>
            <div className="sf-r">REAL INDUSTRIES. REAL PROGRESS.</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ───────────── FEATURED WORK (05) ───────────── */}
      <section id="work" className="sec-bg5">
        <div className="work-side">REAL&nbsp;SOLUTIONS&nbsp;FOR&nbsp;A&nbsp;MORE&nbsp;CAPABLE&nbsp;TOMORROW</div>
        <div className="wrap">
          <div className="snum">05</div>
          <div className="work reveal">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>FEATURED WORK</div>
              <h2>From complexity<br />to clarity.</h2>
              <p className="cap-desc" style={{ marginTop: 22 }}>
                Real-world systems.<br />Real impact.
              </p>
              <Link href="/work" className="link">
                View all work
                <Arrow />
              </Link>
              <div className="cap-foot" style={{ marginTop: 44 }}>
                STRATEGY<span>/</span>ENGINEERING<span>/</span>DEPLOYMENT
              </div>
            </div>
            <div className="case">
              <div className="case-media">
                <div
                  className="case-bg"
                  style={{ backgroundImage: `url('${caseImg}')`, opacity: fade ? 0 : 1 }}
                />
                <div className="case-idx">
                  {String(idx + 1).padStart(2, "0")} / {String(WORK_ITEMS.length).padStart(2, "0")}
                </div>
                <div className="case-copy" style={{ opacity: fade ? 0.15 : 1 }}>
                  <h3>{work.category}</h3>
                  <p>{work.challenge}</p>
                  <div className="chips">
                    {work.tags.map((t) => (
                      <span className="chip" key={t}>{t.toUpperCase()}</span>
                    ))}
                  </div>
                  <Link href="/work" className="link" style={{ marginTop: 0 }}>
                    Read the case study
                    <Arrow />
                  </Link>
                </div>
                <div className="case-dots">
                  {WORK_ITEMS.map((_, x) => (
                    <i
                      key={x}
                      className={x === idx ? "on" : ""}
                      onClick={() => go(x)}
                    />
                  ))}
                </div>
                <div className="case-nav">
                  <div className="rnd" onClick={() => go(idx - 1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
                  </div>
                  <div className="rnd" onClick={() => go(idx + 1)}>
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ───────────── LABS (06) ───────────── */}
      <section id="labs" className="labs">
        <div className="labs-bg" />
        <div className="wrap labs-inner reveal">
          <div className="labs-lead">
            <div className="snum">06</div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>COREFRAME LABS</div>
            <h2>Applied research<br />that ships.</h2>
            <p className="cap-desc" style={{ marginTop: 22, maxWidth: 340 }}>
              Exploring what&apos;s next in AI, from SLMs to agent infrastructure.
            </p>
            <Link href="/labs" className="btn btn-primary" style={{ marginTop: 34 }}>
              Explore Labs
              <Arrow />
            </Link>
          </div>
          <div className="labs-mid">
            IDEAS<br />MODELS<br />SYSTEMS<br />REAL IMPACT.<br />
            <span className="labs-dash">—</span>
          </div>
          <div className="labs-list stagger">
            {LAB_ROWS.map((r) => (
              <Link href="/labs" className="labs-row" key={r.n}>
                <span className="lr-n">{r.n}</span>
                <div className="lr-body">
                  <h4>{r.title}</h4>
                  <p>{r.body}</p>
                </div>
                <span className="lr-arr"><Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
        <div className="sec-foot">
          <div className="wrap">
            <div className="sf-l">RESEARCH<span>/</span>INNOVATION<span>/</span>OPEN SOURCE</div>
            <div className="sf-r">A MORE CAPABLE TOMORROW</div>
          </div>
        </div>
      </section>

      {/* ───────────── CTA (07) ───────────── */}
      <section id="contact" className="cta">
        <div className="cta-bg" />
        <div className="wrap cta-inner reveal">
          <div>
            <div className="snum" style={{ marginBottom: 22 }}>07</div>
            <div className="eyebrow" style={{ marginBottom: 20, color: "var(--muted)" }}>
              LET&apos;S BUILD TOGETHER
            </div>
            <h2>
              Let&apos;s discuss what<br />you&apos;re trying to <span className="accent">build.</span>
            </h2>
            <p>
              Tell us about your data, your constraints and your environment. We&apos;ll tell
              you what&apos;s realistic.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Discuss a Project
              <Arrow />
            </Link>
          </div>
          <div className="cta-side">REAL<br />SYSTEMS<br />REAL<br />PROGRESS<br />—</div>
        </div>
      </section>
    </div>
  );
}
