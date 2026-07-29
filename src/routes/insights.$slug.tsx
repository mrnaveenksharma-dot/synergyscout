import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Btn } from "@/components/ui/Btn";
import { insights, type InsightBlock } from "@/data/site";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = insights.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Insight not found — Synergy Scout" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Synergy Scout` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: ArticlePage,
});

function NotFound() {
  return (
    <Section tone="canvas" size="lg">
      <div className="mx-auto max-w-xl text-center">
        <div className="mono-label">404 · Insight</div>
        <h1 className="mt-4 font-display text-[40px] font-semibold tracking-tight">
          This piece doesn't exist yet.
        </h1>
        <p className="mt-4 text-[color:var(--muted)]">
          It may have been renamed or the link is out of date.
        </p>
        <div className="mt-8">
          <Btn to="/insights" variant="primary">
            Back to all insights
          </Btn>
        </div>
      </div>
    </Section>
  );
}

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const related = insights
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);
  const more = insights
    .filter((p) => p.slug !== post.slug && !related.includes(p))
    .slice(0, 3 - related.length);
  const suggestions = [...related, ...more].slice(0, 3);

  return (
    <article>
      {/* Hero + banner + body — merged to remove section-boundary gaps */}
      <Section tone="canvas" size="md" containerSize="wide">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/insights"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[color:var(--muted)] transition-colors hover:text-[color:var(--ink)]"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            All insights
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-[12px] text-[color:var(--muted)]">
            <span className="rounded-full border border-[color:var(--hairline-strong)] px-3 py-1 font-medium text-[color:var(--ink)]">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.readingTime}
            </span>
          </div>
          <h1 className="mt-6 font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-[color:var(--ink)] sm:text-[64px] text-balance">
            {post.title}
          </h1>
          <p className="mt-6 text-[19px] leading-relaxed text-[color:var(--muted)] text-pretty">
            {post.excerpt}
          </p>
          <div className="mt-8 flex items-center gap-3 border-t border-[color:var(--hairline)] pt-6">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-[color:var(--ink)] font-mono text-[13px] font-semibold text-white">
              SS
            </div>
            <div>
              <div className="text-[14px] font-semibold text-[color:var(--ink)]">
                Synergy Scout Editorial
              </div>
              <div className="text-[12px] text-[color:var(--muted)]">
                Field notes from our recruiters
              </div>
            </div>
          </div>
        </div>

        {/* Banner — tight gap after title block */}
        <Reveal>
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-[color:var(--hairline)] sm:mt-12">
            <img
              src={post.image}
              alt={post.title}
              width={1600}
              height={900}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Body — tight gap after banner */}
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16">
          <div>
            {post.body.map((block: InsightBlock, i: number) => {
              if (block.type === "h") {
                return (
                  <Reveal key={i}>
                    <h2 className="mt-10 mb-4 font-display text-[26px] font-semibold leading-tight tracking-tight text-[color:var(--ink)] sm:text-[30px] first:mt-0">
                      {block.text}
                    </h2>
                  </Reveal>
                );
              }
              if (block.type === "p") {
                return (
                  <Reveal key={i}>
                    <p className="mt-4 text-[17.5px] leading-[1.75] text-[color:var(--ink-2)] first:mt-0">
                      {block.text}
                    </p>
                  </Reveal>
                );
              }
              if (block.type === "list") {
                return (
                  <Reveal key={i}>
                    <ul className="mt-5 space-y-2.5 border-l-2 border-[color:var(--accent-blue)] pl-6">
                      {block.items.map((item: string, j: number) => (
                        <li
                          key={j}
                          className="text-[16.5px] leading-relaxed text-[color:var(--ink-2)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                );
              }
              if (block.type === "quote") {
                return (
                  <Reveal key={i}>
                    <blockquote className="my-10 border-l-4 border-[color:var(--ink)] pl-6">
                      <p className="font-display text-[24px] font-medium leading-snug tracking-tight text-[color:var(--ink)] sm:text-[28px]">
                        "{block.text}"
                      </p>
                      {block.cite && (
                        <cite className="mt-3 block text-[13px] not-italic text-[color:var(--muted)]">
                          — {block.cite}
                        </cite>
                      )}
                    </blockquote>
                  </Reveal>
                );
              }
              return null;
            })}
          </div>

          {/* End cap */}
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[color:var(--hairline)] pt-8 sm:flex-row sm:items-center">
            <div>
              <div className="mono-label">Written by</div>
              <div className="mt-1 text-[15px] font-semibold text-[color:var(--ink)]">
                Synergy Scout Editorial
              </div>
              <div className="text-[13px] text-[color:var(--muted)]">
                Field notes from our recruiters
              </div>
            </div>
            <Btn to="/contact" variant="primary" arrow>
              Talk to us
            </Btn>
          </div>
        </div>
      </Section>

      {/* Related */}
      {suggestions.length > 0 && (
        <Section tone="surface" size="lg">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-[28px] font-semibold tracking-tight sm:text-[36px]">
              Continue reading
            </h2>
            <Link
              to="/insights"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-[color:var(--ink)]"
            >
              All insights
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {suggestions.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  to="/insights/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1600}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-[color:var(--ink)] backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[18px] font-semibold leading-snug tracking-tight text-[color:var(--ink)] transition-colors group-hover:text-[color:var(--accent-blue)]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[color:var(--muted)]">
                      {p.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}
    </article>
  );
}
