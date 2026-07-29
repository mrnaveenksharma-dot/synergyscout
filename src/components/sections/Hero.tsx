import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Btn } from "@/components/ui/Btn";
import { Container } from "@/components/layout/Container";

/**
 * Homepage hero — cinematic 100vh section.
 * Editorial typography. Animated mesh gradient. Abstract network visualization.
 */
export function Hero({ id }: { id?: string }) {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const graphicY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 40]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={heroRef}
      id={id}
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-[color:var(--canvas)] pt-28 sm:pt-32"
    >
      {/* Animated mesh gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[15%] top-[8%] h-[520px] w-[520px] animate-hero-gradient rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),transparent_60%)] blur-2xl" />
        <div
          className="absolute right-[-10%] top-[30%] h-[600px] w-[600px] animate-hero-gradient rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_60%)] blur-2xl"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute left-[30%] bottom-[-10%] h-[520px] w-[520px] animate-hero-gradient rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.14),transparent_60%)] blur-2xl"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(13,17,23,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,17,23,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 55%, transparent 85%)",
        }}
      />

      <Container size="wide" className="relative flex flex-1 flex-col justify-center pb-24 pt-16">
        <motion.div
          style={{ y: textY, opacity: fade }}
          className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        >
          <div>
            <motion.span
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mono-label inline-flex items-center gap-2"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent-blue)] animate-pulse-dot" />
              Recruitment, done properly
            </motion.span>

            <h1 className="mt-6 font-display text-[52px] font-semibold leading-[0.98] tracking-[-0.035em] text-[color:var(--ink)] sm:text-[80px] lg:text-[104px] text-balance">
              <MaskLine delay={0.05}>Building</MaskLine>{" "}
              <MaskLine delay={0.15}>
                <span className="font-serif font-normal italic tracking-[-0.02em] text-[color:var(--accent-blue)]">
                  high-performing
                </span>
              </MaskLine>{" "}
              <MaskLine delay={0.22}>teams.</MaskLine>
              <br />
              <MaskLine delay={0.32}>
                <span className="text-[color:var(--muted)]">Creating exceptional careers.</span>
              </MaskLine>
            </h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
              className="mt-8 max-w-xl text-[17px] leading-[1.55] text-[color:var(--muted)] text-pretty"
            >
              Synergy Scout is a specialist technology recruitment firm connecting companies with
              exceptional engineering, product, data and IT talent — through precision search, real
              evidence, and partnerships that outlast the placement.
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Btn to="/contact" variant="primary" size="lg" arrow>
                Get in Touch
              </Btn>
              <Btn to="/services" variant="outline" size="lg">
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Btn>
            </motion.div>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            style={{ y: graphicY }}
            className="relative"
          >
            <NetworkGraphic />
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <motion.div
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="mono-label !text-[10px]">Scroll</span>
          <ChevronDown className="h-4 w-4 text-[color:var(--muted)]" />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Mask-reveal for headline lines — words rise from a hidden position
 * behind an invisible mask. Content is rendered visible immediately if
 * reduced-motion is set; otherwise animated in.
 */
function MaskLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <span className="relative inline-block overflow-hidden pb-[0.12em] align-bottom">
      <motion.span
        className="inline-block"
        initial={reduced ? false : { y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Abstract "recruitment network" — nodes and connecting lines that gently pulse.
 * Pure SVG + CSS animation. No stock imagery.
 */
function NetworkGraphic() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const nodes = [
    { id: "a", x: 20, y: 30, r: 6, label: "Role" },
    { id: "b", x: 82, y: 22, r: 5, label: "Skill" },
    { id: "c", x: 90, y: 70, r: 5, label: "Signal" },
    { id: "d", x: 18, y: 78, r: 6, label: "Team" },
    { id: "e", x: 50, y: 50, r: 10, label: "Match" },
    { id: "f", x: 62, y: 15, r: 4, label: "" },
    { id: "g", x: 12, y: 55, r: 4, label: "" },
    { id: "h", x: 78, y: 88, r: 4, label: "" },
  ];

  const links: [string, string][] = [
    ["a", "e"],
    ["b", "e"],
    ["c", "e"],
    ["d", "e"],
    ["f", "e"],
    ["g", "e"],
    ["h", "e"],
    ["a", "f"],
    ["b", "f"],
    ["d", "g"],
  ];

  return (
    <div className="relative aspect-square w-full max-w-[520px] rounded-3xl border border-[color:var(--hairline)] bg-white/60 p-6 shadow-[var(--shadow-lift)] backdrop-blur-md animate-hero-float">
      <div className="absolute left-6 top-6 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[color:var(--accent-blue)] animate-pulse-dot" />
        <span className="mono-label !text-[10px]">Alignment Engine</span>
      </div>
      <div className="absolute right-6 top-6 mono-label !text-[10px]">Live</div>

      <svg
        viewBox="0 0 100 100"
        role="img"
        aria-label="Abstract diagram of matched roles converging on a single alignment point"
        className="mt-6 h-[calc(100%-2rem)] w-full"
      >
        <defs>
          <radialGradient id="node-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </radialGradient>
          <linearGradient id="line-fade" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {links.map(([f, t], i) => {
          const from = nodes.find((n) => n.id === f)!;
          const to = nodes.find((n) => n.id === t)!;
          return (
            <line
              key={`${f}-${t}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#line-fade)"
              strokeWidth="0.35"
              strokeLinecap="round"
              style={{
                strokeDasharray: 100,
                strokeDashoffset: mounted ? 0 : 100,
                transition: `stroke-dashoffset 1.4s ${0.3 + i * 0.08}s cubic-bezier(0.2,0.7,0.2,1)`,
              }}
            />
          );
        })}

        {nodes.map((n, i) => (
          <g
            key={n.id}
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "scale(1)" : "scale(0.3)",
              transformOrigin: `${n.x}px ${n.y}px`,
              transition: `opacity 0.6s ${0.6 + i * 0.06}s ease-out, transform 0.6s ${0.6 + i * 0.06}s cubic-bezier(0.22,1,0.36,1)`,
            }}
          >
            {n.id === "e" && (
              <>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r + 3}
                  fill="none"
                  stroke="#2563eb"
                  strokeOpacity="0.3"
                >
                  <animate
                    attributeName="r"
                    from={n.r + 1}
                    to={n.r + 8}
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    from="0.5"
                    to="0"
                    dur="2.4s"
                    repeatCount="indefinite"
                  />
                </circle>
              </>
            )}
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r / 3}
              fill={n.id === "e" ? "url(#node-blue)" : "#0d1117"}
            />
            {n.label && (
              <text
                x={n.x}
                y={n.y + n.r / 3 + 4}
                textAnchor="middle"
                className="fill-[color:var(--muted)]"
                style={{
                  font: "500 3px 'IBM Plex Mono', monospace",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {n.label}
              </text>
            )}
          </g>
        ))}
      </svg>

      <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-xl border border-[color:var(--hairline)] bg-white/80 px-4 py-3">
        <div>
          <div className="mono-label !text-[9px]">Match confidence</div>
          <div className="mt-0.5 font-display text-[18px] font-semibold tracking-tight">97.2%</div>
        </div>
        <div className="flex items-end gap-[3px]">
          {[8, 14, 10, 18, 22, 16, 26].map((h, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-[color:var(--accent-blue)]"
              style={{ height: `${h}px`, opacity: 0.4 + i * 0.08 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
