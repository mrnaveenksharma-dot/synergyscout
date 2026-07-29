import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/Section";
import { industries } from "@/data/site";

type Detail = { trend: string; expertise: string[]; roles: string[] };

const details: Record<string, Detail> = {
  "cloud-devops": {
    trend: "Platform engineering and SRE lead infra compensation growth.",
    expertise: ["AWS · GCP · Azure", "Kubernetes", "Internal dev platforms"],
    roles: ["Head of Platform", "Principal SRE", "Cloud Architect"],
  },
  "ai-ml": {
    trend: "LLM engineering and applied research are the hardest roles to calibrate.",
    expertise: ["LLM & applied ML", "MLOps", "Applied research"],
    roles: ["Head of AI", "Applied Scientist", "ML Platform Engineer"],
  },
  "data-analytics": {
    trend: "Lakehouse and streaming rebuilt around dbt, Snowflake, Databricks.",
    expertise: ["Data engineering", "Analytics engineering", "Streaming"],
    roles: ["Head of Data", "Staff Data Engineer", "BI Architect"],
  },
  "product-engineering": {
    trend: "Senior ICs owning full surfaces, not narrow specialists.",
    expertise: ["Full-stack TS", "Backend Go/Java", "Mobile"],
    roles: ["Staff Engineer", "Engineering Manager", "Mobile Tech Lead"],
  },
  cybersecurity: {
    trend: "AppSec, cloud security and identity are now critical path.",
    expertise: ["AppSec", "Cloud security", "Identity & access"],
    roles: ["Head of Security", "Staff Security Engineer", "IAM Lead"],
  },
  "enterprise-apps": {
    trend: "S/4HANA, Salesforce and ServiceNow drive specialist demand.",
    expertise: ["SAP S/4HANA", "Salesforce", "ServiceNow"],
    roles: ["SAP Solution Architect", "SF Technical Architect", "ServiceNow Lead"],
  },
  "fintech-engineering": {
    trend: "Payments, lending and markets — highest-scrutiny engineering.",
    expertise: ["Payments infra", "Risk & fraud", "Capital markets"],
    roles: ["Head of Payments Eng", "Staff Backend", "Trading Systems Eng"],
  },
  "healthtech-engineering": {
    trend: "Digital health hiring bridges clinical rigour with product craft.",
    expertise: ["FHIR integrations", "SaMD", "Health data"],
    roles: ["VP Engineering", "Staff FHIR Engineer", "Mobile Lead"],
  },
};

export function DomainDepth() {
  const [active, setActive] = useState(0);
  const ind = industries[active];
  const d = details[ind.slug];
  const Icon = ind.icon;

  return (
    <Section tone="canvas" size="lg">
      <SectionHeader eyebrow="Domain depth" title={<>Pick a pod. See what it&nbsp;runs.</>} />

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-16">
        {/* Left: minimal index */}
        <ul className="border-t border-[color:var(--hairline)]">
          {industries.map((it, i) => {
            const isActive = i === active;
            return (
              <li key={it.slug} className="border-b border-[color:var(--hairline)]">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-center gap-5 py-4 text-left transition-colors"
                >
                  <span
                    className={`font-mono text-[11px] tracking-[0.14em] transition-colors ${
                      isActive ? "text-[color:var(--accent-blue)]" : "text-[color:var(--muted)]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display text-[18px] font-semibold tracking-tight transition-colors sm:text-[19px] ${
                      isActive
                        ? "text-[color:var(--ink)]"
                        : "text-[color:var(--muted)] group-hover:text-[color:var(--ink)]"
                    }`}
                  >
                    {it.name}
                  </span>
                  <span
                    aria-hidden
                    className={`ml-auto h-px transition-all duration-500 ${
                      isActive
                        ? "w-10 bg-[color:var(--accent-blue)]"
                        : "w-4 bg-[color:var(--hairline-strong)]"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right: single detail card */}
        <div key={ind.slug} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface)]">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={ind.image}
                alt=""
                width={1280}
                height={1600}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/85 via-[color:var(--ink)]/30 to-transparent"
              />
              <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/25 bg-white/10 text-white backdrop-blur-md">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="font-mono text-[10.5px] tracking-[0.16em] text-white/70">
                      {String(active + 1).padStart(2, "0")} · POD
                    </div>
                    <h3 className="font-display text-[26px] font-semibold tracking-tight text-white sm:text-[30px]">
                      {ind.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
              <div className="sm:col-span-2">
                <p className="text-[16px] leading-[1.5] text-[color:var(--ink-2)] text-pretty">
                  {d.trend}
                </p>
              </div>

              <div>
                <div className="mono-label">Expertise</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {d.expertise.map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-[color:var(--hairline)] bg-[color:var(--canvas)] px-3 py-1 text-[12.5px] text-[color:var(--ink-2)]"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="mono-label">Roles we run</div>
                <ul className="mt-3 space-y-1.5">
                  {d.roles.map((r) => (
                    <li
                      key={r}
                      className="flex items-baseline gap-2 text-[14px] text-[color:var(--ink-2)]"
                    >
                      <ArrowUpRight
                        className="h-3.5 w-3.5 shrink-0 text-[color:var(--accent-blue)]"
                        strokeWidth={2}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
