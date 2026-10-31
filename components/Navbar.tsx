"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CoreframeWordmark } from "./CoreframeWordmark";
import { CAPABILITIES, capabilityHref } from "@/lib/capabilities";
import { SERVICES } from "@/lib/service-catalog";
import { contactHref } from "@/lib/region";
import { INDUSTRIES } from "@/lib/industries";

interface NavItem {
  label: string;
  href: string;
  menu?: { label: string; href: string; description: string }[];
  menuHref?: string;
}

const NAV_LINKS: NavItem[] = [
  { label: "Services", href: "/services", menu: SERVICES.map(s => ({ label: s.short, href: `/services/${s.slug}`, description: s.summary })) },
  {
    label: "Capabilities",
    href: "/capabilities",
    menuHref: "/capabilities",
    menu: CAPABILITIES.map((c) => ({
      label: c.short,
      href: capabilityHref(c),
      description: c.oneLiner,
    })),
  },
  {
    label: "Industries",
    href: "/industries",
    menuHref: "/industries",
    menu: INDUSTRIES.map((i) => ({
      label: i.short,
      href: `/industries/${i.slug}`,
      description: i.description,
    })),
  },
  { label: "Coreframe Labs", href: "/labs" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/company" },
];

const MOBILE_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Coreframe Labs", href: "/labs" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

/* Bracketed monospace logo — [ ⬡ Coreframe ] */
function BrandMark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex items-center gap-1.5 font-mono font-bold text-[15px] tracking-tight"
    >
      <span className="text-subtle transition-colors duration-300 group-hover:text-accent">
        [
      </span>
      <img
        src="/logos/coreframe-mark.png"
        alt=""
        width={18}
        height={18}
        className="h-[18px] w-[18px] object-contain transition-transform duration-500 ease-out-expo group-hover:rotate-[30deg]"
      />
      <CoreframeWordmark height={13} />
      <span className="text-subtle transition-colors duration-300 group-hover:text-accent">
        ]
      </span>
    </Link>
  );
}

function NavDropdown({
  item,
  isActive,
}: {
  item: NavItem;
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trigger = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const panelId = `nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => () => { if (timeout.current) clearTimeout(timeout.current); }, []);

  const show = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const hide = () => {
    timeout.current = setTimeout(() => setOpen(false), 120);
  };

  if (!item.menu) {
    return (
      <Link
        href={item.href}
        className={`relative font-mono text-[12.5px] uppercase tracking-[0.12em] transition-colors duration-300 ${
          isActive ? "text-foreground" : "text-muted hover:text-foreground"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false); }} onKeyDown={(event) => { if (event.key === "Escape") { trigger.current?.focus(); setOpen(false); } }}>
      <Link
        ref={trigger}
        href={item.menuHref ?? item.href}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        className={`relative flex items-center gap-1 font-mono text-[12.5px] uppercase tracking-[0.12em] transition-colors duration-300 ${
          isActive ? "text-foreground" : "text-muted hover:text-foreground"
        }`}
      >
        {item.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full -translate-x-1/2 pt-4 w-[360px] max-h-[75vh] overflow-y-auto"
          >
            <div className="rounded-xl border border-border bg-bg-elevated shadow-card p-2">
              {item.menu.map((entry) => (
                <Link
                  key={entry.label}
                  href={entry.href}
                  className="block rounded-lg px-3 py-2.5 hover:bg-surface transition-colors duration-200"
                >
                  <span className="block font-display text-[13px] text-foreground">
                    {entry.label}
                  </span>
                  <span className="block font-sans text-[12px] text-muted leading-snug mt-0.5">
                    {entry.description}
                  </span>
                </Link>
              ))}
              <Link
                href={item.menuHref ?? item.href}
                className="block rounded-lg px-3 py-2.5 mt-1 border-t border-border font-mono text-[11px] uppercase tracking-[0.1em] text-accent hover:text-foreground transition-colors duration-200"
              >
                View all {item.label.toLowerCase()} →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);
  const mobilePanel = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    if (current === "light" || current === "dark") {
      setTheme(current);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    mobilePanel.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); return; }
      if (event.key !== "Tab") return;
      const controls = [menuButton.current, ...Array.from(mobilePanel.current?.querySelectorAll<HTMLElement>("a, button") || [])].filter((item): item is HTMLElement => Boolean(item));
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); menuButton.current?.focus(); };
  }, [open]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("coreframe-theme", next); } catch { /* Theme still works when storage is blocked. */ }
  };

  return (
    <>
      <motion.div
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 pt-3 md:pt-5"
      >
        <nav
          className={`mx-auto flex max-w-[1400px] items-center justify-between gap-4 rounded-2xl border px-4 md:px-6 h-16 transition-all duration-500 ${
            scrolled
              ? "glass border-border shadow-soft"
              : "border-border/70 bg-glass/60 backdrop-blur-sm"
          }`}
          style={{ background: scrolled ? undefined : "var(--color-glass)" }}
        >
          <BrandMark />

          {/* Center nav */}
          <ul className="hidden xl:flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavDropdown item={link} isActive={isActive(link.href)} />
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="hidden xl:flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted hover:text-foreground hover:border-border-hover transition-colors duration-300"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {mounted && theme === "dark" ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a7.5 7.5 0 0 0 9 9A9 9 0 1 1 12 3z" />
                </svg>
              )}
            </button>
            <Link
              href={contactHref("discovery", "navigation")}
              className="inline-flex items-center rounded-lg border border-foreground/85 bg-foreground px-4 h-9 font-mono text-[12.5px] uppercase tracking-[0.1em] text-bg hover:bg-accent hover:border-accent hover:text-on-accent transition-colors duration-300"
            >
              Book discovery
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={menuButton}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="xl:hidden relative z-50 w-11 h-11 flex items-center justify-center -mr-2.5"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={open ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-full h-[1.5px] bg-foreground origin-center"
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-full h-[1.5px] bg-foreground"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-full h-[1.5px] bg-foreground origin-center"
              />
            </div>
          </button>
        </nav>
      </motion.div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            ref={mobilePanel}
            id="mobile-navigation"
            className="fixed inset-0 z-40 bg-bg flex flex-col justify-start px-6 overflow-y-auto py-24"
          >
            <nav className="flex flex-col gap-2 max-w-[1400px] mx-auto w-full">
              {MOBILE_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3.5 font-display text-3xl transition-colors duration-300 border-b border-border ${
                      isActive(link.href) ? "text-accent" : "text-foreground hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 max-w-[1400px] mx-auto w-full"
            >
              <button
                onClick={toggleTheme}
                className="mb-6 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-muted hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <span className="text-accent">{theme === "dark" ? "Light" : "Dark"}</span>
                mode
              </button>
              <p className="font-sans text-sm text-muted">Get in touch</p>
              <a
                href="mailto:info@coreframetech.in"
                className="font-mono text-lg text-accent mt-1 block"
              >
                info@coreframetech.in
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
