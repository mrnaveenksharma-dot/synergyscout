import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "canvas" | "surface" | "ink";
  size?: "sm" | "md" | "lg";
  container?: boolean;
  containerSize?: "default" | "wide" | "narrow";
}

const tones = {
  canvas: "bg-[color:var(--canvas)] text-[color:var(--ink)]",
  surface: "bg-[color:var(--surface)] text-[color:var(--ink)]",
  ink: "bg-[color:var(--ink)] text-white",
};

const paddings = {
  sm: "py-16 sm:py-20",
  md: "py-20 sm:py-28",
  lg: "py-28 sm:py-36",
};

export function Section({
  children,
  className,
  id,
  tone = "canvas",
  size = "md",
  container = true,
  containerSize = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      data-tone={tone}
      className={cn("relative", tones[tone], paddings[size], className)}
    >
      {container ? <Container size={containerSize}>{children}</Container> : children}
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const reduced = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: {
      duration: 0.9,
      delay,
      ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number],
    },
  });
  return (
    <header className={cn("max-w-[720px]", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <motion.span {...rise(0)} className="mono-label block">
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        {...rise(0.08)}
        className="mt-4 font-display text-[36px] font-semibold leading-[1.05] tracking-tight sm:text-[52px] text-balance"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          {...rise(0.16)}
          className="mt-5 text-[17px] leading-[1.55] text-[color:var(--muted)] text-pretty"
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  );
}
