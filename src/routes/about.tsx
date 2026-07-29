import { createFileRoute } from "@tanstack/react-router";
import { Compass, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeader } from "@/components/layout/Section";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/ui/Reveal";
import { values } from "@/data/site";
import aboutStory from "@/assets/about-story.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Synergy Scout" },
      {
        name: "description",
        content:
          "A specialist technology recruitment firm built on precision, transparency and long-term partnerships.",
      },
      { property: "og:title", content: "About — Synergy Scout" },
      {
        property: "og:description",
        content: "How we started, how we work, and what we stand for.",
      },
      { property: "og:url", content: "https://synergyscout.in/about" },
    ],
    links: [{ rel: "canonical", href: "https://synergyscout.in/about" }],
  }),
  component: AboutPage,
});

const principles = [
  {
    icon: Compass,
    title: "Partner-led delivery",
    body: "Every mandate is led by a partner from kickoff to close. No hand-offs, no junior forwarding.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence, not opinion",
    body: "Structured screening against a written rubric. Rationale, risks and references — on paper.",
  },
  {
    icon: Sparkles,
    title: "AI with judgment",
    body: "Automation removes drag from scheduling and research. It never replaces the human assessment.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>A tech recruitment firm built for the hires that matter most.</>}
        subtitle="We started Synergy Scout because good engineers deserve better hiring processes — and good companies deserve better shortlists."
      />

      {/* Story with editorial image */}
      <Section tone="canvas" size="lg">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[color:var(--surface-2)]">
              <img
                src={aboutStory}
                alt="A quiet meeting room bathed in warm afternoon light"
                width={1600}
                height={1200}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 rounded-full bg-white/95 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] backdrop-blur">
                Remote-first · India
              </div>
            </div>
          </Reveal>
          <div>
            <span className="mono-label">Our story</span>
            <h2 className="mt-4 font-display text-[36px] font-semibold leading-[1.05] tracking-tight sm:text-[48px] text-balance">
              Fifteen years in the room. One firm built to fix it.
            </h2>
            <div className="mt-8 space-y-5 text-[16.5px] leading-relaxed text-[color:var(--ink-2)]">
              <p>
                Synergy Scout is a new firm shaped by fifteen years inside technology hiring —
                briefing engineering leaders, running searches for hard-to-fill roles, and sitting
                on both sides of the interview table.
              </p>
              <p>
                Those years made one pattern impossible to ignore: great managers keep receiving
                resumes without context, and great candidates keep moving through processes without
                respect. Speed replaces judgment. Volume replaces fit.
              </p>
              <p>
                We started Synergy Scout to run hiring differently. Every shortlist we send is
                explained. Every candidate we present is briefed. Every process we run is
                transparent — on both sides of the table.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission / Vision */}
      <Section tone="surface" size="md">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-[color:var(--hairline)] bg-white p-8 md:p-10">
              <div className="mono-label">Mission</div>
              <p className="mt-4 font-display text-[22px] font-semibold leading-snug tracking-tight text-[color:var(--ink)] sm:text-[26px]">
                Help ambitious tech companies interview fewer people and hire with greater
                confidence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl bg-[color:var(--ink)] p-8 text-white md:p-10">
              <div className="mono-label !text-white/55">Vision</div>
              <p className="mt-4 font-display text-[22px] font-semibold leading-snug tracking-tight sm:text-[26px]">
                A hiring market where every offer is made with evidence and every candidate leaves
                the process better than they entered.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* How we work — principles */}
      <Section tone="canvas" size="lg">
        <SectionHeader
          eyebrow="How we work"
          title={<>Three principles that shape every mandate.</>}
          subtitle="They sound simple. Holding to them, week after week, is the work."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-[color:var(--hairline)] bg-white p-8">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--surface-2)] text-[color:var(--accent-blue)]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-display text-[20px] font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--muted)]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Values */}
      <Section tone="surface" size="lg">
        <SectionHeader
          eyebrow="Values"
          title={<>Six commitments we don't compromise on.</>}
          subtitle="These aren't posters on a wall. Every process we run is measured against them."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--hairline)] sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 60}>
                <div className="group flex h-full flex-col bg-white p-8 transition-colors hover:bg-[color:var(--surface-2)]">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--surface-2)] transition-colors group-hover:bg-[color:var(--accent-blue)] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-display text-[20px] font-semibold tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--muted)]">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <FinalCTA title={<>Work with a team that treats hiring like the decision it is.</>} />
    </>
  );
}
