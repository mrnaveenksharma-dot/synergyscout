import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ArrowUpRight, Mail, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Btn } from "@/components/ui/Btn";
import { insights, site } from "@/data/site";
import { submitToFormEndpoint } from "@/lib/form-submission";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Recruitment",
  "Hiring",
  "Leadership",
  "Career Advice",
  "Industry Trends",
  "Technology",
] as const;

const PAGE_SIZE = 6;

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Synergy Scout" },
      {
        name: "description",
        content: "Perspectives on hiring, leadership, and the India technology talent market.",
      },
      { property: "og:title", content: "Insights — Synergy Scout" },
      {
        property: "og:description",
        content: "Field notes and frameworks from recruiters who ship.",
      },
      { property: "og:url", content: "https://synergyscout.in/insights" },
    ],
    links: [{ rel: "canonical", href: "https://synergyscout.in/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sent" | "error">("idle");
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return insights.filter((p) => {
      const inCat = cat === "All" || p.category === cat;
      const inQ =
        !query || p.title.toLowerCase().includes(query) || p.excerpt.toLowerCase().includes(query);
      return inCat && inQ;
    });
  }, [q, cat]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [q, cat]);

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const totalPages = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = rest.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Field notes on hiring, leadership and the market.</>}
        subtitle="Written by the same people who run our searches. No fluff, no thought-leadership bingo."
      />

      <Section tone="canvas" size="sm" containerSize="wide">
        {/* Search + filters */}
        <div className="flex flex-col gap-6 border-y border-[color:var(--hairline)] py-6 md:flex-row md:items-center md:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted)]" />
            <input
              type="search"
              name="search"
              aria-label="Search insights"
              autoComplete="off"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search insights…"
              className="h-11 w-full rounded-full border border-[color:var(--hairline)] bg-white pl-11 pr-4 text-[14px] text-[color:var(--ink)] placeholder:text-[color:var(--muted)] transition-[border-color,box-shadow] focus:border-[color:var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-blue)]/20"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-all duration-300",
                  cat === c
                    ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-white shadow-[var(--shadow-soft)]"
                    : "border-[color:var(--hairline-strong)] text-[color:var(--muted)] hover:-translate-y-0.5 hover:border-[color:var(--ink)] hover:text-[color:var(--ink)]",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured */}
      {featured && currentPage === 1 && (
        <Section tone="canvas" size="sm">
          <Reveal>
            <Link
              to="/insights/$slug"
              params={{ slug: featured.slug }}
              className="group grid gap-0 overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--accent-blue)]/40 hover:shadow-[var(--shadow-lift)] md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
                <span className="absolute left-6 top-6 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[color:var(--ink)] shadow-sm backdrop-blur">
                  Featured · {featured.category}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-3 text-[12px] text-[color:var(--muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {featured.readingTime}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-[32px] font-semibold leading-tight tracking-tight text-[color:var(--ink)] text-balance transition-colors duration-300 group-hover:text-[color:var(--accent-blue)] sm:text-[40px]">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-[color:var(--muted)]">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[color:var(--hairline)] pt-5">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--ink)] font-mono text-[11px] font-semibold text-white">
                    SS
                  </div>
                  <div className="flex-1">
                    <div className="text-[13px] font-semibold text-[color:var(--ink)]">
                      Synergy Scout Editorial
                    </div>
                    <div className="text-[11.5px] text-[color:var(--muted)]">
                      Field notes from our recruiters
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--ink)] transition-colors group-hover:text-[color:var(--accent-blue)]">
                    Read
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </Section>
      )}

      {/* Grid */}
      <Section tone="canvas" size="md">
        {paginated.length === 0 && !featured ? (
          <div className="rounded-2xl border border-dashed border-[color:var(--hairline-strong)] p-16 text-center text-[color:var(--muted)]">
            No pieces match those filters. Try a different search.
          </div>
        ) : paginated.length === 0 ? null : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {paginated.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[color:var(--ink)] shadow-sm backdrop-blur">
                      {post.category}
                    </span>
                    <span className="absolute right-4 top-4 grid h-9 w-9 translate-x-2 place-items-center rounded-full bg-white/95 text-[color:var(--ink)] opacity-0 shadow-sm backdrop-blur transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-3 text-[12px] text-[color:var(--muted)]">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="mt-3 font-display text-[20px] font-semibold leading-snug tracking-tight text-[color:var(--ink)] transition-colors duration-300 group-hover:text-[color:var(--accent-blue)]">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[color:var(--muted)]">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[12px] text-[color:var(--muted)]">
                      <div className="grid h-6 w-6 place-items-center rounded-full bg-[color:var(--surface)] font-mono text-[9px] font-semibold text-[color:var(--ink)]">
                        SS
                      </div>
                      <span>Synergy Scout Editorial</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--hairline-strong)] text-[color:var(--muted)] transition-all hover:-translate-x-0.5 hover:border-[color:var(--ink)] hover:text-[color:var(--ink)] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-x-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, idx) => {
              const n = idx + 1;
              const active = n === currentPage;
              return (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "grid h-10 min-w-10 place-items-center rounded-full border px-3 text-[13px] font-medium transition-all duration-300",
                    active
                      ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-white shadow-[var(--shadow-soft)]"
                      : "border-[color:var(--hairline-strong)] text-[color:var(--muted)] hover:-translate-y-0.5 hover:border-[color:var(--ink)] hover:text-[color:var(--ink)]",
                  )}
                >
                  {n}
                </button>
              );
            })}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--hairline-strong)] text-[color:var(--muted)] transition-all hover:translate-x-0.5 hover:border-[color:var(--ink)] hover:text-[color:var(--ink)] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-x-0"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </Section>

      {/* Newsletter */}
      <Section tone="surface" size="md">
        <div className="mx-auto max-w-2xl text-center">
          <Mail className="mx-auto h-8 w-8 text-[color:var(--accent-blue)]" strokeWidth={1.5} />
          <h2 className="mt-4 font-display text-[32px] font-semibold leading-tight tracking-tight text-balance sm:text-[40px]">
            Get one honest email a month.
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-[color:var(--muted)]">
            Field notes on the India talent market, sent when we actually have something to say.
          </p>
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              setNewsletterStatus("idle");
              const form = event.currentTarget;
              const email = new FormData(form).get("email");
              const endpoint = import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT;

              if (!endpoint || typeof email !== "string") {
                setNewsletterStatus("error");
                return;
              }

              try {
                await submitToFormEndpoint(endpoint, {
                  email,
                  _subject: "Synergy Scout newsletter signup",
                });
                form.reset();
                setNewsletterStatus("sent");
              } catch {
                setNewsletterStatus("error");
              }
            }}
            className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-white p-1.5 pl-5 transition-colors focus-within:border-[color:var(--ink)]"
          >
            <input
              type="email"
              name="email"
              autoComplete="email"
              spellCheck={false}
              required
              placeholder="Your email…"
              aria-label="Email address"
              className="flex-1 bg-transparent text-[14px] placeholder:text-[color:var(--muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-blue)]/20"
            />
            <Btn type="submit" variant="primary" size="md">
              Subscribe
            </Btn>
          </form>
          <p className="mt-3 text-[12px] text-[color:var(--muted)]" aria-live="polite">
            {newsletterStatus === "sent"
              ? "You're on the list."
              : newsletterStatus === "error"
                ? `Newsletter signup is being connected. Email ${site.email} to join.`
                : ""}
          </p>
        </div>
      </Section>
    </>
  );
}
