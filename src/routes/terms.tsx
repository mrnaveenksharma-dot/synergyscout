import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of terms",
    body: [
      "By accessing synergyscout.in or engaging Synergy Scout for recruitment services, you agree to these Terms & Conditions.",
    ],
  },
  {
    id: "services",
    title: "2. Services",
    body: [
      "Synergy Scout provides recruitment consulting services, including permanent placement, executive search, contract staffing, RPO, talent mapping and workforce advisory.",
      "Specific terms of engagement — including fees, guarantees and exclusivity — are agreed in a signed statement of work for each client.",
    ],
  },
  {
    id: "fees",
    title: "3. Fees & payment",
    body: [
      "Fees are set out in the applicable engagement letter. Invoices are payable within 30 days of the joining date unless otherwise agreed.",
    ],
  },
  {
    id: "replacement",
    title: "4. Replacement guarantee",
    body: [
      "Permanent placements carry a six-month replacement guarantee, subject to timely payment of fees and continued good-faith cooperation on the search.",
    ],
  },
  {
    id: "confidentiality",
    title: "5. Confidentiality",
    body: [
      "Both parties agree to keep confidential all non-public information exchanged during the engagement, including candidate details, compensation data and strategic plans.",
    ],
  },
  {
    id: "candidate-conduct",
    title: "6. Candidate conduct",
    body: [
      "Candidates presented through Synergy Scout are expected to represent their credentials accurately. We conduct baseline verification, but ultimate hiring decisions rest with the client.",
    ],
  },
  {
    id: "ip",
    title: "7. Intellectual property",
    body: [
      "All content on this website, including copy, imagery, and the Synergy Scout brand marks, is owned by or licensed to Synergy Scout and may not be reproduced without permission.",
    ],
  },
  {
    id: "liability",
    title: "8. Limitation of liability",
    body: [
      "To the fullest extent permitted by law, Synergy Scout's liability for any claim arising out of an engagement is limited to the fees paid for that engagement in the preceding twelve months.",
    ],
  },
  {
    id: "governing-law",
    title: "9. Governing law",
    body: [
      "These Terms are governed by the laws of India. Disputes will be resolved in the courts of Bengaluru.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to terms",
    body: [
      "We may update these Terms from time to time. Material changes will be communicated to active clients directly.",
    ],
  },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Synergy Scout" },
      {
        name: "description",
        content:
          "Terms governing use of the Synergy Scout website and engagement of our recruitment services.",
      },
      { property: "og:title", content: "Terms & Conditions — Synergy Scout" },
      {
        property: "og:description",
        content: "Our standard terms for clients, candidates and website visitors.",
      },
      { property: "og:url", content: "https://synergyscout.in/terms" },
    ],
    links: [{ rel: "canonical", href: "https://synergyscout.in/terms" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="Last updated: 22 July 2026"
      sections={sections}
    />
  ),
});
