import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { Section, SectionHeader } from "@/components/layout/Section";

export function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;

  useEffect(() => {
    if (n === 0) return;
    const id = setInterval(() => setI((v) => (v + 1) % n), 7000);
    return () => clearInterval(id);
  }, [n]);

  if (n === 0) return null;

  const t = testimonials[i];
  if (!t) return null;

  return (
    <Section tone="surface" size="lg">
      <SectionHeader eyebrow="Testimonials" title={<>Words from the people we work with.</>} />

      <div className="relative mt-14 overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-white p-10 shadow-[var(--shadow-soft)] sm:p-16">
        <Quote
          className="absolute right-10 top-10 h-16 w-16 text-[color:var(--surface-2)]"
          strokeWidth={1}
        />

        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10"
            >
              <p className="font-display text-[26px] font-medium leading-[1.35] tracking-tight text-[color:var(--ink)] sm:text-[32px] text-balance">
                “{t.quote}”
              </p>
              <footer className="mt-10 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--ink)] font-mono text-[13px] font-medium text-white">
                  {t.name
                    .split(" ")
                    .map((s) => s[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-[color:var(--ink)]">{t.name}</div>
                  <div className="text-[13px] text-[color:var(--muted)]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-[color:var(--hairline)] pt-6">
          <div className="flex items-center gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                aria-label={`Testimonial ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  k === i ? "w-8 bg-[color:var(--ink)]" : "w-4 bg-[color:var(--hairline-strong)]"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setI((v) => (v - 1 + n) % n)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--hairline-strong)] transition-colors hover:bg-[color:var(--surface)]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setI((v) => (v + 1) % n)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--hairline-strong)] transition-colors hover:bg-[color:var(--surface)]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
