import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { insights } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

export function InsightsPreview({ id }: { id?: string }) {
  const featured = insights.slice(0, 3);
  return (
    <Section id={id} tone="canvas" size="lg">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="mono-label">Insights</span>
          <h2 className="mt-4 font-display text-[36px] font-semibold leading-[1.05] tracking-tight sm:text-[52px] text-balance">
            Perspectives on hiring, leadership and the market.
          </h2>
        </div>
        <Link
          to="/insights"
          className="group inline-flex items-center gap-2 text-[14px] font-medium text-[color:var(--ink)]"
        >
          View all insights
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {featured.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80}>
            <Link
              to="/insights/$slug"
              params={{ slug: post.slug }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-white transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[color:var(--accent-blue)]/40 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  width={1600}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[color:var(--ink)] shadow-sm backdrop-blur">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-[12px] text-[color:var(--muted)]">
                  <span>{post.readingTime}</span>
                </div>

                <h3 className="mt-3 font-display text-[22px] font-semibold leading-tight tracking-tight text-[color:var(--ink)] transition-colors duration-300 group-hover:text-[color:var(--accent-blue)]">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[color:var(--muted)]">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--ink)] transition-colors group-hover:text-[color:var(--accent-blue)]">
                  Read
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
