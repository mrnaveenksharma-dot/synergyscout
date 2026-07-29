import { useState } from "react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { faqs as defaultFaqs } from "@/data/site";
import { cn } from "@/lib/utils";

interface FAQProps {
  faqs?: { q: string; a: string }[];
}

export function FAQ({ faqs = defaultFaqs }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section tone="canvas" size="lg">
      <SectionHeader
        eyebrow="FAQ"
        title={<>Common questions.</>}
        subtitle="Short answers on how we work, price and partner."
      />
      <div className="mt-12 divide-y divide-[color:var(--hairline)] border-y border-[color:var(--hairline)]">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="group/faq relative">
              {/* Hover accent bar */}
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-[color:var(--accent-blue)] transition-transform duration-500 ease-out group-hover/faq:scale-y-100",
                  isOpen && "scale-y-100",
                )}
              />
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 pl-5 pr-1 text-left transition-all duration-300 hover:pl-7"
              >
                <span
                  className={cn(
                    "font-display text-[19px] font-semibold tracking-tight transition-colors duration-300 sm:text-[22px]",
                    isOpen
                      ? "text-[color:var(--accent-blue)]"
                      : "group-hover/faq:text-[color:var(--accent-blue)]",
                  )}
                >
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "relative grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500",
                    isOpen
                      ? "rotate-45 border-[color:var(--accent-blue)] bg-[color:var(--accent-blue)]"
                      : "border-[color:var(--hairline-strong)] group-hover/faq:border-[color:var(--accent-blue)] group-hover/faq:rotate-90",
                  )}
                >
                  {/* Custom animated + / × */}
                  <span
                    className={cn(
                      "absolute h-[1.5px] w-3.5 rounded-full transition-colors duration-300",
                      isOpen
                        ? "bg-white"
                        : "bg-[color:var(--ink)] group-hover/faq:bg-[color:var(--accent-blue)]",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute h-3.5 w-[1.5px] rounded-full transition-all duration-500",
                      isOpen
                        ? "scale-y-0 bg-white"
                        : "bg-[color:var(--ink)] group-hover/faq:bg-[color:var(--accent-blue)]",
                    )}
                  />
                </span>
              </button>
              <div
                className={cn(
                  "grid overflow-hidden pl-5 pr-1 transition-all duration-500 ease-out",
                  isOpen ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="min-h-0">
                  <p className="max-w-2xl text-[16px] leading-relaxed text-[color:var(--muted)]">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
