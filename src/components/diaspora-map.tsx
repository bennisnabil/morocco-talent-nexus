/**
 * DiasporaMap — Interactive SVG world map showing Moroccan diaspora concentration.
 * City dots sized by community size, colored by type (talent hub / diaspora cluster).
 * Hover tooltip shows city name + estimated community size.
 */

import { useState } from "react";

type City = {
  id: string;
  name: string;
  country: string;
  continent: string;
  // Approximate SVG coordinates (0-1000 x, 0-500 y) on an Equirectangular projection
  x: number;
  y: number;
  /** Community size estimate */
  population: number;
  type: "hub" | "cluster" | "emerging";
};

const CITIES: City[] = [
  // Europe
  { id: "paris", name: "Paris", country: "France", continent: "Europe", x: 481, y: 148, population: 800000, type: "hub" },
  { id: "madrid", name: "Madrid", country: "Espagne", continent: "Europe", x: 458, y: 168, population: 500000, type: "hub" },
  { id: "brussels", name: "Bruxelles", country: "Belgique", continent: "Europe", x: 491, y: 138, population: 250000, type: "hub" },
  { id: "amsterdam", name: "Amsterdam", country: "Pays-Bas", continent: "Europe", x: 494, y: 130, population: 350000, type: "hub" },
  { id: "london", name: "Londres", country: "Royaume-Uni", continent: "Europe", x: 475, y: 132, population: 300000, type: "hub" },
  { id: "milan", name: "Milan", country: "Italie", continent: "Europe", x: 503, y: 152, population: 150000, type: "cluster" },
  { id: "berlin", name: "Berlin", country: "Allemagne", continent: "Europe", x: 510, y: 128, population: 90000, type: "cluster" },
  { id: "montreal", name: "Montréal", country: "Canada", continent: "Amériques", x: 226, y: 148, population: 120000, type: "cluster" },
  // Middle East & Gulf
  { id: "dubai", name: "Dubaï", country: "EAU", continent: "Golfe", x: 660, y: 218, population: 180000, type: "hub" },
  { id: "qatar", name: "Doha", country: "Qatar", continent: "Golfe", x: 645, y: 228, population: 60000, type: "cluster" },
  { id: "riyadh", name: "Riyad", country: "Arabie Saoudite", continent: "Golfe", x: 634, y: 225, population: 40000, type: "emerging" },
  // Americas
  { id: "newyork", name: "New York", country: "États-Unis", continent: "Amériques", x: 236, y: 160, population: 80000, type: "cluster" },
  { id: "losangeles", name: "Los Angeles", country: "États-Unis", continent: "Amériques", x: 145, y: 185, population: 55000, type: "emerging" },
  // Morocco
  { id: "casablanca", name: "Casablanca", country: "Maroc", continent: "Afrique", x: 455, y: 210, population: 4200000, type: "hub" },
  { id: "rabat", name: "Rabat", country: "Maroc", continent: "Afrique", x: 451, y: 205, population: 900000, type: "hub" },
  { id: "marrakech", name: "Marrakech", country: "Maroc", continent: "Afrique", x: 452, y: 218, population: 500000, type: "cluster" },
  { id: "tanger", name: "Tanger", country: "Maroc", continent: "Afrique", x: 455, y: 198, population: 400000, type: "cluster" },
  // Africa
  { id: "johannesburg", name: "Johannesburg", country: "Afrique du Sud", continent: "Afrique", x: 555, y: 380, population: 20000, type: "emerging" },
  { id: "abidjan", name: "Abidjan", country: "Côte d'Ivoire", continent: "Afrique", x: 465, y: 280, population: 30000, type: "emerging" },
];

const TYPE_COLORS: Record<City["type"], { fill: string; stroke: string; label: string }> = {
  hub: { fill: "#c9a96e", stroke: "#a07840", label: "Hub talent" },
  cluster: { fill: "#4a7ab5", stroke: "#2d5a8e", label: "Communauté active" },
  emerging: { fill: "#7c9e8c", stroke: "#4d7264", label: "Présence émergente" },
};

function sizeFromPop(pop: number, isMaroc: boolean): number {
  if (isMaroc) return Math.min(14, 6 + Math.log10(pop) * 3);
  return Math.min(10, 3 + Math.log10(pop) * 2);
}

function fmtPop(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1000) return Math.round(n / 1000) + "k";
  return String(n);
}

interface Tooltip {
  city: City;
  x: number;
  y: number;
}

