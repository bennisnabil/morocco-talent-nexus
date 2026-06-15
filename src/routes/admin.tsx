import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin — DiasporaConnect" }],
  }),
  component: AdminPage,
});

// Change this password directly here
const ADMIN_PASSWORD = "diaspora2026";

const STATUS_LABELS: Record<string, string> = {
  new: "Nouveau",
  in_progress: "En cours",
  accepted: "Accepté",
  refused: "Refusé",
};
const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  in_progress: "bg-yellow-100 text-yellow-800",
  accepted: "bg-green-100 text-green-800",
  refused: "bg-red-100 text-red-800",
};

interface Candidature {
  id: string;
  type: "candidature" | "contact";
  name: string;
  email: string;
  role?: string;
  location?: string;
  sector?: string;
  seniority?: string;
  linkedin?: string;
  country?: string;
  message: string;
  date: string;
  status: string;
  notes: string;
}

function loadData(): Candidature[] {
  try {
    const raw = localStorage.getItem("dt_submissions");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveData(data: Candidature[]) {
  localStorage.setItem("dt_submissions", JSON.stringify(data));
}

function exportCSV(data: Candidature[]) {
  const headers = ["Type", "Nom", "Email", "Rôle/Fonction", "Localisation/Pays", "Secteur", "Séniorité", "LinkedIn", "Message", "Date", "Statut", "Notes"];
  const rows = data.map((d) => [
    d.type === "candidature" ? "Candidature" : "Contact",
    d.name, d.email,
    d.role ?? "",
    d.location ?? d.country ?? "",
    d.sector ?? "",
    d.seniority ?? "",
    d.linkedin ?? "",
    d.message.replace(/\n/g, " "),
    d.date,
    STATUS_LABELS[d.status] ?? d.status,
    d.notes.replace(/\n/g, " "),
  ]);
  const csv = [headers, ...rows]
    .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `diasporaconnect-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pwd, setPwd] = useState("");
  const [pwdError, setPwdError] = useState(false);
  const [data, setData] = useState<Candidature[]>([]);
  const [tab, setTab] = useState<"all" | "candidature" | "contact">("all");
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [noteVal, setNoteVal] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("dt_admin") === "1") setAuthed(true);
  }, []);

  const refresh = useCallback(() => setData(loadData()), []);

  useEffect(() => {
    if (authed) refresh();
  }, [authed, refresh]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (pwd === ADMIN_PASSWORD) {
      sessionStorage.setItem("dt_admin", "1");
      setAuthed(true);
    } else {
      setPwdError(true);
      setTimeout(() => setPwdError(false), 2000);
    }
  }

  function updateStatus(id: string, status: string) {
    const updated = data.map((d) => (d.id === id ? { ...d, status } : d));
    saveData(updated);
    setData(updated);
  }

  function saveNote(id: string) {
    const updated = data.map((d) => (d.id === id ? { ...d, notes: noteVal } : d));
    saveData(updated);
    setData(updated);
    setEditingNote(null);
  }

  function deleteEntry(id: string) {
    if (!confirm("Supprimer ce dossier définitivement ?")) return;
    const updated = data.filter((d) => d.id !== id);
    saveData(updated);
    setData(updated);
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-background">
        <div className="w-full max-w-sm">
          <p className="font-serif italic text-3xl text-center mb-2">DiasporaConnect</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-10">
            Accès administrateur
          </p>
          <form onSubmit={login} className="space-y-4">
            <input
              type="password"
              placeholder="Mot de passe"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              className={`w-full bg-background ring-1 px-4 py-3 text-sm outline-none transition-colors ${
                pwdError ? "ring-destructive" : "ring-border focus:ring-primary"
              }`}
              autoFocus
            />
            {pwdError && (
              <p className="text-xs text-destructive">Mot de passe incorrect.</p>
            )}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 text-sm tracking-wide hover:opacity-90"
            >
              Accéder
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filtered = data
    .filter((d) => tab === "all" || d.type === tab)
    .filter((d) =>
      !search ||
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.email.toLowerCase().includes(search.toLowerCase()) ||
      (d.sector ?? "").toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const counts = {
    all: data.length,
    candidature: data.filter((d) => d.type === "candidature").length,
    contact: data.filter((d) => d.type === "contact").length,
    new: data.filter((d) => d.status === "new").length,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-serif italic text-xl">DiasporaConnect</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Admin</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => exportCSV(filtered)}
            className="text-xs border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors"
          >
            ↓ Export CSV
          </button>
          <button
            onClick={() => { sessionStorage.removeItem("dt_admin"); setAuthed(false); }}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Déconnexion
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-6 border-b border-border grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          ["Total", counts.all],
          ["Candidatures", counts.candidature],
          ["Contacts", counts.contact],
          ["Nouveaux", counts.new],
        ].map(([label, count]) => (
          <div key={label as string} className="ring-1 ring-border p-4">
            <p className="text-2xl font-light">{count}</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="px-6 py-4 border-b border-border flex flex-wrap items-center gap-4">
        <div className="flex gap-2">
          {(["all", "candidature", "contact"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-xs px-4 py-2 border transition-colors ${
                tab === t
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {t === "all" ? "Tous" : t === "candidature" ? "Candidatures" : "Contacts"}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Rechercher (nom, email, secteur…)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-auto w-full md:w-64 bg-background ring-1 ring-border focus:ring-primary outline-none px-4 py-2 text-sm"
        />
      </div>

      {/* Table */}
      <div className="px-6 py-6">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-4xl mb-4">📭</p>
            <p className="text-sm">Aucun dossier pour le moment.</p>
            <p className="text-xs mt-2 text-muted-foreground/60">
              Les soumissions des formulaires /join et /contact apparaîtront ici.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((entry) => (
              <div key={entry.id} className="ring-1 ring-border bg-background p-5 space-y-4">
                {/* Row header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-medium">{entry.name}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border px-2 py-0.5">
                        {entry.type === "candidature" ? "Candidature" : "Contact"}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-sm font-medium ${STATUS_COLORS[entry.status] ?? "bg-gray-100 text-gray-800"}`}>
                        {STATUS_LABELS[entry.status] ?? entry.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {entry.email}
                      {entry.linkedin && (
                        <> · <a href={entry.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline underline-offset-2">LinkedIn ↗</a></>
                      )}
                    </p>
                    <p className="text-xs text-muted-foreground/60">
                      {[entry.role, entry.sector, entry.seniority, entry.location ?? entry.country].filter(Boolean).join(" · ")}
                      {" · "}
                      {new Date(entry.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>

                  {/* Status selector */}
                  <div className="flex items-center gap-2">
                    <select
                      value={entry.status}
                      onChange={(e) => updateStatus(entry.id, e.target.value)}
                      className="text-xs border border-border bg-background px-3 py-2 outline-none focus:border-primary cursor-pointer"
                    >
                      {Object.entries(STATUS_LABELS).map(([val, label]) => (
                        <option key={val} value={val}>{label}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => deleteEntry(entry.id)}
                      className="text-xs text-muted-foreground hover:text-destructive transition-colors px-2 py-2"
                      title="Supprimer"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div className="bg-secondary/20 px-4 py-3 text-sm text-foreground/80 leading-relaxed">
                  {entry.message}
                </div>

                {/* Notes */}
                <div>
                  {editingNote === entry.id ? (
                    <div className="space-y-2">
                      <textarea
                        value={noteVal}
                        onChange={(e) => setNoteVal(e.target.value)}
                        rows={3}
                        placeholder="Notes internes…"
                        className="w-full bg-background ring-1 ring-primary outline-none px-3 py-2 text-sm resize-none"
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => saveNote(entry.id)}
                          className="text-xs bg-primary text-primary-foreground px-4 py-1.5 hover:opacity-90"
                        >
                          Sauvegarder
                        </button>
                        <button
                          onClick={() => setEditingNote(null)}
                          className="text-xs border border-border px-4 py-1.5 hover:border-primary/50"
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => { setEditingNote(entry.id); setNoteVal(entry.notes); }}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {entry.notes ? `📝 ${entry.notes}` : "+ Ajouter une note interne"}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
