"use client";

import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  tilt?: boolean;
}

export function Card({ children, href, className = "" }: CardProps) {
  const cardContent = (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-2xl",
        "bg-bg-card border border-border shadow-soft",
        "p-8 md:p-10",
        "transition-[border-color,transform,box-shadow] duration-300 ease-out",
        "hover:border-border-hover hover:-translate-y-1 hover:shadow-card",
        className
      )}
    >
      {/* Hover gradient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