export function DiasporaMap() {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const [filter, setFilter] = useState<City["type"] | "all">("all");

  const filtered = CITIES.filter((c) => filter === "all" || c.type === filter);

  return (
    <div className="w-full">
      {/* Legend + filters */}
      <div className="flex flex-wrap items-center gap-6 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border transition-colors ${
            filter === "all" ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/40"
          }`}
        >
          Toutes
        </button>
        {(["hub", "cluster", "emerging"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border transition-colors ${
              filter === t ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/40"
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
              style={{ backgroundColor: TYPE_COLORS[t].fill }}
            />
            {TYPE_COLORS[t].label}
          </button>
        ))}
      </div>

      {/* SVG Map */}
      <div className="relative border border-border overflow-hidden bg-background">
        <svg
          viewBox="0 0 1000 500"
          className="w-full"
          style={{ background: "var(--color-secondary, #f8f6f3)" }}
          onMouseLeave={() => setTooltip(null)}
        >
          {/* Simplified world landmass paths — key continents */}
          <g fill="var(--color-border, #e5e1db)" stroke="var(--background, #fff)" strokeWidth="0.5" opacity="0.7">
            {/* North America */}
            <path d="M70,80 L220,80 L270,130 L250,180 L210,200 L170,250 L120,240 L80,200 L60,150 Z" />
            {/* South America */}
            <path d="M200,250 L280,240 L310,300 L300,380 L260,430 L220,430 L190,380 L180,300 Z" />
            {/* Europe */}
            <path d="M440,80 L560,80 L580,140 L560,170 L520,180 L480,175 L450,170 L430,140 Z" />
            {/* Africa */}
            <path d="M440,185 L570,185 L590,250 L580,340 L540,420 L490,440 L450,420 L420,340 L420,250 Z" />
            {/* Asia */}
            <path d="M560,70 L870,70 L900,150 L880,220 L820,250 L740,240 L680,250 L620,230 L580,190 L560,140 Z" />
            {/* Middle East */}
            <path d="M560,190 L680,190 L700,260 L650,280 L580,270 L550,240 Z" />
            {/* Australia */}
            <path d="M760,280 L900,280 L920,360 L880,400 L810,400 L760,370 L740,330 Z" />
            {/* UK */}
            <path d="M460,110 L490,110 L495,140 L475,145 L460,135 Z" />
            {/* Japan */}
            <path d="M860,120 L890,120 L895,160 L870,165 L855,145 Z" />
          </g>

          {/* City dots */}
          {filtered.map((city) => {
            const isMaroc = city.country === "Maroc";
            const r = sizeFromPop(city.population, isMaroc);
            const cfg = TYPE_COLORS[city.type];
            return (
              <g key={city.id}>
                {/* Pulse ring for hubs */}
                {city.type === "hub" && (
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={r + 4}
                    fill="none"
                    stroke={cfg.fill}
                    strokeWidth="1"
                    opacity="0.3"
                  />
                )}
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={r}
                  fill={cfg.fill}
                  stroke={cfg.stroke}
                  strokeWidth="1"
                  opacity="0.85"
                  className="cursor-pointer hover:opacity-100 transition-opacity"
                  onMouseEnter={(e) => {
                    const svg = e.currentTarget.closest("svg")!;
                    const rect = svg.getBoundingClientRect();
                    const ptX = (city.x / 1000) * rect.width;
                    const ptY = (city.y / 500) * rect.height;
                    setTooltip({ city, x: ptX, y: ptY });
                  }}
                />
              </g>
            );
          })}

          {/* Morocco label */}
          <text x="456" y="193" fontSize="6" fill="var(--color-foreground, #1a1a1a)" opacity="0.7" textAnchor="middle" fontFamily="serif" fontStyle="italic">
            Maroc
          </text>
        </svg>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-10 bg-background border border-border px-4 py-3 text-sm shadow-lg"
            style={{
              left: Math.min(tooltip.x + 12, 999),
              top: Math.max(tooltip.y - 60, 4),
              transform: tooltip.x > 700 ? "translateX(-110%)" : undefined,
              minWidth: 160,
            }}
          >
            <p className="font-medium">{tooltip.city.name}</p>
            <p className="text-xs text-muted-foreground">{tooltip.city.country}</p>
            <p className="text-xs mt-1">
              <span
                className="inline-block w-2 h-2 rounded-full mr-1.5"
                style={{ backgroundColor: TYPE_COLORS[tooltip.city.type].fill }}
              />
              {TYPE_COLORS[tooltip.city.type].label}
            </p>
            {tooltip.city.country !== "Maroc" && (
              <p className="text-xs text-muted-foreground mt-1">
                ~{fmtPop(tooltip.city.population)} Marocains
              </p>
            )}
          </div>
        )}
      </div>

      <p className="text-[10px] text-muted-foreground/60 mt-3 text-right">
        Estimations communautaires 2024-2025. Sources : CCME, Ministère des MRE.
      </p>
    </div>
  );
}
