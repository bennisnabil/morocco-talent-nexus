import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Atlas & Atlas" },
      {
        name: "description",
        content:
          "Begin with a private, confidential consultation. One hour, one strategist.",
      },
      { property: "og:title", content: "Book a Consultation — Atlas & Atlas" },
      {
        property: "og:description",
        content: "Private consultation for executives and organizations.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  role: z.string().trim().min(2, "Role is required").max(120),
  country: z.string().trim().min(2, "Country is required").max(80),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
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
      toast.success("Consultation request received. A partner will respond within 48 hours.");
    }, 700);
  }

  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-28 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Book a Consultation"
            title="One hour. One strategist. Complete confidentiality."
            subtitle="Tell us where you are in your journey. A partner will be in touch within 48 hours."
            serifClass="text-5xl md:text-7xl"
          />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-6">
            <Field label="Full name" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <Field label="Current role / title" name="role" error={errors.role} />
            <Field label="Country of residence" name="country" error={errors.country} />
            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Tell us about your situation
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
              {submitting ? "Sending..." : "Request Consultation"}
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
