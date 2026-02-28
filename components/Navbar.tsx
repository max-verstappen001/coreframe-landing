"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { Magnetic } from "@/lib/animations";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/case-studies" },
  { label: "Process", href: "/#engagement" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-border"
            : "bg-transparent"
        }`}
      >
        <Container className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative group">
            <span className="font-display text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
              CoreFrame
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-500 ease-out-expo group-hover:w-full" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Magnetic strength={0.15}>
                  <Link
                    href={link.href}
                    className="relative px-5 py-2.5 font-display text-sm text-muted hover:text-foreground transition-colors duration-300 group"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-5 right-5 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out-expo origin-left" />
                  </Link>
                </Magnetic>
              </li>
            ))}
            <li className="ml-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border-hover font-display text-sm text-foreground hover:border-accent hover:text-accent transition-all duration-500 ease-out-expo"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Let&apos;s Talk
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
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
        </Container>
      </motion.nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col justify-center"
          >
            <Container>
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 font-heading text-4xl text-foreground hover:text-accent transition-colors duration-300 border-b border-border"
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
                className="mt-12"
              >
                <p className="font-sans text-sm text-muted">Get in touch</p>
                <a
                  href="mailto:info@coreframetech.in"
                  className="font-display text-lg text-accent mt-1 block"
                >
                  info@coreframetech.in
                </a>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
