import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, align = "center", className, light = false }: SectionHeaderProps) {
  return (
    <div className={cn(
      "space-y-4 mb-12",
      align === "center" && "text-center mx-auto max-w-3xl",
      align === "right" && "text-right ml-auto",
      className
    )}>
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tight",
        light ? "text-white" : "text-accent"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg leading-relaxed",
          light ? "text-white/80" : "text-muted-foreground"
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-24 bg-primary rounded-full mt-4",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto"
      )} />
    </div>
  );
}
