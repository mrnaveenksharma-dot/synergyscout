import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Editorial index of technology domains.
 * Oversized typographic rows on the right, sticky title/intro on the left.
 * `compact` variant (used inside /industries below the page hero) drops the
 * sidebar and gives the list the full column width.
 */
export function IndustryGrid({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="industries" tone="canvas" size="lg">
      <div className={cn("grid grid-cols-1 gap-16", !compact && "lg:grid-cols-12 lg:gap-24")}>
        {!compact && (
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-8">
              <div className="space-y-5">
                <span className="mono-label inline-block border border-[color:var(--hairline)] bg-[color:var(--surface)] px-3 py-1 text-[color:var(--accent-blue)]">
                  Expertise
                </span>
                <h2 className="font-display text-[44px] font-extrabold leading-[1.05] tracking-tight text-[color:var(--ink)] sm:text-[56px]">
                  Tech
                  <br />
                  Domains
                </h2>
              </div>
              <p className="max-w-sm text-[17px] leading-[1.55] text-[color:var(--muted)]">
                Deep technical fluency across the modern stack, delivered by specialised recruiter
                pods that know the roles, the market and the people already doing the work well.
              </p>
              <div className="pt-2">
                <Link
                  to="/industries"
                  className="group inline-flex items-center gap-3 font-display text-sm font-semibold tracking-tight text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent-blue)]"
                >
                  Explore every domain
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>
          </aside>
        )}

        <div className={cn(!compact && "lg:col-span-8")}>
          <div className="border-t border-[color:var(--hairline)]">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 40}>
                <Link
                  to="/industries"
                  className="group relative block border-b border-[color:var(--hairline)] py-10 transition-[padding,background-color] duration-500 ease-out hover:bg-[color:var(--surface)] hover:pl-8 hover:pr-8 sm:py-12"
                >
                  {/* Signal-blue accent bar that reveals on hover */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 bg-[color:var(--accent-blue)] transition-all duration-500 ease-out group-hover:h-[70%]"
                  />

                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-12">
                    <span className="pt-2 font-mono text-[11px] tracking-[0.14em] text-[color:var(--accent-blue)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-6">
                        <h3 className="font-display text-[28px] font-bold leading-[1.05] tracking-tight text-[color:var(--ink)] transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-[36px] lg:text-[40px]">
                          {ind.name}
                        </h3>
                        <ArrowUpRight
                          className="mt-2 h-5 w-5 shrink-0 text-[color:var(--accent-blue)] opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                          strokeWidth={1.75}
                        />
                      </div>

                      {/* Detail: revealed on hover via grid-rows animation for smooth expand */}
                      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <p className="mt-4 max-w-xl text-[15.5px] leading-[1.6] text-[color:var(--muted)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                            {ind.blurb}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
