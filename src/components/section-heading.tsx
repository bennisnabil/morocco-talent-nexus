interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  serifClass?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  serifClass = "text-4xl md:text-5xl",
}: Props) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif ${serifClass} leading-[1.05] text-balance`}>{title}</h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-[52ch]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
