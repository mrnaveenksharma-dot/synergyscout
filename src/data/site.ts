/**
 * Central content source — replace values here to update the site.
 * Structured for future CMS migration (Sanity, Contentful, etc.).
 */
import {
  Users,
  Briefcase,
  Target,
  Layers,
  Building2,
  Cpu,
  Stethoscope,
  Landmark,
  Factory,
  ShoppingBag,
  HardHat,
  Wrench,
  Truck,
  Compass,
  Gauge,
  Handshake,
  Clock3,
} from "lucide-react";
import indTechnology from "@/assets/ind-technology.jpg";
import indHealthcare from "@/assets/ind-healthcare.jpg";
import indFinance from "@/assets/ind-finance.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indRetail from "@/assets/ind-retail.jpg";
import indEngineering from "@/assets/ind-engineering.jpg";
import indConstruction from "@/assets/ind-construction.jpg";
import indLogistics from "@/assets/ind-logistics.jpg";
import ins1 from "@/assets/ins-1.jpg";
import ins2 from "@/assets/ins-2.jpg";
import ins3 from "@/assets/ins-3.jpg";
import ins4 from "@/assets/ins-4.jpg";
import ins5 from "@/assets/ins-5.jpg";
import ins6 from "@/assets/ins-6.jpg";
import ins7 from "@/assets/ins-7.jpg";
import ins8 from "@/assets/ins-8.jpg";
import ins9 from "@/assets/ins-9.jpg";
import ins10 from "@/assets/ins-10.jpg";
import ins11 from "@/assets/ins-11.jpg";
import ins12 from "@/assets/ins-12.jpg";

export const site = {
  name: "Synergy Scout",
  tagline: "Talent Aligned",
  domain: "synergyscout.in",
  url: "https://synergyscout.in",
  email: "hello@synergyscout.in",
  privacyEmail: "hello@synergyscout.in",
  linkedin: "",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "technical-hiring",
    title: "Technical Hiring",
    icon: Cpu,
    short: "Engineers, architects and platform specialists — evaluated on code, systems and craft.",
    long: "Full-stack, backend, frontend, mobile, DevOps, SRE, cloud, data and ML engineers. Every shortlist arrives with a technical read on depth, breadth and how the candidate thinks under pressure.",
    outcomes: [
      "Live coding + system-design signal",
      "Stack-matched pre-screening",
      "Shortlist within 10 working days",
    ],
    ideal: "Product and platform teams hiring across the engineering stack.",
  },
  {
    slug: "functional-it-hiring",
    title: "Functional IT Hiring",
    icon: Layers,
    short: "Product managers, business analysts, ERP, CRM and enterprise application specialists.",
    long: "Product management, UX, business/systems analysts, SAP, Oracle, Salesforce, ServiceNow, Workday and adjacent functional consultants. We map domain depth to the module and industry, not just the keyword.",
    outcomes: [
      "Module- and domain-matched fit",
      "Certification and project validation",
      "Client-side and consulting talent",
    ],
    ideal: "Enterprise IT, ERP transformations and product organisations.",
  },
  {
    slug: "it-support-hiring",
    title: "IT Support & Operations",
    icon: Briefcase,
    short: "Helpdesk, NOC, infrastructure and IT operations talent, deployed fast.",
    long: "L1–L3 support, service desk, desktop, network operations, infrastructure engineers, incident and change managers. Shift-ready, ITIL-aligned, and screened for the ticket volume you actually run.",
    outcomes: [
      "24×7 shift coverage sourcing",
      "ITIL and vendor-cert validated",
      "Onboard within 5 working days",
    ],
    ideal: "GCCs, managed service providers and enterprise IT ops.",
  },
  {
    slug: "leadership-tech-search",
    title: "Leadership Tech Search",
    icon: Compass,
    short: "CTOs, VPs of Engineering, Heads of Product, Data and Platform.",
    long: "Retained search for senior technology leadership across product, engineering, data and infrastructure. Confidential mapping, structured referencing and calibrated tech-leadership benchmarking.",
    outcomes: ["Partner-led delivery", "Global technology mapping", "Confidential, always"],
    ideal: "Boards and CEOs building technology leadership benches.",
  },
  {
    slug: "contract-it-staffing",
    title: "Contract IT Staffing",
    icon: Users,
    short: "Compliant IT contractors for projects, migrations and capacity spikes.",
    long: "Payrolled technology contractors — engineers, testers, consultants — for defined engagements. We handle compliance, onboarding and rotation while you keep the delivery moving.",
    outcomes: [
      "Vetted stack-matched talent",
      "Statutory compliance managed",
      "Contract-to-hire pathway",
    ],
    ideal: "Teams scaling for launches, cloud migrations and product releases.",
  },
  {
    slug: "tech-rpo",
    title: "Technology RPO",
    icon: Target,
    short: "Embedded tech-recruitment pods that plug into your ATS and hiring bar.",
    long: "Dedicated pods that own sourcing, technical screening and coordination for engineering-heavy hiring plans. Weekly reporting, quarterly reviews, transparent per-hire economics.",
    outcomes: [
      "Pods sized to your hiring plan",
      "Your ATS, your workflow",
      "Transparent unit economics",
    ],
    ideal: "Tech organisations with recurring engineering hiring needs.",
  },
] as const;

