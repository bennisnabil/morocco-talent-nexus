import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://ai.gateway.lovable.dev/v1/chat/completions";
const MODEL = "google/gemini-3-flash-preview";

const SYSTEM_RETURN_COACH = `Tu es un conseiller senior chez DiasporaConnect, un cabinet qui accompagne les cadres marocains de la diaspora dans leur retour au Maroc. Tu réponds en français, de façon concise (3-6 phrases max), précise et éditoriale. Tu connais : le statut fiscal des résidents qui rentrent, le marché exécutif marocain (CFC, OCP, banques, tech, énergie), Casablanca / Rabat / Tanger / Marrakech, la scolarité internationale, les enjeux familiaux du retour, et la rémunération exécutive. Tu n'inventes jamais de chiffres précis non vérifiables — tu donnes des fourchettes. Quand pertinent, propose à la fin une consultation avec un partner.`;

async function callGateway(messages: Array<{ role: string; content: string }>) {
  const apiKey = process.env.LOVABLE_API_KEY;
  if (!apiKey) throw new Error("LOVABLE_API_KEY non configurée");

  const res = await fetch(GATEWAY_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model: MODEL, messages }),
  });

  if (res.status === 429) throw new Error("Trop de requêtes. Merci de patienter.");
  if (res.status === 402) throw new Error("Crédits IA épuisés. Contactez l'administrateur.");
  if (!res.ok) {
    const t = await res.text();
    console.error("AI gateway error:", res.status, t);
    throw new Error(`Erreur IA (${res.status})`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "";
}

export const summarizeCv = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      cvText: z.string().trim().min(50, "Texte du CV trop court").max(60000),
    }).parse,
  )
  .handler(async ({ data }) => {
    const content = await callGateway([
      {
        role: "system",
        content:
          "Tu es analyste senior chez un cabinet de chasse de têtes haut de gamme. À partir d'un CV, produis en français un résumé éditorial structuré et concis. Utilise du Markdown avec ces sections : **Profil** (2 phrases), **Trajectoire** (3-4 puces clés), **Expertises** (5-8 mots-clés), **Adéquation pour un retour au Maroc** (2-3 phrases ciblées sur les secteurs marocains pertinents : CFC, banque, tech, industrie, énergie, conseil). Sois précis, factuel, sans flatterie.",
      },
      { role: "user", content: `Voici le CV à analyser :\n\n${data.cvText}` },
    ]);
    return { summary: content };
  });

export const chatReturn = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      messages: z
        .array(
          z.object({
            role: z.enum(["user", "assistant"]),
            content: z.string().min(1).max(4000),
          }),
        )
        .min(1)
        .max(20),
      cvSummary: z.string().max(8000).optional(),
    }).parse,
  )
  .handler(async ({ data }) => {
    const sys =
      SYSTEM_RETURN_COACH +
      (data.cvSummary
        ? `\n\nContexte du candidat (résumé de son CV) :\n${data.cvSummary}\n\nUtilise ce contexte pour personnaliser tes réponses quand c'est pertinent.`
        : "");
    const content = await callGateway([
      { role: "system", content: sys },
      ...data.messages,
    ]);
    return { reply: content };
  });
