import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block font-sans text-sm font-medium tracking-wide transition-colors duration-200 rounded px-6 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";

  const variants = {
    primary: "bg-accent-dark text-white hover:bg-accent",
    secondary:
      "bg-transparent text-accent-dark border border-accent-dark hover:bg-accent-dark hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