export const industries = [
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    icon: Cpu,
    blurb: "AWS, GCP, Azure, Kubernetes, SRE and platform engineering.",
    image: indTechnology,
    tint: "from-[#0b1220]/85 via-[#0b1220]/40 to-transparent",
  },
  {
    slug: "ai-ml",
    name: "AI & Machine Learning",
    icon: Compass,
    blurb: "LLM engineering, MLOps, applied research, computer vision.",
    image: indEngineering,
    tint: "from-[#050810]/85 via-[#050810]/40 to-transparent",
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    icon: Layers,
    blurb: "Data engineering, warehousing, streaming, BI and analytics.",
    image: indManufacturing,
    tint: "from-[#1a0a04]/85 via-[#1a0a04]/40 to-transparent",
  },
  {
    slug: "product-engineering",
    name: "Product Engineering",
    icon: Wrench,
    blurb: "Full-stack, frontend, backend and mobile for product teams.",
    image: indRetail,
    tint: "from-[#2a1610]/80 via-[#2a1610]/35 to-transparent",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    icon: HardHat,
    blurb: "AppSec, SecOps, cloud security, IAM and GRC.",
    image: indConstruction,
    tint: "from-[#1a1512]/85 via-[#1a1512]/40 to-transparent",
  },
  {
    slug: "enterprise-apps",
    name: "Enterprise Applications",
    icon: Factory,
    blurb: "SAP, Salesforce, ServiceNow, Workday, Oracle specialists.",
    image: indLogistics,
    tint: "from-[#050914]/85 via-[#050914]/40 to-transparent",
  },
  {
    slug: "fintech-engineering",
    name: "Fintech Engineering",
    icon: Landmark,
    blurb: "Payments, lending, risk and capital-markets platforms.",
    image: indFinance,
    tint: "from-[#0f0a1f]/85 via-[#0f0a1f]/40 to-transparent",
  },
  {
    slug: "healthtech-engineering",
    name: "Healthtech Engineering",
    icon: Stethoscope,
    blurb: "EHR platforms, medical devices, digital health products.",
    image: indHealthcare,
    tint: "from-[#062b28]/85 via-[#062b28]/40 to-transparent",
  },
] as const;

export const talentTypes = [
  "Full-Stack Engineers",
  "Site Reliability",
  "Cloud Architects",
  "DevOps",
  "Data Engineers",
  "ML Engineers",
  "Product Managers",
  "UX Designers",
  "Security Engineers",
  "SAP Consultants",
  "Salesforce Architects",
  "QA Automation",
  "Platform Engineers",
  "Mobile Developers",
  "Solution Architects",
  "Engineering Leaders",
] as const;

export const differentiators = [
  {
    icon: Target,
    title: "Precision hiring",
    body: "Every shortlist arrives with the evidence a hiring manager needs to decide — not a stack of resumes.",
  },
  {
    icon: Layers,
    title: "Industry specialists",
    body: "Sector-focused pods that know the roles, the compensation, and the people already doing the work well.",
  },
  {
    icon: Clock3,
    title: "Clear momentum",
    body: "Agreed timelines, weekly progress and a focused path from role brief to decision.",
  },
  {
    icon: Handshake,
    title: "Long-term thinking",
    body: "We optimise for the quality of the decision and the experience of everyone involved.",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    body: "Kickoff with hiring managers and leadership. We rebuild the role brief with success profile, must-haves and deal-breakers.",
  },
  {
    n: "02",
    title: "Strategy",
    body: "Market map, target companies, compensation benchmark and outreach narrative. Agreed before we approach anyone.",
  },
  {
    n: "03",
    title: "Source",
    body: "Direct outreach, referrals and a warmed pipeline. Every candidate is engaged, not just contacted.",
  },
  {
    n: "04",
    title: "Select",
    body: "Structured screening with evidence against your rubric. Shortlist arrives with rationale, risks and reference themes.",
  },
  {
    n: "05",
    title: "Hire",
    body: "Interview coordination, offer strategy, closing support and structured onboarding check-ins for the first ninety days.",
  },
] as const;

export const metrics = [
  { value: 15, suffix: "+", label: "Years of technology hiring experience" },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

// Keep this empty until real, permissioned testimonials are available.
export const testimonials: Testimonial[] = [];

export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] };

export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  date: string;
  image: string;
  author: string;
  authorRole: string;
  body: InsightBlock[];
};

