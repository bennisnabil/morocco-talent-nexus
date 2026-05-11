import { Link } from "@tanstack/react-router";

interface Props {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export function ArticleCard({ slug, category, title, excerpt, readTime }: Props) {
  return (
    <Link
      to="/insights/$slug"
      params={{ slug }}
      className="group block border-t border-border pt-8 hover:border-primary transition-colors"
    >
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-6">
        <span>{category}</span>
        <span>{readTime}</span>
      </div>
      <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-4 group-hover:text-primary transition-colors text-balance">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">{excerpt}</p>
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium">
        Read article
        <span className="block w-8 h-px bg-foreground group-hover:w-12 transition-all" />
      </span>
    </Link>
  );
}
