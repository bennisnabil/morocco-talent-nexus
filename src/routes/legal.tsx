import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Mentions légales & Confidentialité — Diaspora Talent" },
      {
        name: "description",
        content:
          "Mentions légales, politique de confidentialité et informations RGPD de Diaspora Talent.",
      },
    ],
  }),
  component: LegalPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-10 mt-10 first:border-t-0 first:pt-0 first:mt-0">
      <h2 className="font-serif text-2xl mb-6">{title}</h2>
      <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}

function LegalPage() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-24 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
            Informations légales
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight text-balance">
            Mentions légales &{" "}
            <span className="italic">Confidentialité</span>
          </h1>
          <p className="mt-6 text-muted-foreground">
            Dernière mise à jour : juin 2025
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">

          <Section title="Éditeur du site">
            <p>
              Le site <strong>diasporatalent.ma</strong> est édité par la société{" "}
              <strong>Diaspora Talent</strong>, réseau privé de mise en relation exécutive
              pour la diaspora marocaine.
            </p>
            <p>
              <strong>Email :</strong>{" "}
              <a
                href="mailto:contact@diasporatalent.ma"
                className="underline underline-offset-4 hover:text-primary"
              >
                contact@diasporatalent.ma
              </a>
            </p>
            <p>
              <strong>LinkedIn :</strong>{" "}
              <a
                href="https://www.linkedin.com/company/diaspora-talent"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                linkedin.com/company/diaspora-talent
              </a>
            </p>
          </Section>

          <Section title="Hébergement">
            <p>
              Ce site est hébergé par des services cloud tiers. En cas de demande relative à
              l'infrastructure, contactez-nous à{" "}
              <a
                href="mailto:contact@diasporatalent.ma"
                className="underline underline-offset-4 hover:text-primary"
              >
                contact@diasporatalent.ma
              </a>
              .
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L'ensemble des contenus présents sur ce site (textes, visuels, structure, code)
              sont la propriété exclusive de Diaspora Talent, sauf mention contraire. Toute
              reproduction, même partielle, est interdite sans autorisation écrite préalable.
            </p>
            <p>
              Les témoignages et articles mentionnant des sources tierces (presse marocaine,
              institutions) sont utilisés à titre informatif et renvoient vers leurs sources
              originales. Diaspora Talent ne revendique aucun droit sur ces contenus externes.
            </p>
          </Section>

          <Section title="Politique de confidentialité">
            <p>
              Diaspora Talent s'engage à protéger les données personnelles de ses utilisateurs
              conformément au Règlement Général sur la Protection des Données (RGPD —
              Règlement UE 2016/679) et à la loi marocaine n° 09-08 relative à la protection
              des personnes physiques à l'égard du traitement des données à caractère
              personnel.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">Données collectées</h3>
            <p>
              Lorsque vous remplissez un formulaire de contact ou de candidature sur ce site,
              nous collectons les données que vous fournissez volontairement : nom, adresse
              email, fonction, pays de résidence, profil LinkedIn, et toute information
              partagée dans le champ de message.
            </p>
            <p>
              En cas d'upload de CV, le fichier est analysé à la volée à des fins d'évaluation
              de profil. Il n'est pas conservé sur nos serveurs au-delà de la durée nécessaire
              au traitement.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">
              Finalités du traitement
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Traitement de votre candidature au réseau Diaspora Talent</li>
              <li>Réponse à vos demandes de contact ou de rendez-vous</li>
              <li>Correspondance relative aux services proposés</li>
            </ul>

            <h3 className="font-semibold text-foreground mt-6 mb-2">
              Base légale du traitement
            </h3>
            <p>
              Le traitement repose sur votre consentement explicite, exprimé par la soumission
              volontaire du formulaire.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">Conservation des données</h3>
            <p>
              Vos données sont conservées pour la durée nécessaire à la gestion de votre
              dossier, et au maximum 3 ans après le dernier contact, sauf obligation légale
              contraire.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">Partage des données</h3>
            <p>
              Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées,
              avec votre accord, avec des entreprises partenaires dans le cadre d'une mise en
              relation professionnelle explicitement sollicitée.
            </p>

            <h3 className="font-semibold text-foreground mt-6 mb-2">Vos droits</h3>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
              d'effacement, de limitation, de portabilité et d'opposition concernant vos
              données. Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:contact@diasporatalent.ma"
                className="underline underline-offset-4 hover:text-primary"
              >
                contact@diasporatalent.ma
              </a>
              . Nous répondons sous 30 jours.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              Ce site utilise uniquement des cookies techniques strictement nécessaires à son
              fonctionnement (mémorisation de vos préférences de navigation). Aucun cookie
              publicitaire ou de tracking tiers n'est déposé sans votre consentement explicite.
            </p>
            <p>
              Vous pouvez à tout moment modifier vos préférences en matière de cookies via le
              bandeau de consentement ou en configurant votre navigateur.
            </p>
          </Section>

          <Section title="Limitation de responsabilité">
            <p>
              Diaspora Talent s'efforce de maintenir les informations publiées sur ce site
              exactes et à jour. Cependant, nous ne garantissons pas l'exhaustivité ou
              l'exactitude de l'ensemble des contenus. Les informations présentes sur ce site
              sont fournies à titre indicatif et ne constituent pas un conseil juridique,
              fiscal ou financier.
            </p>
          </Section>

          <Section title="Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit marocain. Tout litige
              relatif à leur interprétation ou à leur exécution relève de la compétence
              exclusive des tribunaux compétents.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              Pour toute question relative à cette page :{" "}
              <a
                href="mailto:contact@diasporatalent.ma"
                className="underline underline-offset-4 hover:text-primary"
              >
                contact@diasporatalent.ma
              </a>
            </p>
          </Section>

        </div>
      </section>
    </>
  );
}
