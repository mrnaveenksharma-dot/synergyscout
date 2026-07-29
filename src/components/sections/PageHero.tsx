import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
}

/**
 * Reusable inner-page hero — quieter than the homepage hero.
 */
export function PageHero({ eyebrow, title, subtitle, actions }: PageHeroProps) {
  return (
    <section
      data-page-hero
      className="relative isolate overflow-hidden bg-[color:var(--canvas)] pt-36 pb-16 sm:pt-44 sm:pb-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.10),transparent_70%)] blur-2xl" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(13,17,23,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,17,23,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)",
          }}
        />
      </div>
      <Container size="wide">
        <div className="max-w-3xl">
          <span className="mono-label">{eyebrow}</span>
          <h1 className="mt-6 font-display text-[44px] font-semibold leading-[1.03] tracking-[-0.03em] text-[color:var(--ink)] sm:text-[72px] text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-[18px] leading-[1.55] text-[color:var(--muted)] text-pretty">
              {subtitle}
            </p>
          )}
          {actions && <div className="mt-10 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>
      </Container>
    </section>
  );
}
