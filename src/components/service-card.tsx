interface Props {
  index: number;
  title: string;
  description: string;
  variant?: "light" | "dark";
}

export function ServiceCard({ index, title, description, variant = "light" }: Props) {
  const dark = variant === "dark";
  return (
    <div
      className={`p-8 md:p-10 ring-1 ${
        dark
          ? "ring-white/10 bg-transparent text-secondary"
          : "ring-border bg-background hover:bg-secondary/20"
      } transition-colors group`}
    >
      <div className="flex items-baseline gap-4 mb-6">
        <span className={`font-serif italic text-2xl ${dark ? "text-secondary/60" : "text-gold"}`}>
          {String(index).padStart(2, "0")}
        </span>
        <span
          className={`h-px flex-1 ${
            dark ? "bg-secondary/15" : "bg-border"
          } group-hover:bg-primary/40 transition-colors`}
        />
      </div>
      <h3 className="font-serif text-2xl mb-3 leading-tight">{title}</h3>
      <p className={`text-sm leading-relaxed ${dark ? "text-secondary/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    </div>
  );
}
