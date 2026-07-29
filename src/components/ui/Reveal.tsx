import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  /** How much of the element must be visible before revealing (0–1) */
  amount?: number;
}

/**
 * Reveal — cinematic, calm entrance on scroll.
 * Uses IntersectionObserver + CSS transition (defined in styles.css).
 * Failsafe: if IO is unavailable, content is immediately visible.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  amount = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setOn(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setOn(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: amount, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal-init", on && "reveal-on", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