export const insights: Insight[] = [
  {
    slug: "shortlist-explained",
    category: "Recruitment",
    title: "Why every shortlist should come with reasons",
    excerpt:
      "The most expensive thing in hiring isn't the fee — it's the interview time you spend on the wrong people.",
    readingTime: "6 min read",
    date: "Nov 2025",
    image: ins1,
    author: "Synergy Scout Editorial",
    authorRole: "Recruitment & technology insights",
    body: [
      {
        type: "p",
        text: "Every hiring manager recognises the pain of a bad shortlist. Five names arrive on a Friday, four of them are wrong for reasons that were knowable before the introduction, and by Wednesday the panel has burned twelve hours confirming what a five-minute call would have surfaced. The fee is not what makes that expensive. The interview time is.",
      },
      { type: "h", text: "The industry default is resume forwarding" },
      {
        type: "p",
        text: "Most recruitment vendors optimise for volume because volume is what their model rewards. Sourcers are paid per submission, account managers are paid per interview, and the shortlist becomes a filter you are expected to run yourself. The vendor's job ends the moment the CV lands in your ATS.",
      },
      {
        type: "p",
        text: "That model made sense when the constraint was finding candidates at all. In technology hiring today, the constraint is almost always the opposite: too many applicants, too few of whom are actually a fit, and no shared vocabulary between the recruiter and the hiring manager for what fit even means.",
      },
      { type: "h", text: "What an explained shortlist looks like" },
      {
        type: "p",
        text: "We define an explained shortlist as a document a hiring manager could read in ten minutes and walk into an interview loop with a point of view. It has four things, always, in the same order.",
      },
      {
        type: "list",
        items: [
          "A one-line role thesis — the specific problem this hire will own in the first six months, agreed with the hiring manager at kickoff.",
          "Per-candidate rationale — three sentences on why this person cleared the bar, tied directly to the thesis. Not their resume rewritten.",
          "Honest risks — the two or three things this candidate will need help with, and what we asked them about it.",
          "Reference themes — what former managers said when we probed for weaknesses, patterns not quotes.",
        ],
      },
      { type: "h", text: "The compounding effect" },
      {
        type: "p",
        text: "The first mandate this changes almost nothing. By the third mandate, the interview loop is measurably faster because panellists arrive with a shared read on the candidate. By the tenth, you have a written record of how your hiring bar has moved, which is the single most valuable artefact a talent function can own and the one almost no one has.",
      },
      {
        type: "quote",
        text: "The shortlist is not the beginning of the process. It is the end of the recruiter's process, and it should read like it.",
      },
      {
        type: "p",
        text: "If your current partner cannot show you a sample of what their explained shortlist looks like — not a case study, an actual redacted document — that is your answer about how they work. The good ones will send it before you finish asking.",
      },
    ],
  },
  {
    slug: "sourcing-without-spam",
    category: "Recruitment",
    title: "Sourcing without spam: how to write outreach engineers actually read",
    excerpt:
      "Reply rates in Indian tech are collapsing not because the market is bad, but because outreach has become indistinguishable from noise.",
    readingTime: "5 min read",
    date: "Oct 2025",
    image: ins2,
    author: "Synergy Scout Editorial",
    authorRole: "Recruitment & technology insights",
    body: [
      {
        type: "p",
        text: "Look at the inbox of any senior backend engineer in Bengaluru on a Monday morning. Between six and fourteen recruiter messages, all opening with 'Hope you are doing well', all promising a 'great opportunity', almost none mentioning a company name in the first line. The reply rate on this outreach is now below 3% at most firms we benchmark. Ten years ago it was over 20%.",
      },
      { type: "h", text: "The market didn't change. The signal did." },
      {
        type: "p",
        text: "Engineers still change jobs. The average tenure at growth-stage tech companies in India is 28 months, roughly what it was in 2019. What changed is the effort-to-signal ratio in the messages they receive. When every message looks the same, none of them are worth replying to, and the good ones lose because they are drowning in the bad.",
      },
      { type: "h", text: "Four rules we hold every outreach to" },
      {
        type: "list",
        items: [
          "Name the company in the subject line. Anonymity signals the recruiter is fishing, not hiring.",
          "One sentence on why this person specifically — a paper, a repo, a talk, a company they scaled through. Generic flattery is worse than none.",
          "The stack and the problem, not the perks. Senior engineers screen for the work.",
          "A single question, not a calendar link. Optionality respects the reader; a Calendly link demands their time before they've decided.",
        ],
      },
      { type: "h", text: "What good looks like" },
      {
        type: "p",
        text: "The best outreach we've written in the last quarter was 74 words long. It named the CTO, referenced a specific migration the candidate had led at their previous company, described the equivalent problem in the new role in one sentence, and asked a single question about their current tooling. Reply rate on that campaign was 41% against a market baseline of 4%.",
      },
      {
        type: "p",
        text: "You cannot fake this at volume. That is the point. Outreach that works costs the recruiter time, and the recruiter's time is what the candidate is actually evaluating when they decide whether to reply.",
      },
      {
        type: "quote",
        text: "If you would not be willing to send the same message to your best friend from your last team, do not send it to a stranger.",
      },
    ],
  },
  {
    slug: "interview-loop-design",
    category: "Hiring",
    title: "Designing an interview loop that actually predicts performance",
    excerpt: "Signals to add, rituals to remove, and how to keep panels calibrated as you scale.",
    readingTime: "8 min read",
    date: "Aug 2025",
    image: ins4,
    author: "Synergy Scout Editorial",
    authorRole: "Recruitment & technology insights",
    body: [
      {
        type: "p",
        text: "Most interview loops we audit are archaeological. Someone added a technical round in 2019, a culture round in 2020, a bar-raiser in 2022, and by 2024 the loop is six hours long and no one can explain what any single round is designed to test. The result is a process that feels rigorous and predicts almost nothing.",
      },
      { type: "h", text: "Start from the failure modes, not the competencies" },
      {
        type: "p",
        text: "The competency-first approach — leadership, ownership, craft, communication — sounds sensible and produces mush. Every panellist rates every candidate a 3 out of 5 on everything, and the decision defaults to the loudest voice in the debrief.",
      },
      {
        type: "p",
        text: "The failure-mode approach starts with a different question: in the last five hires at this level who did not work out, what specifically went wrong? Usually it is two or three recurring things. Design one round per failure mode. Every round now has a job, and the panel knows what a signal looks like.",
      },
      { type: "h", text: "The four rounds we recommend for senior IC engineering hires" },
      {
        type: "list",
        items: [
          "Technical depth — a real problem from your codebase, not a leetcode puzzle. Test the reasoning, not the recall.",
          "System design — a scenario the candidate would actually face in the first quarter. Focus on the trade-offs they surface unprompted.",
          "Cross-functional collaboration — a peer interview, not a hiring manager one. Peers detect the patterns managers miss.",
          "Reference-informed close — a final loop with the hiring manager after the panel has read the reference themes. Ask the specific questions the references opened up.",
        ],
      },
      { type: "h", text: "Calibration is a ritual, not an event" },
      {
        type: "p",
        text: "The single highest-ROI hour a talent team can spend is the weekly calibration meeting. Not to review candidates — to review interviewers. Read the last five debriefs from each panellist and ask whether the signal cited would have been visible to another interviewer. The panellists who cannot cite specific signal get coached, then retired from the loop. This is how a hiring bar stays honest as headcount grows.",
      },
      {
        type: "quote",
        text: "A loop that produces a hire in three rounds with a clear read beats a loop that produces the same hire in six with a muddled one, every time.",
      },
    ],
  },
  {
    slug: "debrief-that-decides",
    category: "Hiring",
    title: "The 15-minute debrief that decides most of your hires",
    excerpt:
      "Panellists write independent reads before the debrief, or the debrief becomes a popularity contest. Here's the protocol we use.",
    readingTime: "5 min read",
    date: "Sep 2025",
    image: ins3,
    author: "Synergy Scout Editorial",
    authorRole: "Recruitment & technology insights",
    body: [
      {
        type: "p",
        text: "The debrief is the meeting where hiring bars die. Someone senior speaks first, someone junior adjusts their read, and by the end of fifteen minutes the room has manufactured a consensus that no individual would have written down on their own. Then the hire underperforms and everyone is surprised.",
      },
      { type: "h", text: "The independent-read rule" },
      {
        type: "p",
        text: "No debrief begins until every panellist has submitted a written read: hire / no hire, one sentence of rationale, one specific signal they observed. Submitted in writing, in a channel everyone can see, before the meeting opens. This one rule eliminates roughly 80% of the anchoring problem.",
      },
      { type: "h", text: "The structure that follows" },
      {
        type: "list",
        items: [
          "Read the written verdicts aloud in reverse seniority order. Junior voices go first, always.",
          "Discuss disagreements, not agreements. Time is finite; three yeses do not need debating.",
          "Name the risk out loud. Every hire has one. If no one can name it, the panel didn't probe hard enough.",
          "Decide, don't defer. 'Let's bring them back for another round' is usually a no in disguise. Say the no.",
        ],
      },
      { type: "h", text: "What to do when the panel is split" },
      {
        type: "p",
        text: "A 3–2 split is not a mandate to hire on the strength of the majority. It is a signal that the loop did not test the right thing. Either add one targeted round designed to resolve the specific disagreement, or pass. Never hire hoping the risk resolves itself in onboarding.",
      },
      {
        type: "quote",
        text: "The best hiring managers we work with are boring in debriefs. They ask three questions, restate what they heard, and decide. Meetings that feel exciting usually produce regrets.",
      },
    ],
  },
  {
    slug: "closing-senior-hires",
    category: "Leadership",
    title: "Closing senior hires without losing your position",
    excerpt:
      "A practical framework for offer strategy when the candidate has three competing options.",
    readingTime: "7 min read",
    date: "Sep 2025",
    image: ins5,
    author: "Synergy Scout Editorial",
    authorRole: "Recruitment & technology insights",
    body: [
      {
        type: "p",
        text: "Senior candidates almost never accept the first number. That is not a failure of your offer; it is a feature of the market they operate in. The mistake most companies make is treating the counter as a negotiation, when it is actually a diagnostic — the candidate is telling you what they are worried about, and the number is usually the least of it.",
      },
      { type: "h", text: "What the counter actually means" },
      {
        type: "p",
        text: "In roughly seven of ten cases where a senior candidate counters, the underlying concern is not compensation. It is scope, reporting line, remote flexibility, equity refresh cadence, or a specific person on the team. If you respond to the number without diagnosing the concern, you will match the number and still lose the candidate.",
      },
      { type: "h", text: "The three-conversation close" },
      {
        type: "list",
        items: [
          "Conversation one, the read: 'Before we talk about the offer, what would make this a decision you regret in six months?' Listen for what they name first.",
          "Conversation two, the address: come back with a specific answer to the specific concern. If it is scope, put it in writing from the hiring manager. If it is a person, arrange the conversation.",
          "Conversation three, the number: only once the qualitative concerns are addressed. Offers made in this order are more likely to land well than offers made in the reverse order.",
        ],
      },
      { type: "h", text: "Never negotiate against yourself" },
      {
        type: "p",
        text: "The single most expensive habit we see is companies improving their own offer without the candidate having asked. It signals that the first number was not honest, which teaches the candidate that every subsequent number is also negotiable. Make one strong offer, explain how you arrived at it, and then hold the line unless the candidate returns with a specific competing number in writing.",
      },
      {
        type: "quote",
        text: "The best offers we've seen close were not the highest. They were the ones where the candidate could describe, unprompted, exactly what they were being hired to do.",
      },
    ],
  },
  {
    slug: "first-90-days",
    category: "Leadership",
    title: "What the first 90 days should look like for a senior tech hire",
    excerpt:
      "The onboarding you design tells the candidate more about your company than the interview did. Most companies waste this signal.",
    readingTime: "6 min read",
    date: "Aug 2025",
    image: ins6,
    author: "Synergy Scout Editorial",
    authorRole: "Recruitment & technology insights",
    body: [
      {
        type: "p",
        text: "The strongest predictor of whether a senior hire will still be at the company at eighteen months is not the interview process, the offer, or even the manager relationship. It is the shape of the first ninety days. Companies that design this deliberately retain senior hires at nearly twice the rate of companies that do not.",
      },
      { type: "h", text: "The three phases that actually matter" },
      {
        type: "list",
        items: [
          "Days 1–30 — listening tour. The hire's only deliverable is a written read of the team, the codebase, and the top three problems as they see them. No launches, no reorganisations, no hires.",
          "Days 31–60 — one visible win. A single scoped problem the hire owns end-to-end, chosen with the manager. It signals to the team that the hire ships, and to the hire that the company trusts their judgment.",
          "Days 61–90 — the plan. A written six-month plan the hire presents to their manager and one skip level. Not aspirational; specific commitments with named risks.",
        ],
      },
      { type: "h", text: "The check-ins that actually work" },
      {
        type: "p",
        text: "Weekly one-on-ones with the manager are table stakes. What separates the companies with strong retention is a structured check-in with a peer at day 30, a skip-level at day 60, and an external coach or mentor at day 90. Each of these surfaces different signal, and none of them replace the others.",
      },
      { type: "h", text: "What to watch for" },
      {
        type: "p",
        text: "The single strongest early-warning sign of a senior hire in trouble is not what they say — it is what they stop saying. When the questions in the one-on-one go from specific and probing to general and polite, the hire has decided the environment does not reward candour. That decision is almost impossible to reverse without an intervention from the manager's manager.",
      },
      {
        type: "quote",
        text: "Onboarding is the second interview. The candidate is deciding whether to stay, and they are deciding with the same rigour they used to decide whether to join.",
      },
    ],
  },
  {
    slug: "founder-first-recruiter",
    category: "Career Advice",
    title: "The first recruiter a founder should hire",
    excerpt: "It isn't the sourcer. Here's the profile that unlocks the next 30 hires.",
    readingTime: "5 min read",
    date: "Jul 2025",
    image: ins7,
    author: "Synergy Scout Editorial",
    authorRole: "Recruitment & technology insights",
    body: [
      {
        type: "p",
        text: "Almost every founder we advise makes the same mistake with their first recruitment hire. They see a hiring backlog, assume the constraint is sourcing capacity, and hire a sourcer. Six months later the pipeline is full, the hiring managers are exhausted, the offer accept rate is below 50%, and the founder wonders why the investment did not compound.",
      },
      { type: "h", text: "The constraint is almost never sourcing" },
      {
        type: "p",
        text: "At sub-50-headcount, the constraint is the coherence of the hiring process itself. Job descriptions are inconsistent, interview loops are ad hoc, offers are negotiated by whoever happens to be free, and no one owns the candidate experience end to end. A sourcer walks into that environment and pours water into a leaky bucket.",
      },
      { type: "h", text: "The right first hire" },
      {
        type: "p",
        text: "The first recruitment hire at a growth-stage company should be a talent partner, not a sourcer. Specifically, someone who has been an in-house recruiter at a company that grew through the 50-to-200 stage, who has closed at least fifteen senior hires personally, and who is comfortable telling a founder that a specific requisition is not ready to open.",
      },
      {
        type: "list",
        items: [
          "They own the process, not just the pipeline.",
          "They coach hiring managers, not just source candidates.",
          "They kill bad requisitions before they burn calendar time.",
          "They build the calibration ritual that makes every subsequent recruiter effective.",
        ],
      },
      { type: "h", text: "The signal to look for" },
      {
        type: "p",
        text: "In the interview, ask them to describe a hire they walked away from at their last company. Not one they lost — one they killed. The answer tells you whether they have the confidence to protect the bar under pressure, which is the single trait that determines whether the next thirty hires compound or fragment your culture.",
      },
      {
        type: "quote",
        text: "The right first recruiter will save you from the second, third, and fourth hires you were about to make wrong.",
      },
    ],
  },
  {
    slug: "engineer-changing-jobs",
    category: "Career Advice",
    title: "For engineers: how to evaluate an offer without over-optimising for comp",
    excerpt:
      "Every job change is a bet on four variables. Comp is one of them, and it's rarely the one you regret in year two.",
    readingTime: "6 min read",
    date: "Jun 2025",
    image: ins8,
    author: "Synergy Scout Editorial",
    authorRole: "Recruitment & technology insights",
    body: [
      {
        type: "p",
        text: "We debrief roughly two hundred senior engineering hires a year. The regret pattern is remarkably consistent: at year one, engineers who changed jobs are pleased about the compensation. At year two, they wish they had asked more questions about scope, manager, and codebase health, in that order.",
      },
      { type: "h", text: "The four variables that actually matter" },
      {
        type: "list",
        items: [
          "Scope — the specific system or product surface you will own. A vague answer here is the single strongest predictor of regret.",
          "Manager — the person you will report to for the next 18 months. Their reputation, their retention record, their willingness to be candid in the interview.",
          "Codebase — the health of the systems you will inherit. Ask to see a real PR review, not a marketing tour.",
          "Compensation — the number, the structure, the vesting cliff, the refresh cadence. It matters, and it matters less than the first three.",
        ],
      },
      { type: "h", text: "The questions to ask before you accept" },
      {
        type: "p",
        text: "The best diagnostic question we have found for evaluating a new manager: 'Tell me about someone on your team you promoted in the last twelve months. What did you do specifically to make that promotion possible?' A manager who cannot answer this in specifics has not been paying attention to their team; a manager who can is showing you their operating model.",
      },
      { type: "h", text: "The bar for leaving" },
      {
        type: "p",
        text: "Do not leave for a 20% raise. The switching cost — the six-month ramp, the lost equity vest, the political capital you had built — is roughly equal to a 20% raise in the year one economics, and you take on new risk. Leave for a step-change in scope, for a manager you have wanted to work for, or for a company whose next chapter you actively want to be part of. If none of those are true, negotiate where you are.",
      },
      {
        type: "quote",
        text: "The best career moves compound over five years. The best compensation moves compound over eighteen months. Choose accordingly.",
      },
    ],
  },
  {
    slug: "engineering-market-2026",
    category: "Industry Trends",
    title: "India engineering talent market: what changed in 2026",
    excerpt:
      "Comp bands, movement patterns, and the roles that are quietly getting harder to close.",
    readingTime: "9 min read",
    date: "Oct 2025",
    image: ins9,
    author: "Synergy Scout Editorial",
    authorRole: "Recruitment & technology insights",
    body: [
      {
        type: "p",
        text: "We map roughly 40,000 senior technology professionals across India each quarter. The 2026 data shows a market that looks quieter on the surface than 2022 and is structurally harder to hire in. Volumes are down, but the roles that are open are meaningfully more competitive.",
      },
      { type: "h", text: "Comp bands have stopped inflating, but the ceiling has moved" },
      {
        type: "p",
        text: "Median compensation for senior IC engineers in Bengaluru is flat year on year for the first time since 2019. What changed is the top of the band: the 90th percentile has moved up 22%, driven almost entirely by AI infrastructure roles at a small number of well-funded companies. If you are hiring for those roles, the market you are in is not the median market.",
      },
      { type: "h", text: "Movement patterns have shifted from GCC to product" },
      {
        type: "list",
        items: [
          "GCC-to-GCC moves fell 31% year on year as compensation converged.",
          "GCC-to-product moves rose 18%, driven by a maturing product ecosystem in India.",
          "Startup-to-startup moves fell 24% as the funding environment normalised.",
          "Startup-to-enterprise moves are becoming a more visible pattern in technology hiring.",
        ],
      },
      { type: "h", text: "The roles that got quietly harder" },
      {
        type: "p",
        text: "Three categories are now materially harder to close than the market realises. Senior ML infrastructure engineers with production LLM experience — under 900 in India by our count, and 60% not open to conversations. Staff-level platform engineers with multi-region cloud scars — supply constrained by the small number of Indian companies that operate at that scale. Product-minded engineering managers who have shipped consumer products at scale — a supply issue that predates 2026 and is not resolving.",
      },
      { type: "h", text: "What this means for hiring plans" },
      {
        type: "p",
        text: "Requisitions in these three categories should be planned with a 12-to-16 week time-to-hire, not the six-to-eight week baseline most talent teams still assume. Attempts to compress the timeline result in one of two outcomes: the role stays open longer, or the bar quietly drops. Neither serves the team.",
      },
      {
        type: "quote",
        text: "The Indian tech talent market in 2026 is not softer. It is more segmented, and the segments do not behave like each other.",
      },
    ],
  },
  {
    slug: "gcc-flight-to-quality",
    category: "Industry Trends",
    title: "The GCC flight to quality: why the next wave will look different",
    excerpt:
      "GCC hiring in India is entering a phase where scale is no longer the differentiator. Depth is.",
    readingTime: "7 min read",
    date: "Sep 2025",
    image: ins10,
    author: "Synergy Scout Editorial",
    authorRole: "Recruitment & technology insights",
    body: [
      {
        type: "p",
        text: "Global Capability Centres in India crossed 1,700 by early 2026, employing over 1.9 million professionals. The story that gets told about GCCs is still the 2015 story: cost arbitrage, scale, back-office lift. That story has been over for at least three years, and the companies that have not updated their thesis are quietly falling behind.",
      },
      { type: "h", text: "The new GCC thesis" },
      {
        type: "p",
        text: "The leading GCCs today are not the largest. They are the ones that own end-to-end product surfaces, run engineering leadership out of India, and repatriate talent back to headquarters rather than the other way around. The differentiator has shifted from headcount to strategic weight.",
      },
      { type: "h", text: "What this means for talent strategy" },
      {
        type: "list",
        items: [
          "Hiring is now product-led. Engineering leaders are recruited before the roadmap, not after.",
          "Location strategy is fragmenting. Bengaluru remains dominant for platform; Hyderabad is winning data; Pune is quietly winning embedded systems.",
          "Retention beats acquisition. The GCCs with the strongest 24-month retention are outperforming those with the fastest hiring machines.",
          "Leadership benches must be built, not imported. Time-to-productivity for expat leadership in India is now longer than for local leadership, reversing the historical pattern.",
        ],
      },
      { type: "h", text: "The competitive squeeze" },
      {
        type: "p",
        text: "The talent pool for senior GCC leadership — VPs and above with fifteen-plus years and a track record of shipping to global standards — is small enough that we can count it. In our internal market map, there are approximately 4,200 such leaders in India today. GCC expansion plans announced for 2026 alone will require another 900. The math does not work without either a serious investment in developing the next layer, or a step change in the willingness to hire non-obvious profiles.",
      },
      {
        type: "quote",
        text: "The GCCs that will lead in 2028 are the ones building leadership benches today. The ones that treat this quarter's requisitions as the strategy are already behind.",
      },
    ],
  },
  {
    slug: "responsible-ai-in-hiring",
    category: "Technology",
    title: "Responsible AI in hiring: what we use, what we don't",
    excerpt: "Our operating rules for AI assistance across sourcing, screening and coordination.",
    readingTime: "6 min read",
    date: "Jun 2025",
    image: ins11,
    author: "Synergy Scout Editorial",
    authorRole: "Recruitment & technology insights",
    body: [
      {
        type: "p",
        text: "The AI-in-hiring conversation has become polarised in a way that is not helpful to anyone. On one side, vendors selling autonomous screening agents. On the other, blanket policies banning any AI use in the recruitment workflow. Neither is a serious position. We have spent two years developing an operating model that treats AI as a tool with specific jobs, boundaries, and audit trails.",
      },
      { type: "h", text: "Where we use AI" },
      {
        type: "list",
        items: [
          "Sourcing signal enrichment — surfacing public information about candidates we would have found manually, faster. Never as the sole basis for outreach.",
          "Draft screening notes — AI-generated summaries of interview transcripts that a human recruiter reviews and rewrites before the candidate ever appears in a shortlist.",
          "Coordination — scheduling, reminders, and status updates. The parts of the job humans do worst and machines do best.",
          "Market benchmarking — pattern detection across compensation and movement data, always audited by a researcher before it reaches a client.",
        ],
      },
      { type: "h", text: "Where we do not use AI" },
      {
        type: "list",
        items: [
          "Never for shortlisting. The decision to include or exclude a candidate is made by a human recruiter who can be named in the shortlist document.",
          "Never for reference calls. The signal in a reference is in the pauses and the specifics; both are invisible to an AI.",
          "Never for candidate rejection communication. If we cannot spare the two minutes to write a real message, we do not deserve the trust for the next mandate.",
          "Never for scoring candidates against protected characteristics, directly or indirectly. This is a bright line that requires actual audit, not just intent.",
        ],
      },
      { type: "h", text: "The audit trail" },
      {
        type: "p",
        text: "Every AI-assisted step in our workflow is logged with the model used, the prompt, the human reviewer, and the outcome. A client can request the audit trail for any mandate at any time. We have been asked for it exactly three times in two years, but the existence of the audit is what makes the rest of the policy real.",
      },
      {
        type: "quote",
        text: "Responsible AI in hiring is not a philosophical position. It is an operating manual, and if you cannot write it down in one page, you are probably not being responsible.",
      },
    ],
  },
  {
    slug: "ai-resume-noise",
    category: "Technology",
    title: "The AI-resume flood: how to screen when every application looks perfect",
    excerpt:
      "Applications are up 4x, quality is flat, and traditional screening signal is collapsing. Here's what still works.",
    readingTime: "5 min read",
    date: "May 2025",
    image: ins12,
    author: "Synergy Scout Editorial",
    authorRole: "Recruitment & technology insights",
    body: [
      {
        type: "p",
        text: "The average tech job posting in India now receives 340 applications in the first 72 hours, up from 82 in early 2023. The share of those applications that are AI-generated, AI-optimised, or in some cases AI-fabricated is somewhere between 60% and 80%. The traditional signal — keyword match, formatting quality, cover letter effort — is now noise.",
      },
      { type: "h", text: "The signals that still work" },
      {
        type: "list",
        items: [
          "Specificity of impact. AI still writes in generalities. A resume that names the specific system, the specific metric, and the specific timeframe is almost always human-written and worth reading.",
          "Coherence across the arc. AI-generated resumes optimise each role individually. Human-written resumes tell a story where each role builds on the last.",
          "The public trail. GitHub, blog posts, conference talks, open-source PRs — inputs that require multi-year effort and cannot be generated overnight.",
          "The reference call. Still the highest-signal, lowest-adopted tool in screening. If you skip it, you deserve what you get.",
        ],
      },
      { type: "h", text: "The screening question that cuts through" },
      {
        type: "p",
        text: "One question, asked in a 15-minute call, resolves most of the AI-noise problem: 'Walk me through the last non-trivial technical decision you made and why.' Candidates who wrote their own resume can answer this in specifics. Candidates whose resume was generated struggle to produce the underlying detail, because the detail was never theirs to begin with.",
      },
      { type: "h", text: "The uncomfortable implication" },
      {
        type: "p",
        text: "The volume of applications a job posting receives is now nearly meaningless as a signal of the quality of the pipeline. Talent teams that still report on it as a KPI are measuring the wrong thing. The right metrics are qualified candidates per week, offer accept rate, and 12-month retention of the resulting hires. Everything else is theatre.",
      },
      {
        type: "quote",
        text: "In a market where every resume looks perfect, the recruiter's job is not to filter. It is to talk to enough humans to find the ones who are.",
      },
    ],
  },
];

