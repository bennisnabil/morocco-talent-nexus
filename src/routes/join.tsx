import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Rejoindre le réseau — Diaspora Talent" },
      {
        name: "description",
        content:
          "Postulez à un réseau privé de cadres marocains seniors du monde entier.",
      },
      { property: "og:title", content: "Rejoindre le réseau — Diaspora Talent" },
      {
        property: "og:description",
        content: "L'adhésion se fait sur candidature. Commencez la vôtre.",
      },
    ],
  }),
  component: JoinPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Le nom est requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  location: z.string().trim().min(2, "La localisation est requise").max(120),
  sector: z.string().trim().min(2, "Le secteur est requis").max(80),
  seniority: z.string().trim().min(2, "La séniorité est requise").max(80),
  linkedin: z.string().trim().url("URL invalide").max(255),
  message: z.string().trim().min(10, "Le message doit faire au moins 10 caractères").max(2000),
});

function JoinPage() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Candidature reçue. Notre équipe revient vers vous sous 5 jours ouvrés.");
    }, 700);
  }

  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Postuler au réseau"
            title="L'adhésion se fait sur candidature."
            subtitle="Le réseau est réservé aux professionnels marocains seniors du monde entier. Toutes les candidatures sont examinées en confidentialité."
            serifClass="text-5xl md:text-7xl"
          />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
            <Field label="Nom complet" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <Field
              label="Localisation actuelle"
              name="location"
              error={errors.location}
            />
            <Field label="Secteur principal" name="sector" error={errors.sector} />
            <Field
              label="Séniorité"
              name="seniority"
              error={errors.seniority}
            />
            <Field
              label="URL LinkedIn"
              name="linkedin"
              type="url"
              error={errors.linkedin}
            />
            <div className="md:col-span-2">
              <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Que recherchez-vous ?
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full bg-background ring-1 ring-border focus:ring-primary outline-none px-4 py-3 text-sm resize-none transition-colors"
              />
              {errors.message && (
                <p className="mt-2 text-xs text-destructive">{errors.message}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? "Envoi..." : "Soumettre ma candidature"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full bg-background ring-1 ring-border focus:ring-primary outline-none px-4 py-3 text-sm transition-colors"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
