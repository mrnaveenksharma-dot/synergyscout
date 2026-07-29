import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-medium tracking-tight " +
  "transition-all duration-200 ease-out select-none whitespace-nowrap " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--accent-blue)] " +
  "disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[color:var(--accent-blue)] text-white shadow-[var(--shadow-soft)] " +
    "hover:bg-[color:var(--accent-blue-hover)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-[1px]",
  secondary:
    "bg-[color:var(--ink)] text-white shadow-[var(--shadow-soft)] " +
    "hover:bg-[color:var(--ink-2)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-[1px]",
  outline:
    "bg-transparent text-[color:var(--ink)] border border-[color:var(--hairline-strong)] " +
    "hover:border-[color:var(--ink)] hover:-translate-y-[1px]",
  ghost: "text-[color:var(--ink)] hover:bg-[color:var(--surface)]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[14px] rounded-full",
  lg: "h-13 px-7 text-[15px] rounded-full",
};

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  arrow?: boolean;
  children: ReactNode;
}

export const Btn = forwardRef<HTMLButtonElement, BtnProps>(function Btn(
  { variant = "primary", size = "md", to, href, arrow, children, className, ...rest },
  ref,
) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <button ref={ref} className={classes} {...rest}>
      {inner}
    </button>
  );
});
