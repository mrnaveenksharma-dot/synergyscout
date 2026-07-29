import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Linkedin, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "./Container";
import { services, site } from "@/data/site";
import { submitToFormEndpoint } from "@/lib/form-submission";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sent" | "error">("idle");

  async function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNewsletterStatus("idle");
    const form = event.currentTarget;
    const email = new FormData(form).get("email");
    const endpoint = import.meta.env.VITE_NEWSLETTER_FORM_ENDPOINT;

    if (!endpoint || typeof email !== "string") {
      setNewsletterStatus("error");
      return;
    }

    try {
      await submitToFormEndpoint(endpoint, { email, _subject: "Synergy Scout newsletter signup" });
      form.reset();
      setNewsletterStatus("sent");
    } catch {
      setNewsletterStatus("error");
    }
  }

  return (
    <footer className="relative bg-[color:var(--ink)] text-white">
      <Container size="wide">
        <div className="grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="white" className="w-[200px]" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
              A specialist technology recruitment firm helping companies build high-performing
              engineering, product, data and IT teams.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-8 flex max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-5 transition-colors focus-within:border-white/40"
            >
              <input
                type="email"
                name="email"
                autoComplete="email"
                spellCheck={false}
                required
                placeholder="Your email…"
                aria-label="Email address"
                suppressHydrationWarning
                className="flex-1 bg-transparent text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--accent-blue)] transition-transform hover:scale-105"
                aria-label="Subscribe"
              >
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-3 text-[11px] text-white/40" aria-live="polite">
              {newsletterStatus === "sent"
                ? "You're on the list."
                : newsletterStatus === "error"
                  ? `Newsletter signup is being connected. Email ${site.email} to join.`
                  : "Occasional insight on the India hiring market. No spam."}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="mono-label !text-white/50">Company</h3>
            <ul className="mt-5 space-y-3 text-[14px]">
              {[
                ["/about", "About"],
                ["/industries", "Industries"],
                ["/insights", "Insights"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/70 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="mono-label !text-white/50">Services</h3>
            <ul className="mt-5 space-y-3 text-[14px]">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="text-white/70 transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="mono-label !text-white/50">Reach us</h3>
            <ul className="mt-5 space-y-3 text-[14px] text-white/70">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>

              {site.linkedin && (
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-[border-color,transform] hover:border-white/40 hover:scale-105"
                    aria-label="LinkedIn"
                  >
                    <Linkedin aria-hidden="true" className="h-4 w-4" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[12px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Synergy Scout. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
