import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export function Card({ children, href, className = "" }: CardProps) {
  const base = `border border-border rounded p-8 ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} block transition-colors duration-200 hover:border-accent`}
      >
        {children}
      </Link>
    );
  }

  return <div className={base}>{children}</div>;
}
