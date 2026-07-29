import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { processSteps } from "@/data/site";
import { Section, SectionHeader } from "@/components/layout/Section";

export function ProcessTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 75%", "end 40%"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
    restDelta: 0.001,
  });
  const lineHeight = useTransform(smooth, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setActiveIdx(idx);
          }
        }
      },
      { threshold: 0.55, rootMargin: "-25% 0px -35% 0px" },
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Section id="process" tone="ink" size="lg">
      <SectionHeader
        eyebrow="Recruitment process"
        title={<>Five steps. Everyone on the same page, the whole way.</>}
        subtitle="Structured, transparent, and easy to plan around. This is how a search actually unfolds when you work with us."
        className="!text-white [&_p]:!text-white/60 [&_h2]:!text-white [&_.mono-label]:!text-white/50"
      />

      <div ref={wrapRef} className="relative mt-20 grid gap-16 md:grid-cols-[80px_1fr] md:gap-14">
        {/* Timeline rail */}
        <div className="relative hidden md:block">
          <div className="sticky top-32 h-[calc(100vh-16rem)]">
            <div className="absolute left-6 top-0 h-full w-px bg-white/10" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-6 top-0 w-px bg-gradient-to-b from-[color:var(--accent-blue)] to-white/80"
            />
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {processSteps.map((s, i) => {
            const active = i === activeIdx;
            return (
              <div
                key={s.n}
                data-idx={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Dot (mobile inline) */}
                <div className="relative md:absolute md:-left-[80px] md:top-1">
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-full border transition-all duration-500 ${
                      active
                        ? "border-[color:var(--accent-blue)] bg-[color:var(--accent-blue)] text-white scale-110"
                        : "border-white/20 bg-[color:var(--ink)] text-white/60"
                    }`}
                  >
                    <span className="font-mono text-[11px] font-medium">{s.n}</span>
                  </div>
                </div>

                <div
                  className={`flex-1 transition-opacity duration-500 ${
                    active ? "opacity-100" : "opacity-55"
                  }`}
                >
                  <h3 className="font-display text-[32px] font-semibold tracking-tight text-white sm:text-[44px]">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/65">
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
