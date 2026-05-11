const sectors = [
  "Tech",
  "Finance",
  "Industrie",
  "Infrastructure",
  "ESG",
  "Hôtellerie",
  "Santé",
];

export function SectorGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border-l border-t border-border">
      {sectors.map((s, i) => (
        <div
          key={s}
          className="p-6 lg:p-8 border-r border-b border-border hover:bg-secondary/30 transition-colors"
        >
          <span className="block text-[10px] tracking-widest text-muted-foreground mb-3">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-serif text-xl">{s}</span>
        </div>
      ))}
    </div>
  );
}
