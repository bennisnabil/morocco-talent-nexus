import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/calculateur")({
  head: () => ({
    meta: [
      { title: "Calculateur fiscal DRI — DiasporaConnect" },
      {
        name: "description",
        content:
          "Estimez votre gain fiscal en rentrant au Maroc via le statut DRI. Simulateur interactif exclusif DiasporaConnect.",
      },
      { property: "og:title", content: "Calculateur fiscal DRI — DiasporaConnect" },
      {
        property: "og:description",
        content: "Simulateur fiscal pour cadres de la diaspora marocaine.",
      },
    ],
  }),
  component: CalculateurPage,
});

// DRI = Diplômé Ressortissant à l'Étranger
// Key benefit: flat 20% income tax rate for 5 years instead of progressive rates (up to 38%)
// Plus exemption on foreign-source income for first 5 years

const PROGRESSIVE_BRACKETS = [
  { limit: 30000, rate: 0 },
  { limit: 50000, rate: 0.1 },
  { limit: 60000, rate: 0.2 },
  { limit: 80000, rate: 0.3 },
  { limit: 180000, rate: 0.34 },
  { limit: Infinity, rate: 0.38 },
];

function calcProgressiveTax(annualMAD: number): number {
  let tax = 0;
  let prev = 0;
  for (const bracket of PROGRESSIVE_BRACKETS) {
    if (annualMAD <= prev) break;
    const taxable = Math.min(annualMAD, bracket.limit) - prev;
    tax += taxable * bracket.rate;
    prev = bracket.limit;
  }
  return tax;
}

function calcDRITax(annualMAD: number): number {
  return annualMAD * 0.2;
}

