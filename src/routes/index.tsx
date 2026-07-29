import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { LogoWall } from "@/components/sections/LogoWall";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { WhyGrid } from "@/components/sections/WhyGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synergy Scout — Building high-performing tech teams" },
      {
        name: "description",
        content:
          "Synergy Scout is a specialist technology recruitment firm helping companies build exceptional engineering, product, data and IT teams.",
      },
      { property: "og:title", content: "Synergy Scout — Building high-performing tech teams" },
      {
        property: "og:description",
        content:
          "A specialist technology recruitment firm connecting companies with exceptional engineering, product, data and IT talent.",
      },
      { property: "og:url", content: "https://synergyscout.in/" },
    ],
    links: [{ rel: "canonical", href: "https://synergyscout.in/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="snap-home">
      <Hero id="home" />
      <LogoWall />
      <ServiceGrid />
      <IndustryGrid />
      <WhyGrid />
      <ProcessTimeline />
      <InsightsPreview id="insights" />
      <FinalCTA id="contact" />
    </div>
  );
}
