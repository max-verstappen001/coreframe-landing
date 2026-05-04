"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export interface AccordionItem {
  question: string;
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: number | null;
}

export function Accordion({
  items,
  className = "",
  defaultOpen = null,
}: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={clsx("divide-y divide-border", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-foreground"
              aria-expanded={isOpen}
            >
              <span
                className={clsx(
                  "font-heading text-lg md:text-xl leading-snug transition-colors",
                  isOpen ? "text-foreground" : "text-foreground/85"
                )}
              >
                {item.question}
              </span>
              <span
                className={clsx(
                  "shrink-0 mt-1 font-display text-2xl leading-none text-muted",
                  "transition-transform duration-500 ease-out-expo",
                  isOpen && "rotate-45 text-accent"
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-12 font-sans text-body text-muted leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