function fmt(n: number): string {
  return new Intl.NumberFormat("fr-MA", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

// Common exchange rates (approx)
const CURRENCIES: { code: string; label: string; toMAD: number }[] = [
  { code: "EUR", label: "Euro (€)", toMAD: 10.9 },
  { code: "USD", label: "Dollar US ($)", toMAD: 10.1 },
  { code: "GBP", label: "Livre sterling (£)", toMAD: 12.8 },
  { code: "CHF", label: "Franc suisse (CHF)", toMAD: 11.5 },
  { code: "CAD", label: "Dollar canadien (CA$)", toMAD: 7.5 },
  { code: "AED", label: "Dirham UAE (AED)", toMAD: 2.75 },
  { code: "MAD", label: "Dirham marocain (DH)", toMAD: 1 },
];

type ResultData = {
  annualMAD: number;
  monthlyMAD: number;
  progressiveTax: number;
  driTax: number;
  gain: number;
  gain5y: number;
  effectiveRateNormal: number;
  effectiveRateDRI: number;
};

function CalculateurPage() {
  const [salary, setSalary] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [period, setPeriod] = useState<"monthly" | "annual">("monthly");
  const [foreignIncome, setForeignIncome] = useState("");
  const [result, setResult] = useState<ResultData | null>(null);

  function calculate() {
    const cur = CURRENCIES.find((c) => c.code === currency)!;
    const raw = parseFloat(salary.replace(/\s/g, "").replace(",", "."));
    if (isNaN(raw) || raw <= 0) return;

    const annualForeignMAD =
      parseFloat(foreignIncome.replace(/\s/g, "").replace(",", ".") || "0") *
      cur.toMAD *
      (period === "monthly" ? 12 : 1);

    const annualLocalMAD = raw * cur.toMAD * (period === "monthly" ? 12 : 1);
    const totalAnnualMAD = annualLocalMAD + annualForeignMAD;

    // Normal regime: full progressive on local income
    const progressiveTax = calcProgressiveTax(annualLocalMAD);
    // DRI regime: 20% flat on local income, 0 on foreign
    const driTax = calcDRITax(annualLocalMAD);

    const gain = progressiveTax - driTax;
    const gain5y = gain * 5;

    const effectiveRateNormal = annualLocalMAD > 0 ? progressiveTax / annualLocalMAD : 0;
    const effectiveRateDRI = annualLocalMAD > 0 ? driTax / annualLocalMAD : 0;

    setResult({
      annualMAD: annualLocalMAD,
      monthlyMAD: annualLocalMAD / 12,
      progressiveTax,
      driTax,
      gain,
      gain5y,
      effectiveRateNormal,
      effectiveRateDRI,
    });
  }

  const pct = (r: number) => (r * 100).toFixed(1) + "%";

  return (
    <>
      <section className="px-6 pt-20 pb-16 lg:pt-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Outil exclusif"
            title="Calculateur fiscal DRI"
            subtitle="Estimez votre économie d'impôt en rentrant au Maroc sous le statut de Diplômé Ressortissant à l'Étranger. Taux forfaitaire 20% pendant 5 ans."
            serifClass="text-5xl md:text-6xl"
          />
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-secondary/20 border-b border-border px-6 py-4">
        <p className="max-w-7xl mx-auto text-xs text-muted-foreground">
          <strong>Simulation indicative</strong> — Basée sur le régime DRI (CGI Maroc, art. 57-16). Les résultats sont des estimations à titre informatif uniquement. Consultez un expert-comptable ou fiscaliste pour votre situation personnelle.
        </p>
      </div>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* DRI Info box */}
          <div className="border-l-4 border-primary pl-6 py-2">
            <h2 className="font-serif text-xl mb-3">Le statut DRI en bref</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">Taux d'imposition</p>
                <p className="font-semibold text-2xl">20%</p>
                <p className="text-muted-foreground text-xs">Forfaitaire (vs. jusqu'à 38%)</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">Durée</p>
                <p className="font-semibold text-2xl">5 ans</p>
                <p className="text-muted-foreground text-xs">À partir de la prise de poste</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">Revenus étrangers</p>
                <p className="font-semibold text-2xl">Exonérés</p>
                <p className="text-muted-foreground text-xs">Pendant la période DRI</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Salaire brut au Maroc
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="ex. 8 000"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="w-full bg-background ring-1 ring-border focus:ring-primary outline-none px-4 py-3 text-sm transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  Devise
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full bg-background ring-1 ring-border focus:ring-primary outline-none px-4 py-3 text-sm transition-colors"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              {(["monthly", "annual"] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriod(p)}
                  className={`px-5 py-2.5 text-sm border transition-colors ${
                    period === p
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-foreground/40"
                  }`}
                >
                  {p === "monthly" ? "Mensuel" : "Annuel"}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Revenus étrangers conservés (optionnel) — {period === "monthly" ? "par mois" : "par an"}
              </label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="ex. 2 000 (dividendes, loyers étrangers…)"
                value={foreignIncome}
                onChange={(e) => setForeignIncome(e.target.value)}
                className="w-full bg-background ring-1 ring-border focus:ring-primary outline-none px-4 py-3 text-sm transition-colors"
              />
            </div>

            <button
              type="button"
              onClick={calculate}
              className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Calculer mon économie
            </button>
          </div>

          {/* Results */}
          {result && (
            <div className="border border-border">
              <div className="px-8 py-6 border-b border-border bg-secondary/10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Résultats de la simulation</p>
                <p className="text-sm text-muted-foreground">
                  Salaire annuel au Maroc : <strong>{fmt(result.annualMAD)} DH</strong>
                  {" "}({fmt(result.monthlyMAD)} DH/mois)
                </p>
              </div>

              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                <div className="px-8 py-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
                    Régime normal (barème progressif)
                  </p>
                  <p className="text-4xl font-serif mb-2">{fmt(result.progressiveTax)} DH</p>
                  <p className="text-sm text-muted-foreground">d'impôt par an</p>
                  <p className="mt-3 text-sm">
                    Taux effectif : <strong className="text-destructive">{pct(result.effectiveRateNormal)}</strong>
                  </p>
                </div>
                <div className="px-8 py-8 bg-primary/5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
                    Statut DRI (taux forfaitaire 20%)
                  </p>
                  <p className="text-4xl font-serif mb-2">{fmt(result.driTax)} DH</p>
                  <p className="text-sm text-muted-foreground">d'impôt par an</p>
                  <p className="mt-3 text-sm">
                    Taux effectif : <strong className="text-primary">{pct(result.effectiveRateDRI)}</strong>
                  </p>
                </div>
              </div>

              {result.gain > 0 && (
                <div className="px-8 py-8 border-t border-border bg-primary text-primary-foreground">
                  <p className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-2">Votre gain DRI</p>
                  <div className="flex flex-wrap gap-8 items-end">
                    <div>
                      <p className="font-serif text-5xl">{fmt(result.gain)} DH</p>
                      <p className="text-sm opacity-70 mt-1">économisés par an</p>
                    </div>
                    <div>
                      <p className="font-serif text-3xl">{fmt(result.gain5y)} DH</p>
                      <p className="text-sm opacity-70 mt-1">sur 5 ans</p>
                    </div>
                  </div>
                </div>
              )}

              {result.gain <= 0 && (
                <div className="px-8 py-6 border-t border-border bg-secondary/10">
                  <p className="text-sm text-muted-foreground">
                    À ce niveau de revenu, le barème progressif est déjà favorable. Le statut DRI reste utile pour les revenus étrangers et la simplification administrative.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* CTA */}
          <div className="border-t border-border pt-8 text-sm text-muted-foreground">
            <p className="mb-4">
              Vous souhaitez approfondir votre stratégie de retour ? Nos partners vous accompagnent sur la structuration fiscale, la négociation salariale et le timing optimal.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Prendre rendez-vous avec un partner →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
