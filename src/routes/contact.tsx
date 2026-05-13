import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Prendre rendez-vous — Diaspora Talent" },
      {
        name: "description",
        content:
          "Commencez par une consultation privée et confidentielle. Une heure, un stratège.",
      },
      { property: "og:title", content: "Prendre rendez-vous — Diaspora Talent" },
      {
        property: "og:description",
        content: "Consultation privée pour les cadres et les organisations.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Le nom est requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  role: z.string().trim().min(2, "La fonction est requise").max(120),
  country: z.string().trim().min(2, "Le pays est requis").max(80),
  message: z.string().trim().min(10, "Le message doit faire au moins 10 caractères").max(2000),
});

function ContactPage() {
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
      toast.success("Demande reçue. Un partner vous répondra sous 48 heures.");
    }, 700);
  }

  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Prendre rendez-vous"
            title="Une heure. Un stratège. Confidentialité totale."
            subtitle="Dites-nous où vous en êtes. Un partner vous recontacte sous 48 heures."
            serifClass="text-5xl md:text-7xl"
          />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-6">
            <Field label="Nom complet" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <Field label="Fonction actuelle" name="role" error={errors.role} />
            <Field label="Pays de résidence" name="country" error={errors.country} />
            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Parlez-nous de votre situation
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
            <button
              type="submit"
              disabled={submitting}
              className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? "Envoi..." : "Demander un rendez-vous"}
            </button>
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
