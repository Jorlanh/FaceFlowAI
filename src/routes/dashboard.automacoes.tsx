import { createFileRoute } from "@tanstack/react-router";
import { Zap, MessageCircle, Calendar, AlertTriangle, Bot, ArrowRight, Plus } from "lucide-react";

export const Route = createFileRoute("/dashboard/automacoes")({
  component: Automacoes,
});

const nodes = [
  { id: "trigger", x: 60, y: 200, label: "Lead recebido", icon: MessageCircle, type: "trigger" },
  { id: "ai", x: 320, y: 200, label: "IA qualifica", icon: Bot, type: "action" },
  { id: "cond", x: 580, y: 200, label: "Score > 70?", icon: AlertTriangle, type: "condition" },
  { id: "agenda", x: 840, y: 100, label: "Agendar avaliação", icon: Calendar, type: "action" },
  { id: "nurture", x: 840, y: 300, label: "Nutrir 7 dias", icon: Zap, type: "action" },
];

function Automacoes() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight">Automações</h1>
          <p className="text-sm text-muted-foreground">Builder visual de fluxos com IA</p>
        </div>
        <button
          className="inline-flex h-9 items-center gap-2 rounded-lg border-0 px-3 text-sm font-medium text-primary-foreground shadow-glow"
          style={{ background: "var(--gradient-primary)" }}
        >
          <Plus className="h-4 w-4" /> Nova automação
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        {[
          { l: "Ativas", v: "12", c: "emerald" },
          { l: "Execuções hoje", v: "1.247", c: "primary" },
          { l: "Taxa de sucesso", v: "94.2%", c: "primary" },
          { l: "Tempo economizado", v: "84h", c: "accent" },
        ].map((k) => (
          <div key={k.l} className="rounded-2xl border border-border bg-card/60 p-4">
            <div className="text-xs text-muted-foreground">{k.l}</div>
            <div className="mt-1 font-[var(--font-display)] text-2xl font-semibold">{k.v}</div>
          </div>
        ))}
      </div>

      {/* Flow canvas */}
      <div className="relative h-[500px] overflow-hidden rounded-2xl border border-border bg-card/40 grid-bg">
        <div className="absolute left-4 top-4 z-10 rounded-lg border border-border bg-background/80 px-3 py-1.5 text-xs backdrop-blur">
          Fluxo: <span className="font-semibold">Qualificação automática</span>
        </div>

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1100 500">
          {/* connections */}
          <path d="M 180 220 C 250 220, 250 220, 320 220" stroke="oklch(0.72 0.18 260)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          <path d="M 440 220 C 510 220, 510 220, 580 220" stroke="oklch(0.72 0.18 260)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          <path d="M 700 200 C 770 150, 770 120, 840 120" stroke="oklch(0.65 0.24 295)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          <path d="M 700 240 C 770 290, 770 320, 840 320" stroke="oklch(0.55 0.18 22)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        </svg>

        {nodes.map((n) => (
          <div
            key={n.id}
            className="absolute w-[120px]"
            style={{ left: n.x, top: n.y, transform: "translate(0,-50%)" }}
          >
            <div
              className={`group rounded-xl border bg-card/90 p-3 backdrop-blur-xl shadow-elevated transition-all hover:scale-105 ${
                n.type === "trigger"
                  ? "border-emerald-500/40"
                  : n.type === "condition"
                    ? "border-amber-500/40"
                    : "border-primary/40"
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`grid h-7 w-7 place-items-center rounded-md ${
                    n.type === "trigger"
                      ? "bg-emerald-500/15 text-emerald-400"
                      : n.type === "condition"
                        ? "bg-amber-500/15 text-amber-400"
                        : "bg-primary/15 text-primary"
                  }`}
                >
                  <n.icon className="h-3.5 w-3.5" />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {n.type}
                </div>
              </div>
              <div className="mt-2 text-xs font-semibold">{n.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card/60 p-6">
        <h3 className="mb-4 font-semibold">Automações ativas</h3>
        <div className="space-y-2">
          {[
            { n: "Anti-falta inteligente", t: "184 execuções hoje", s: "Ativa" },
            { n: "Reativação 30 dias", t: "Agendado · 09:00", s: "Ativa" },
            { n: "Follow-up orçamento", t: "62 execuções hoje", s: "Ativa" },
            { n: "Recuperação aniversário", t: "8 execuções hoje", s: "Ativa" },
          ].map((a) => (
            <div key={a.n} className="flex items-center justify-between rounded-xl border border-border bg-background/40 px-4 py-3">
              <div>
                <div className="text-sm font-medium">{a.n}</div>
                <div className="text-[11px] text-muted-foreground">{a.t}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                  {a.s}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
