import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Btn } from "@/components/ui/Btn";
import { nav } from "@/data/site";
import { cn } from "@/lib/utils";

// Map homepage section ids to nav routes for scroll-spy on "/"
const SECTION_MAP: Record<string, string> = {
  home: "/",
  services: "/services",
  industries: "/industries",
  insights: "/insights",
  contact: "/contact",
};

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scroll spy on homepage — compute from live DOM positions on every update.
  // This avoids the previous "stuck on Home" failure when the header mounted
  // before route sections/images had finished hydrating.
  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }

    let raf = 0;
    const getSections = () =>
      Object.entries(SECTION_MAP)
        .map(([id, route]) => {
          const element = document.getElementById(id);
          return element ? { route, element } : null;
        })
        .filter((item): item is { route: string; element: HTMLElement } => item !== null);

    const HYSTERESIS = 40;
    let prevRoute: string | null = null;

    const updateActiveSection = () => {
      raf = 0;
      const sections = getSections();
      if (sections.length === 0) return;

      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const marker = scrollTop + Math.min(window.innerHeight * 0.42, 420);
      let next = sections[0]?.route ?? "/";

      for (const section of sections) {
        const rect = section.element.getBoundingClientRect();
        const top = rect.top + scrollTop;
        // Dead-zone: require crossing marker by HYSTERESIS unless it's the current active
        const bias = section.route === prevRoute ? HYSTERESIS : -HYSTERESIS;
        if (top <= marker + bias) next = section.route;
      }

      const bottom = scrollTop + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      if (pageHeight - bottom < 48) {
        next = sections[sections.length - 1]?.route ?? next;
      }

      prevRoute = next;
      setActiveSection((prev) => (prev === next ? prev : next));
    };

    const scheduleUpdate = () => {
      if (!raf) raf = requestAnimationFrame(updateActiveSection);
    };

    const delayedUpdates = [0, 120, 500, 1200].map((delay) =>
      window.setTimeout(scheduleUpdate, delay),
    );

    const main = document.querySelector("main");
    const observer = new MutationObserver(scheduleUpdate);
    observer.observe(main ?? document.body, { childList: true, subtree: true });

    document.fonts?.ready.then(scheduleUpdate).catch(() => undefined);

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("load", scheduleUpdate);
      observer.disconnect();
      delayedUpdates.forEach(window.clearTimeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isHome, pathname]);

  // Single active key ensures exactly one pill is rendered at any time.
  const activeKey = isHome
    ? (activeSection ?? "/")
    : ([...nav]
        .map((n) => n.to)
        .filter((to) => (to === "/" ? pathname === "/" : pathname.startsWith(to)))
        .sort((a, b) => b.length - a.length)[0] ?? "/");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[color:var(--hairline)] bg-white/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 sm:px-8 lg:px-10">
        <div
          className={cn(
            "flex items-center transition-all duration-300",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Link to="/" aria-label="Synergy Scout — Home" className="flex items-center">
            <Logo
              variant="navy"
              className={cn("transition-all duration-300", scrolled ? "w-[196px]" : "w-[224px]")}
            />
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden items-center md:flex">
          <div className="relative flex items-center gap-0.5 rounded-full border border-[color:var(--hairline)] bg-white/60 p-1 backdrop-blur-xl">
            {nav.map((item) => {
              const active = item.to === activeKey;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-[13.5px] font-medium tracking-tight transition-colors duration-300",
                    active
                      ? "text-[color:var(--ink)]"
                      : "text-[color:var(--muted)] hover:text-[color:var(--ink)]",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-white shadow-[0_1px_2px_rgba(13,17,23,0.06),0_4px_14px_rgba(13,17,23,0.08)] ring-1 ring-[color:var(--hairline)]"
                      transition={{ type: "spring", stiffness: 280, damping: 32, mass: 0.9 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="hidden md:block">
          <Btn to="/contact" variant="primary" size="md" arrow>
            Get in Touch
          </Btn>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--hairline)] bg-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col bg-white/95 backdrop-blur-2xl transition-all duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="h-20" />
        <nav className="flex flex-1 flex-col gap-1 px-6 pb-10 pt-4">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="border-b border-[color:var(--hairline)] py-5 font-display text-3xl font-semibold tracking-tight text-[color:var(--ink)] transition-transform"
              style={{
                transitionDelay: open ? `${80 + i * 40}ms` : "0ms",
                transform: open ? "translateY(0)" : "translateY(12px)",
                opacity: open ? 1 : 0,
                transitionProperty: "opacity, transform",
                transitionDuration: "500ms",
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8">
            <Btn to="/contact" variant="primary" size="lg" arrow className="w-full">
              Get in Touch
            </Btn>
          </div>
        </nav>
      </div>
    </header>
  );
}
