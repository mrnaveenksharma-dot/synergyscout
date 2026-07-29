import { useEffect, useRef, useState } from "react";
import { metrics } from "@/data/site";
import { Section } from "@/components/layout/Section";

function useCounter(target: number, active: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return n;
}

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), io.disconnect()),
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <Section tone="canvas" size="lg">
      <div ref={ref} className="grid gap-y-14 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <MetricCard
            key={m.label}
            idx={i}
            value={m.value}
            suffix={m.suffix}
            label={m.label}
            active={visible}
          />
        ))}
      </div>
    </Section>
  );
}

function MetricCard({
  value,
  suffix,
  label,
  active,
  idx,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  idx: number;
}) {
  const n = useCounter(value, active, 1400 + idx * 100);
  return (
    <div className="relative">
      <div className="mono-label mb-4 flex items-center gap-2">
        <span className="h-4 w-px bg-[color:var(--accent-blue)]" />0{idx + 1}
      </div>
      <div className="font-display text-[64px] font-semibold leading-none tracking-[-0.04em] text-[color:var(--ink)] sm:text-[76px]">
        {n}
        <span className="text-[color:var(--accent-blue)]">{suffix}</span>
      </div>
      <p className="mt-4 max-w-[220px] text-[15px] leading-snug text-[color:var(--muted)]">
        {label}
      </p>
    </div>
  );
}
