import { useEffect, useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface LegalSection {
  id: string;
  title: string;
  body: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}

export function LegalPage({ eyebrow, title, updated, sections }: LegalPageProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActiveId((e.target as HTMLElement).id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [sections]);

  return (
    <>
      <PageHero eyebrow={eyebrow} title={<>{title}</>} subtitle={updated} />

      <Section tone="canvas" size="lg" container={false}>
        <Container size="wide">
          <div className="grid gap-16 lg:grid-cols-[240px_1fr] lg:gap-20">
            {/* TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <div className="mono-label mb-4">On this page</div>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={cn(
                        "block border-l-2 py-1.5 pl-4 text-[13.5px] leading-snug transition-colors",
                        activeId === s.id
                          ? "border-[color:var(--accent-blue)] text-[color:var(--ink)] font-medium"
                          : "border-transparent text-[color:var(--muted)] hover:text-[color:var(--ink)]",
                      )}
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <article className="max-w-2xl">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="mb-14 scroll-mt-32">
                  <h2 className="font-display text-[24px] font-semibold tracking-tight text-[color:var(--ink)] sm:text-[28px]">
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-[16px] leading-[1.7] text-[color:var(--ink-2)]">
                    {s.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </article>
          </div>
        </Container>
      </Section>
    </>
  );
}