export const values = [
  {
    icon: Target,
    title: "Integrity",
    body: "We say the same thing to candidates and clients. Always.",
  },
  {
    icon: Gauge,
    title: "Transparency",
    body: "Weekly progress, honest odds, and no surprises at offer stage.",
  },
  {
    icon: Cpu,
    title: "Innovation",
    body: "We use tools responsibly to remove drag, never to remove judgment.",
  },
  {
    icon: Users,
    title: "People first",
    body: "Hiring is a decision that shapes lives. We treat it that way.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    body: "We win when your team wins. Fees follow outcomes.",
  },
  {
    icon: Building2,
    title: "Excellence",
    body: "The last 10% of quality is where trust is built. We do that work.",
  },
] as const;

export const faqs = [
  {
    q: "How do you price engagements?",
    a: "Contingent for standard permanent roles, retained for executive search, and a fixed monthly rate for RPO pods and workforce consulting. We share economics before we start.",
  },
  {
    q: "What is your replacement guarantee?",
    a: "Six months on permanent hires. If a candidate leaves in that window for a reason connected to fit, we run the search again at no additional fee.",
  },
  {
    q: "How is Synergy Scout different from typical agencies?",
    a: "We don't forward resumes. Every shortlist arrives with a written rationale, a rubric-based assessment and honest risks. That changes what the interview process becomes.",
  },
  {
    q: "Do you support diversity hiring commitments?",
    a: "Yes. We build diverse slates by default, disclose availability honestly, and never present tokenistic shortlists to hit a metric.",
  },
  {
    q: "Can we start with a single mandate?",
    a: "Absolutely. Most partnerships begin with one role. If the process feels right, we build from there.",
  },
];

export type ServiceItem = (typeof services)[number];
export type IndustryItem = (typeof industries)[number];
export type InsightItem = (typeof insights)[number];
