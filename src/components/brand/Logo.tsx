import { cn } from "@/lib/utils";
import primaryLogoUrl from "@/assets/synergy-scout-primary-tight.png";
import reverseLogoUrl from "@/assets/synergy-scout-reverse-tight.png";
import symbolLogoUrl from "@/assets/synergy-scout-symbol-tight.png";

type LogoVariant = "navy" | "white" | "symbol";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  title?: string;
}

export function Logo({ variant = "navy", className, title = "Synergy Scout" }: LogoProps) {
  if (variant === "symbol") {
    return (
      <img
        src={symbolLogoUrl}
        alt={title}
        width={329}
        height={329}
        draggable={false}
        className={cn("block h-8 w-8 select-none object-contain", className)}
      />
    );
  }

  return (
    <img
      src={variant === "white" ? reverseLogoUrl : primaryLogoUrl}
      alt={title}
      width={variant === "white" ? 1483 : 1544}
      height={variant === "white" ? 326 : 358}
      draggable={false}
      className={cn("block h-auto w-[168px] select-none object-contain", className)}
    />
  );
}
