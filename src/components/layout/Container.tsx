import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  const max =
    size === "wide" ? "max-w-[1360px]" : size === "narrow" ? "max-w-[820px]" : "max-w-[1240px]";
  return <div className={cn("mx-auto px-6 sm:px-8 lg:px-10", max, className)}>{children}</div>;
}
