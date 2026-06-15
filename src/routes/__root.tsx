import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CookieBanner } from "@/components/cookie-banner";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-md text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">404</p>
          <h1 className="font-serif text-5xl mb-4">Page introuvable</h1>
          <p className="text-muted-foreground mb-8">
            Cette page n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl mb-4">Une erreur est survenue</h1>
        <p className="text-sm text-muted-foreground mb-8">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="bg-primary text-primary-foreground px-6 py-3 text-sm"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Diaspora Talent — Le réseau mondial des talents marocains" },
      {
        name: "description",
        content:
          "Opportunités exécutives, relocation stratégique et accompagnement premium au retour au Maroc pour les professionnels marocains du monde entier.",
      },
      { property: "og:title", content: "Diaspora Talent — Le réseau mondial des talents marocains" },
      {
        property: "og:description",
        content:
          "Une plateforme exécutive privée reliant la diaspora marocaine globale aux opportunités stratégiques au Maroc.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Diaspora Talent — Le réseau mondial des talents marocains" },
      { name: "twitter:description", content: "Opportunités exécutives, relocation stratégique et accompagnement premium au retour au Maroc pour les professionnels marocains du monde entier." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/466c3125-031a-4389-80dd-c35c128e5149/id-preview-456c4603--5080ea84-013d-47ab-84d4-1ca65dae807d.lovable.app-1778692305726.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/466c3125-031a-4389-80dd-c35c128e5149/id-preview-456c4603--5080ea84-013d-47ab-84d4-1ca65dae807d.lovable.app-1778692305726.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <Toaster position="bottom-right" />
      <CookieBanner />
    </QueryClientProvider>
  );
}
