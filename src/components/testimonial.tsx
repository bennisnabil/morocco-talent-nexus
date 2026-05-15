interface Props {
  quote: string;
  name: string;
  role: string;
  image?: string;
  variant?: "light" | "dark";
  source?: string;
  sourceUrl?: string;
}

export function Testimonial({ quote, name, role, image, variant = "light", source, sourceUrl }: Props) {
  const dark = variant === "dark";
  return (
    <figure
      className={`p-8 md:p-12 ${
        dark ? "bg-transparent text-secondary" : "bg-secondary/20 ring-1 ring-border"
      }`}
    >
      <blockquote
        className={`font-serif italic text-2xl md:text-3xl leading-snug mb-8 text-balance ${
          dark ? "" : ""
        }`}
      >
        “{quote}”
      </blockquote>
      <figcaption className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            width={56}
            height={56}
            loading="lazy"
            className="size-14 object-cover rounded-full grayscale"
          />
        ) : (
          <div
            className={`size-14 rounded-full grid place-items-center text-xs ${
              dark ? "bg-white/10" : "bg-primary/10 text-primary"
            }`}
          >
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
        <div>
          <p className="font-medium">{name}</p>
          <p
            className={`text-xs ${
              dark ? "text-secondary/60" : "text-muted-foreground"
            }`}
          >
            {role}
          </p>
        </div>
      </figcaption>
      {source && (
        <p className={`mt-6 pt-4 border-t text-[10px] uppercase tracking-[0.25em] ${dark ? "border-white/10 text-secondary/60" : "border-border text-muted-foreground"}`}>
          Source ·{" "}
          {sourceUrl ? (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary">
              {source}
            </a>
          ) : (
            source
          )}
        </p>
      )}
    </figure>
  );
}
