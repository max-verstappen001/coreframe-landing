"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "./Container";

interface MetaHeaderProps {
  /** the giant page wordmark, e.g. "Portfolio" */
  word: string;
  /** the page-specific meta column (up to 3 short lines) */
  tagline: string[];
  /** accessible page title (defaults to `word`) */
  srTitle?: string;
}

/**
 * 360Labs-style subpage header: a giant wordmark pinned to the bottom that
 * parallaxes up on scroll, with a four-column monospace meta row above it.
 */
export function MetaHeader({ word, tagline, srTitle }: MetaHeaderProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const wordY = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const metaOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const metaY = useTransform(scrollYProgress, [0, 0.5], [0, -24]);

  const META: string[][] = [
    ["You are", "now", "viewing"],
    ["Scroll", "to", "explore"],
    tagline,
    ["© 2026", "CoreFrame", "Technologies"],
  ];

  return (
    <section
      ref={ref}
      className="relative h-[78svh] min-h-[520px] overflow-hidden bg-radial-fade"
    >
      <motion.div
        style={{ opacity: metaOpacity, y: metaY }}
        className="absolute inset-x-0 bottom-[32%] md:bottom-[36%]"
      >
        <Container size="wide">
          <div className="flex flex-wrap justify-start md:justify-end gap-x-10 gap-y-6">
            {META.map((block, i) => (
              <div
                key={i}
                className="font-mono text-[11px] leading-[1.7] uppercase tracking-[0.08em] text-subtle"
              >
                {block.map((line, j) => (
                  <div key={j}>{line}</div>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </motion.div>

      <motion.div
        style={{ y: wordY }}
        className="absolute inset-x-0 bottom-0 flex justify-center"
        aria-hidden
      >
        <span className="block whitespace-nowrap font-display font-bold text-foreground leading-[0.78] tracking-[-0.045em] text-[26vw] md:text-[24vw]">
          {word}
        </span>
      </motion.div>

      <h1 className="sr-only">{srTitle ?? word}</h1>
    </section>
  );
}
