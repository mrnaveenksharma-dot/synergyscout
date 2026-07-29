import type { ReactNode } from "react";
import { Section } from "@/components/layout/Section";
import { Btn } from "@/components/ui/Btn";

interface FinalCTAProps {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}

export function FinalCTA({
  id,
  eyebrow = "Ready when you are",
  title = <>Let's build your next great team.</>,
  subtitle = "Share the role or the plan. We'll come back within a working day with a scoped path forward.",
  primary = { label: "Get in Touch", to: "/contact" },
  secondary = { label: "Explore Services", to: "/services" },
}: FinalCTAProps) {
  return (
    <Section id={id} tone="ink" size="lg" className="grain">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="mono-label !text-white/50">{eyebrow}</span>
        <h2 className="mt-5 font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-[72px] text-balance">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white/65 text-pretty">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Btn to={primary.to} variant="secondary" size="lg" arrow>
            {primary.label}
          </Btn>
          <Btn
            to={secondary.to}
            size="lg"
            className="border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40"
          >
            {secondary.label}
          </Btn>
        </div>
      </div>
    </Section>
  );
}
