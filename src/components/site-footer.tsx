import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        <div className="space-y-6">
          <div className="font-serif italic text-2xl tracking-tight">Atlas &amp; Atlas</div>
          <p className="text-sm text-muted-foreground max-w-[36ch]">
            The premier private network bridging the global Moroccan executive diaspora with the Kingdom's strategic future.
          </p>
        </div>
        <FooterCol
          title="Network"
          items={[
            { to: "/network", label: "Talent Platform" },
            { to: "/return", label: "Return to Morocco" },
            { to: "/companies", label: "Executive Search" },
          ]}
        />
        <FooterCol
          title="Discover"
          items={[
            { to: "/stories", label: "Success Stories" },
            { to: "/insights", label: "Insights" },
            { to: "/join", label: "Join the Network" },
          ]}
        />
        <FooterCol
          title="Contact"
          items={[
            { to: "/contact", label: "Book a Consultation" },
            { to: "/contact", label: "Partnership Inquiries" },
            { to: "/contact", label: "LinkedIn" },
          ]}
        />
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Atlas &amp; Atlas — All rights reserved</span>
          <span className="italic font-serif text-sm normal-case tracking-normal">
            Aspire to return.
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <div className="space-y-5">
      <h4 className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">
        {items.map((it, i) => (
          <li key={i}>
            <Link to={it.to} className="text-foreground/80 hover:text-primary transition-colors">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
