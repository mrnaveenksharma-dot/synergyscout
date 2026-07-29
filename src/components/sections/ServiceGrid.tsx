import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceGrid() {
  return (
    <Section id="services" tone="canvas" size="lg">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeader
          eyebrow="Services"
          title={<>IT recruitment, engineered for outcomes.</>}
          subtitle="Six technology practices. One operating standard: shortlists explained, decisions supported, hires that stay."
        />
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--hairline)] sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.slug} delay={i * 60} className="h-full">
              <Link
                to="/services"
                className="group relative flex h-full flex-col overflow-hidden bg-white p-8 transition-all duration-500 ease-out hover:-translate-y-1"
              >
                {/* Radial hover glow */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(600px circle at var(--mx, 50%) var(--my, 0%), rgba(37,99,235,0.10), transparent 45%)",
                  }}
                />
                {/* Diagonal shimmer sweep */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] bg-gradient-to-r from-transparent via-[color:var(--accent-blue)]/10 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100"
                />

                <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--surface)] text-[color:var(--ink)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:rotate-[-6deg] group-hover:bg-[color:var(--ink)] group-hover:text-white group-hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.55)]">
                  <Icon
                    className="h-5 w-5 transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="relative mt-8 font-display text-[22px] font-semibold tracking-tight transition-colors duration-300 group-hover:text-[color:var(--accent-blue)]">
                  {s.title}
                </h3>
                <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-[color:var(--muted)]">
                  {s.short}
                </p>
                <span className="relative mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--ink)] transition-colors group-hover:text-[color:var(--accent-blue)]">
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>

                {/* Accent line on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[color:var(--accent-blue)] transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                {/* Bottom accent bar */}
                <span
                  aria-hidden
                  className="absolute inset-x-8 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[color:var(--accent-blue)] to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
