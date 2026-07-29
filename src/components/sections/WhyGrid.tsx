import { differentiators } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

export function WhyGrid() {
  return (
    <Section id="why" tone="canvas" size="lg">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span className="mono-label">Why Synergy Scout</span>
          <h2 className="mt-4 font-display text-[40px] font-semibold leading-[1.05] tracking-tight sm:text-[56px] text-balance">
            The advantage isn't the network. It's how we use it.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[color:var(--muted)] text-pretty">
            Four commitments that shape every mandate we take on — from the first conversation to
            the final decision.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--hairline)]">
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.title} delay={i * 80}>
                <div className="group flex gap-6 bg-white p-8 transition-colors hover:bg-[color:var(--surface)]">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--ink)] text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-[19px] font-semibold tracking-tight">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--muted)]">
                      {d.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
