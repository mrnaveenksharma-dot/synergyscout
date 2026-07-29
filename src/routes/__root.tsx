import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Logo } from "@/components/brand/Logo";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";
import { Btn } from "@/components/ui/Btn";
import { ArrowLeft, Compass } from "lucide-react";
import { site } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="relative isolate flex min-h-[100dvh] items-center overflow-hidden bg-[color:var(--canvas)] px-6 pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.14),transparent_65%)] blur-2xl" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(13,17,23,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,17,23,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-xl text-center">
        <div className="relative mx-auto mb-8 grid h-24 w-24 place-items-center">
          <span
            className="absolute inset-0 rounded-full border border-[color:var(--hairline-strong)]"
            style={{ animation: "hero-float 6s ease-in-out infinite" }}
          />
          <span
            className="absolute inset-2 rounded-full border border-[color:var(--hairline)]"
            style={{ animation: "hero-float 4s ease-in-out infinite reverse" }}
          />
          <Compass className="relative h-9 w-9 text-[color:var(--accent-blue)]" strokeWidth={1.5} />
        </div>
        <span className="mono-label">Error 404</span>
        <h1 className="mt-4 font-display text-[48px] font-semibold leading-tight tracking-[-0.03em] text-[color:var(--ink)] sm:text-[64px]">
          Page not found.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-[color:var(--muted)]">
          The page you're looking for doesn't exist or has moved. Head back and we'll get you where
          you meant to go.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Btn to="/" variant="primary" size="lg">
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </Btn>
          <Btn to="/contact" variant="outline" size="lg">
            Contact Us
          </Btn>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70dvh] items-center justify-center bg-[color:var(--canvas)] px-4 py-24">
      <div className="max-w-md text-center">
        <span className="mono-label">Something went wrong</span>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">
          This page didn't load
        </h1>
        <p className="mt-3 text-[15px] text-[color:var(--muted)]">
          You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Btn
            onClick={() => {
              router.invalidate();
              reset();
            }}
            variant="primary"
            size="md"
          >
            Try again
          </Btn>
          <Btn to="/" variant="outline" size="md">
            Go home
          </Btn>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Synergy Scout — Building high-performing tech teams" },
      {
        name: "description",
        content:
          "Synergy Scout is a specialist technology recruitment firm helping companies build exceptional engineering, product, data and IT teams.",
      },
      { name: "theme-color", content: "#0d1117" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Synergy Scout" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Synergy Scout — Building high-performing tech teams" },
      { name: "twitter:title", content: "Synergy Scout — Building high-performing tech teams" },
      {
        property: "og:description",
        content:
          "A specialist technology recruitment firm connecting companies with exceptional engineering, product, data and IT talent.",
      },
      {
        name: "twitter:description",
        content:
          "A specialist technology recruitment firm connecting companies with exceptional engineering, product, data and IT talent.",
      },

      { property: "og:image", content: `${site.url}/favicon.png` },
      { name: "twitter:image", content: `${site.url}/favicon.png` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Synergy Scout",
          url: site.url,
          logo: `${site.url}/favicon.png`,
          description:
            "Specialist technology recruitment firm helping companies build exceptional engineering, product, data and IT teams.",
          sameAs: site.linkedin ? [site.linkedin] : [],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-md focus:bg-[color:var(--ink)] focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Premium load sequence — logo fade + progress line, ~1.2s cap.
 * Client-only overlay; SSR renders the site immediately underneath so
 * content is always present even without JS.
 */
function LoadOverlay() {
  // SSR always renders phase "in" so the server HTML matches first-client paint.
  // On mount, we consult sessionStorage and dismiss immediately if already seen —
  // no `typeof window` in a state initializer, which would hydration-mismatch.
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");
  useEffect(() => {
    if (window.sessionStorage.getItem("ss-seen-intro")) {
      setPhase("gone");
      return;
    }
    window.sessionStorage.setItem("ss-seen-intro", "1");
    const t1 = setTimeout(() => setPhase("out"), 900);
    const t2 = setTimeout(() => setPhase("gone"), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  if (phase === "gone") return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-500"
      style={{ opacity: phase === "out" ? 0 : 1 }}
    >
      <div className="animate-hero-float">
        <Logo variant="navy" className="w-[168px]" />
      </div>
      <div className="mt-8 h-px w-40 overflow-hidden bg-[color:var(--hairline)]">
        <div
          className="h-full bg-[color:var(--accent-blue)]"
          style={{
            width: "100%",
            transform: "translateX(-100%)",
            animation: "progress 900ms cubic-bezier(0.2,0.7,0.2,1) forwards",
          }}
        />
      </div>
      <style>{`@keyframes progress { to { transform: translateX(0); } }`}</style>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-[color:var(--canvas)]">
        <LoadOverlay />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
