import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";

const sections = [
  {
    id: "who-we-are",
    title: "1. Who we are",
    body: [
      "Synergy Scout is a specialist technology recruitment firm operating remotely from India. This Privacy Policy explains what personal information we collect, why we collect it, and the choices you have about how we use it.",
      "If you have any questions about this policy, contact us at hello@synergyscout.in.",
    ],
  },

  {
    id: "information-we-collect",
    title: "2. Information we collect",
    body: [
      "We collect information you provide directly — for example, when you complete a form, apply for a role, share a resume, or contact us by email.",
      "We also collect limited technical information (device, browser, referring page) via analytics cookies to improve the site experience.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "3. How we use information",
    body: [
      "We use your information to respond to enquiries, evaluate candidates for open mandates, coordinate interview processes, and provide market intelligence to our clients.",
      "We do not sell personal information to third parties. Ever.",
    ],
  },
  {
    id: "candidate-data",
    title: "4. Candidate data",
    body: [
      "Resumes and profiles shared with us are treated as confidential. We only share candidate details with a specific client after receiving explicit consent for that mandate.",
      "You can request deletion of your candidate record at any time by emailing hello@synergyscout.in.",
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies",
    body: [
      "We use functional cookies for site preferences and analytics cookies (aggregated, anonymised) to understand how the site is used. You can disable cookies in your browser settings.",
    ],
  },
  {
    id: "your-rights",
    title: "6. Your rights",
    body: [
      "Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal information. To exercise these rights, contact hello@synergyscout.in.",
    ],
  },
  {
    id: "security",
    title: "7. Security",
    body: [
      "We apply industry-standard technical and organisational controls to protect personal information. No transmission over the internet is fully secure — but we take safeguarding seriously.",
    ],
  },
  {
    id: "changes",
    title: "8. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The 'last updated' date at the top of the page reflects the most recent revision.",
    ],
  },
  {
    id: "contact",
    title: "9. Contact",
    body: [
      "Questions or requests: hello@synergyscout.in. We aim to respond within five working days.",
    ],
  },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Synergy Scout" },
      {
        name: "description",
        content: "How Synergy Scout collects, uses and protects your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — Synergy Scout" },
      { property: "og:description", content: "Our privacy commitments to candidates and clients." },
      { property: "og:url", content: "https://synergyscout.in/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://synergyscout.in/privacy" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="Last updated: 22 July 2026"
      sections={sections}
    />
  ),
});
