import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import { SectionHeading } from "@/components/section-heading";
import { summarizeCv, chatReturn } from "@/lib/cv-assistant.functions";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Rejoindre le réseau — Diaspora Talent" },
      {
        name: "description",
        content:
          "Postulez au réseau privé de cadres marocains. Téléchargez votre CV, recevez une analyse IA et discutez de votre retour au Maroc.",
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

type ChatMsg = { role: "user" | "assistant"; content: string };

const SUGGESTED = [
  "Quels secteurs au Maroc recrutent mon profil ?",
  "Comment fonctionne la fiscalité quand je rentre ?",
  "Quelles villes correspondent à mon mode de vie ?",
  "Quelle fourchette de rémunération viser ?",
];

async function extractPdfText(file: File): Promise<string> {
  const pdfjs = await import("pdfjs-dist");
  // Use the bundled worker
  const workerSrc = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")).default;
  pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

  const buf = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: buf }).promise;
  const max = Math.min(pdf.numPages, 10);
  let text = "";
  for (let i = 1; i <= max; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text +=
      content.items
        .map((it) => ("str" in it ? (it as { str: string }).str : ""))
        .join(" ") + "\n\n";
  }
  return text.trim();
}

function JoinPage() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const summarize = useServerFn(summarizeCv);
  const chat = useServerFn(chatReturn);

  const [cvName, setCvName] = useState<string | null>(null);
  const [cvSummary, setCvSummary] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  async function onCvChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      toast.error("CV trop volumineux (max 10 Mo).");
      return;
    }
    if (!file.name.toLowerCase().endsWith(".pdf")) {
      toast.error("Format PDF requis.");
      return;
    }
    setCvName(file.name);
    setCvSummary(null);
    setAnalyzing(true);
    try {
      const text = await extractPdfText(file);
      if (text.length < 50) throw new Error("Impossible d'extraire le texte du PDF.");
      const { summary } = await summarize({ data: { cvText: text } });
      setCvSummary(summary);
      toast.success("Analyse de votre CV terminée.");
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Échec de l'analyse.");
      setCvName(null);
    } finally {
      setAnalyzing(false);
    }
  }

  async function sendChat(text: string) {
    const trimmed = text.trim();
    if (!trimmed || chatLoading) return;
    const next: ChatMsg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setChatInput("");
    setChatLoading(true);
    try {
      const { reply } = await chat({
        data: { messages: next, cvSummary: cvSummary ?? undefined },
      });
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Échec de la requête IA.");
      setMessages(next.slice(0, -1));
      setChatInput(trimmed);
    } finally {
      setChatLoading(false);
    }
  }

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
      // Save to localStorage for admin backoffice
      try {
        const existing = JSON.parse(localStorage.getItem("dt_submissions") ?? "[]");
        existing.push({
          id: crypto.randomUUID(),
          type: "candidature",
          name: parsed.data.name,
          email: parsed.data.email,
          location: parsed.data.location,
          sector: parsed.data.sector,
          seniority: parsed.data.seniority,
          linkedin: parsed.data.linkedin,
          message: parsed.data.message,
          date: new Date().toISOString(),
          status: "new",
          notes: "",
        });
        localStorage.setItem("dt_submissions", JSON.stringify(existing));
      } catch { /* noop */ }

      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setCvName(null);
      setCvSummary(null);
      setMessages([]);
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
            subtitle="Téléchargez votre CV pour une analyse confidentielle assistée par IA, discutez de votre projet de retour, puis soumettez votre dossier."
            serifClass="text-5xl md:text-7xl"
          />
        </div>
      </section>

      {/* CV + IA */}
      <section className="px-6 py-16 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
            Étape 1 · Analyse de votre CV
          </p>

          <div className="border border-dashed border-border p-8 text-center">
            <input
              ref={fileRef}
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={onCvChange}
              disabled={analyzing}
            />
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              disabled={analyzing}
              className="font-serif italic text-2xl hover:text-primary transition-colors disabled:opacity-50"
            >
              {analyzing
                ? "Analyse en cours…"
                : cvName
                  ? `↻ Remplacer « ${cvName} »`
                  : "+ Téléchargez votre CV (PDF)"}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Confidentiel · Analyse traitée à la volée, le fichier n'est pas stocké · 10 Mo max
            </p>
          </div>

          {cvSummary && (
            <div className="mt-10 bg-secondary/30 border-l-2 border-primary px-8 py-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
                Lecture éditoriale par notre IA
              </p>
              <div className="prose prose-sm max-w-none prose-headings:font-serif prose-strong:text-foreground prose-p:text-foreground/90 prose-li:text-foreground/90">
                <ReactMarkdown>{cvSummary}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Chat IA */}
      <section className="px-6 py-16 border-b border-border bg-secondary/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
            Étape 2 · Vos questions sur le retour
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-balance">
            Échangez avec un conseiller IA spécialisé sur le retour au Maroc.
          </h2>

          {messages.length === 0 && (
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {SUGGESTED.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => sendChat(q)}
                  disabled={chatLoading}
                  className="text-left text-sm border border-border px-4 py-3 hover:border-primary hover:bg-background transition-colors disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {messages.length > 0 && (
            <div className="space-y-6 mb-6">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "user"
                      ? "border-l-2 border-foreground/40 pl-4"
                      : "bg-background border-l-2 border-primary px-5 py-4"
                  }
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                    {m.role === "user" ? "Vous" : "Conseiller IA"}
                  </p>
                  {m.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none prose-p:text-foreground/90">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-sm">{m.content}</p>
                  )}
                </div>
              ))}
              {chatLoading && (
                <p className="text-xs text-muted-foreground italic">Réflexion en cours…</p>
              )}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendChat(chatInput);
            }}
            className="flex gap-3"
          >
            <input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              maxLength={500}
              placeholder="Posez votre question…"
              className="flex-1 bg-background ring-1 ring-border focus:ring-primary outline-none px-4 py-3 text-sm"
              disabled={chatLoading}
            />
            <button
              type="submit"
              disabled={chatLoading || !chatInput.trim()}
              className="bg-primary text-primary-foreground px-6 text-sm tracking-wide hover:opacity-90 disabled:opacity-60"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Formulaire */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
            Étape 3 · Votre candidature
          </p>
          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
            <Field label="Nom complet" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <Field label="Localisation actuelle" name="location" error={errors.location} />
            <Field label="Secteur principal" name="sector" error={errors.sector} />
            <Field label="Séniorité" name="seniority" error={errors.seniority} />
            <Field label="URL LinkedIn" name="linkedin" type="url" error={errors.linkedin} />
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
