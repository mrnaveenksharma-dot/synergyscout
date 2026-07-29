import { talentTypes } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function LogoWall() {
  const doubled = [...talentTypes, ...talentTypes];
  return (
    <section className="relative border-y border-[color:var(--hairline)] bg-[color:var(--surface)] py-16">
      <Container>
        <Reveal>
          <p className="mono-label text-center">Talent we place across the stack</p>
        </Reveal>
      </Container>
      <div className="group mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 pr-14 group-hover:[animation-play-state:paused]">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-[22px] font-semibold tracking-tight text-[color:var(--ink)]/40 transition-all duration-300 hover:text-[color:var(--accent-blue)]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
