import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { findArticle, articles } from "@/lib/insights";
import { CtaButton } from "@/components/cta-button";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = findArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — Atlas & Atlas Insights` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="px-6 py-32 text-center">
      <h1 className="font-serif text-4xl mb-4">Article introuvable</h1>
      <Link to="/insights" className="text-primary underline">
        Retour aux Insights
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="px-6 py-32 text-center">
      <p className="text-destructive">{error.message}</p>
    </div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  return (
    <>
      <article className="px-6 pt-20 pb-24 lg:pt-28">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/insights"
            className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-primary"
          >
            ← All insights
          </Link>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mt-10 mb-6">
            {article.category} · {article.date}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance mb-8">
            {article.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-12 font-serif italic leading-relaxed">
            {article.excerpt}
          </p>
          <div className="space-y-6 text-base leading-relaxed text-foreground/90">
            {article.body.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-16 pt-10 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{article.readTime}</p>
            <CtaButton to="/contact" variant="ghost">
              Discuss this with a partner
            </CtaButton>
          </div>
        </div>
      </article>

      <section className="px-6 py-24 bg-secondary/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Continue reading
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {others.map((a) => (
              <Link
                key={a.slug}
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="group block border-t border-border pt-8 hover:border-primary"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">
                  {a.category}
                </p>
                <h3 className="font-serif text-2xl group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
