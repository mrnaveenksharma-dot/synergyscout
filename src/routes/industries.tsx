import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { DomainDepth } from "@/components/sections/DomainDepth";
import { FinalCTA } from "@/components/sections/FinalCTA";

const industryDetail: Record<
  string,
  {
    trends: string;
    challenges: string;
    expertise: string[];
    roles: string[];
  }
> = {
  "cloud-devops": {
    trends:
      "Cloud-native architectures and platform engineering are commanding the sharpest compensation growth in infrastructure hiring.",
    challenges:
      "Finding SREs and platform engineers who combine deep systems thinking with a product mindset.",
    expertise: [
      "AWS / GCP / Azure",
      "Kubernetes & service mesh",
      "Site reliability",
      "Internal developer platforms",
    ],
    roles: ["Head of Platform", "Principal SRE", "DevOps Lead", "Cloud Solutions Architect"],
  },
  "ai-ml": {
    trends:
      "LLM engineering, applied research and MLOps are the fastest-growing segments of tech hiring — and the hardest to calibrate.",
    challenges: "Distinguishing genuine ML depth from prompt-engineering surface work.",
    expertise: ["LLM & applied ML", "MLOps & model serving", "Computer vision", "Applied research"],
    roles: ["Head of AI", "Applied Scientist", "ML Platform Engineer", "Research Engineer"],
  },
  "data-analytics": {
    trends:
      "Streaming, lakehouse and analytics engineering roles are being rebuilt around dbt, Snowflake, Databricks and modern data stacks.",
    challenges: "Balancing warehouse fluency with strong software engineering fundamentals.",
    expertise: [
      "Data engineering",
      "Analytics engineering",
      "Streaming platforms",
      "BI & warehousing",
    ],
    roles: ["Head of Data", "Staff Data Engineer", "Analytics Engineering Lead", "BI Architect"],
  },
  "product-engineering": {
    trends:
      "Product teams are hiring senior ICs who can own full-stack surfaces end-to-end rather than narrow specialists.",
    challenges: "Finding engineers with judgment on tradeoffs — not just framework fluency.",
    expertise: [
      "Full-stack (TS/React/Node)",
      "Backend (Go / Java / Python)",
      "Mobile (iOS / Android)",
      "Design systems",
    ],
    roles: ["Staff Engineer", "Engineering Manager", "Principal Frontend", "Mobile Tech Lead"],
  },
  cybersecurity: {
    trends:
      "Cloud security, application security and identity roles have moved from niche to critical-path in every product org.",
    challenges: "Hiring hands-on security engineers who ship code, not just review it.",
    expertise: [
      "AppSec & product security",
      "Cloud security",
      "Identity & access",
      "GRC and compliance",
    ],
    roles: ["Head of Security", "Staff Security Engineer", "Cloud Security Architect", "IAM Lead"],
  },
  "enterprise-apps": {
    trends:
      "SAP S/4HANA migrations, Salesforce platform work and ServiceNow implementations are driving sustained specialist demand.",
    challenges:
      "Finding architects who understand both the platform and the business process it models.",
    expertise: ["SAP (S/4HANA, ABAP)", "Salesforce (Apex, LWC)", "ServiceNow", "Workday / Oracle"],
    roles: [
      "SAP Solution Architect",
      "Salesforce Technical Architect",
      "ServiceNow Lead",
      "Workday Consultant",
    ],
  },
  "fintech-engineering": {
    trends:
      "Payments, lending and capital-markets platforms are the highest-scrutiny engineering environments in the market.",
    challenges: "Combining engineering rigour with regulatory and risk awareness.",
    expertise: [
      "Payments infrastructure",
      "Risk & fraud platforms",
      "Lending & credit",
      "Capital markets tech",
    ],
    roles: [
      "Head of Payments Eng",
      "Staff Backend (Fintech)",
      "Risk Platform Lead",
      "Trading Systems Engineer",
    ],
  },
  "healthtech-engineering": {
    trends:
      "Digital health platforms and diagnostics are hiring engineers who can bridge clinical rigour with modern product craft.",
    challenges: "Recruiting engineers who understand HIPAA, HL7/FHIR and clinical workflows.",
    expertise: [
      "EHR & FHIR integrations",
      "Digital health apps",
      "Medical devices (SaMD)",
      "Health data platforms",
    ],
    roles: [
      "VP Engineering (Health)",
      "Staff Engineer (FHIR)",
      "Head of Data (Clinical)",
      "Mobile Lead (Health)",
    ],
  },
};

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Tech Domains — Synergy Scout" },
      {
        name: "description",
        content:
          "Specialist recruitment pods across the technology domains we cover — cloud, AI, data, product engineering, security and more.",
      },
      { property: "og:title", content: "Tech Domains — Synergy Scout" },
      { property: "og:description", content: "The technology domains we hire across." },
      { property: "og:url", content: "https://synergyscout.in/industries" },
    ],
    links: [{ rel: "canonical", href: "https://synergyscout.in/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tech Domains"
        title={<>Specialist pods across the technology stack.</>}
        subtitle="Dedicated recruiters with domain fluency, mapped networks and calibrated compensation benchmarks."
      />
      <IndustryGrid compact />

      <DomainDepth />

      <FinalCTA
        title={<>Hiring across the stack? We can help there too.</>}
        subtitle="A single point of contact, coordinated delivery across every domain you need."
      />
    </>
  );
}
