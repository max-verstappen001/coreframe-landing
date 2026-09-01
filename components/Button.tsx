"use client";

import Link from "next/link";
import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  className?: string;
  icon?: ReactNode;
}

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
  icon,
}: ButtonProps) {
  const base = clsx(
    "group relative inline-flex items-center justify-center gap-2",
    "font-display text-sm font-medium tracking-wide",
    "transition-all duration-500 ease-out-expo",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
  );

  const variants = {
    primary: clsx(
      "px-8 py-4 rounded-full",
      "bg-foreground text-bg",
      "hover:bg-accent hover:text-on-accent hover:shadow-[0_10px_40px_-10px_var(--color-glow-strong)]",
      "active:scale-[0.98]"
    ),
    secondary: clsx(
      "px-8 py-4 rounded-full",
      "bg-transparent text-foreground",
      "border border-border-hover",
      "hover:border-accent hover:text-accent",
      "active:scale-[0.98]"
    ),
    ghost: clsx(
      "px-4 py-2",
      "text-muted",
      "hover:text-foreground"
    ),
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-full bg-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}

/* Arrow icon helper */
export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
