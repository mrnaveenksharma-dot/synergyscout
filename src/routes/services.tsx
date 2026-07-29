import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/layout/Section";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Btn } from "@/components/ui/Btn";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Synergy Scout" },
      {
        name: "description",
        content:
          "Six specialised recruitment practices: permanent, executive search, contract staffing, RPO, talent mapping and workforce consulting.",
      },
      { property: "og:title", content: "Services — Synergy Scout" },
      {
        property: "og:description",
        content: "Recruitment solutions designed for growth-stage and enterprise teams.",
      },
      { property: "og:url", content: "https://synergyscout.in/services" },
    ],
    links: [{ rel: "canonical", href: "https://synergyscout.in/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Six practices. One operating standard.</>}
        subtitle="From single mandates to fully embedded recruitment operations — matched to how you actually hire."
        actions={
          <>
            <Btn to="/contact" variant="primary" size="lg" arrow>
              Talk to a consultant
            </Btn>
            <Btn href="#services-list" variant="outline" size="lg">
              See all services
            </Btn>
          </>
        }
      />

      {/* Overview strip */}
      <Section tone="surface" size="sm">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              k: "How we scope",
              v: "One kickoff to redraft the brief. Success profile before shortlist.",
            },
            {
              k: "How we deliver",
              v: "Weekly cadence, structured evidence, no resume forwarding.",
            },
            {
              k: "How we close",
              v: "Offer strategy, counter-offer coaching and 90-day onboarding support.",
            },
          ].map((c) => (
            <div key={c.k} className="border-l border-[color:var(--hairline-strong)] pl-5">
              <div className="mono-label">{c.k}</div>
              <p className="mt-3 text-[16px] leading-relaxed text-[color:var(--ink)]">{c.v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Detailed services */}
      <Section id="services-list" tone="canvas" size="lg">
        <SectionHeader
          eyebrow="Our practices"
          title={
            <>
              Precision-vetted <span className="text-[color:var(--muted)]">tech talent.</span>
            </>
          }
          subtitle="Six focused specialisations. Tap a row to see how each engagement runs."
        />

        <PracticesList />
      </Section>

      <ProcessTimeline />
      <FAQ />
      <FinalCTA
        title={<>Have a role you'd like a second opinion on?</>}
        subtitle="Send a brief — we'll come back within a working day with market view and a proposed approach."
      />
    </>
  );
}

function PracticesList() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mt-16 border-t border-[color:var(--hairline)]">
      {services.map((s, i) => {
        const isOpen = open === i;
        return (
          <div key={s.slug} className="border-b border-[color:var(--hairline)]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-8 text-left transition-colors hover:bg-[color:var(--accent-blue)]/[0.02] md:py-10"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span
                  className={cn(
                    "font-mono text-lg tabular-nums transition-colors md:text-xl",
                    isOpen
                      ? "text-[color:var(--accent-blue)]"
                      : "text-[color:var(--muted)] group-hover:text-[color:var(--accent-blue)]",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={cn(
                    "font-display text-[32px] font-bold leading-none tracking-tight transition-colors md:text-[44px] lg:text-[52px]",
                    isOpen
                      ? "text-[color:var(--ink)]"
                      : "text-[color:var(--muted)]/60 group-hover:text-[color:var(--ink)]",
                  )}
                >
                  {s.title}
                </h3>
              </div>
              <Plus
                className={cn(
                  "h-7 w-7 shrink-0 text-[color:var(--accent-blue)] transition-all duration-500 ease-out",
                  isOpen ? "rotate-45" : "rotate-0 opacity-40 group-hover:opacity-100",
                )}
                strokeWidth={1.25}
              />
            </button>

            <div
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="min-h-0">
                <div className="flex flex-col gap-10 pb-12 md:flex-row md:gap-16 md:pl-24">
                  <p className="max-w-xl text-[17px] leading-relaxed text-[color:var(--ink-2)] md:text-[19px]">
                    {s.long}
                  </p>
                  <div className="grid flex-1 gap-8 sm:grid-cols-2 md:max-w-xl">
                    <div>
                      <div className="mono-label">Core outcomes</div>
                      <ul className="mt-4 space-y-3">
                        {s.outcomes.map((o) => (
                          <li
                            key={o}
                            className="flex items-center gap-3 text-[14.5px] text-[color:var(--ink-2)]"
                          >
                            <span className="h-px w-5 shrink-0 bg-[color:var(--accent-blue)]" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-l-2 border-[color:var(--accent-blue)] bg-[color:var(--surface)] p-6">
                      <div className="mono-label">Ideal for</div>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-[color:var(--ink-2)]">
                        {s.ideal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
