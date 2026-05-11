import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join the Network — Atlas & Atlas" },
      {
        name: "description",
        content:
          "Apply to a private network of senior Moroccan executives worldwide.",
      },
      { property: "og:title", content: "Join the Network — Atlas & Atlas" },
      {
        property: "og:description",
        content: "Membership is by application. Begin yours.",
      },
    ],
  }),
  component: JoinPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  location: z.string().trim().min(2).max(120),
  sector: z.string().trim().min(2).max(80),
  seniority: z.string().trim().min(2).max(80),
  linkedin: z.string().trim().url("Must be a valid URL").max(255),
  message: z.string().trim().min(10).max(2000),
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
      toast.success("Application received. Our team will review and respond within 5 business days.");
    }, 700);
  }

  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-28 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Apply to the Network"
            title="Membership is by application."
            subtitle="The network is reserved for senior Moroccan professionals worldwide. All applications are reviewed in confidence."
            serifClass="text-5xl md:text-7xl"
          />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
            <Field label="Full name" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <Field
              label="Current location"
              name="location"
              error={errors.location}
            />
            <Field label="Primary sector" name="sector" error={errors.sector} />
            <Field
              label="Seniority"
              name="seniority"
              error={errors.seniority}
            />
            <Field
              label="LinkedIn URL"
              name="linkedin"
              type="url"
              error={errors.linkedin}
            />
            <div className="md:col-span-2">
              <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                What are you looking for?
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
                {submitting ? "Sending..." : "Submit Application"}
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
