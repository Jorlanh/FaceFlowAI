import { createFileRoute } from "@tanstack/react-router";
import { Building2, Users, Database, Shield, Server, AlertTriangle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/dashboard/admin")({
  component: Admin,
});

const clinics = [
  { nome: "Odonto Premium SP", plano: "Premium", mrr: "R$ 1.497", users: 12, status: "ativo" },
  { nome: "Harmonização Bela Vista", plano: "Pro", mrr: "R$ 497", users: 5, status: "ativo" },
  { nome: "Smile Center Curitiba", plano: "Pro", mrr: "R$ 497", users: 4, status: "ativo" },
  { nome: "Clínica Lumière RJ", plano: "Premium", mrr: "R$ 1.497", users: 18, status: "ativo" },
  { nome: "Dental Quality BH", plano: "Starter", mrr: "R$ 197", users: 2, status: "trial" },
  { nome: "Face Premium POA", plano: "Premium", mrr: "R$ 1.497", users: 9, status: "inadimplente" },
];

function Admin() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
            <Shield className="h-3 w-3" /> Modo Administrador
          </div>
          <h1 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight">Master Admin</h1>
          <p className="text-sm text-muted-foreground">Cérebro da plataforma · gestão global</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { l: "Clínicas ativas", v: "1.247", icon: Building2 },
          { l: "Usuários totais", v: "8.942", icon: Users },
          { l: "MRR global", v: "R$ 487k", icon: Database },
          { l: "Uptime 30d", v: "99.98%", icon: Server },
        ].map((k) => (
          <div key={k.l} className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
              <k.icon className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{k.l}</div>
              <div className="font-[var(--font-display)] text-xl font-semibold">{k.v}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card/60">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h3 className="font-semibold">Clínicas</h3>
          <input
            placeholder="Buscar clínica…"
            className="h-9 w-64 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
              <th className="px-6 py-3 text-left font-medium">Clínica</th>
              <th className="px-4 py-3 text-left font-medium">Plano</th>
              <th className="px-4 py-3 text-left font-medium">MRR</th>
              <th className="px-4 py-3 text-left font-medium">Usuários</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 text-right font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {clinics.map((c) => (
              <tr key={c.nome} className="border-b border-border/40 transition-colors hover:bg-card/80">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-9 w-9 place-items-center rounded-lg text-xs font-semibold text-primary-foreground"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      {c.nome.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                    </div>
                    <span className="font-medium">{c.nome}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="rounded-md bg-primary/15 px-2 py-0.5 text-xs text-primary">{c.plano}</span>
                </td>
                <td className="px-4 py-4 font-mono">{c.mrr}</td>
                <td className="px-4 py-4 text-muted-foreground">{c.users}</td>
                <td className="px-4 py-4">
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs ${
                      c.status === "ativo"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : c.status === "trial"
                          ? "bg-amber-500/15 text-amber-400"
                          : "bg-rose-500/15 text-rose-400"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <button className="inline-flex items-center gap-1 rounded-md bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent hover:bg-accent/25">
                    Entrar como clínica <ArrowRight className="h-3 w-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card/60 p-6">
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            <h3 className="font-semibold">Alertas do sistema</h3>
          </div>
          <div className="space-y-2 text-sm">
            {[
              "API WhatsApp Cloud: latência elevada (245ms)",
              "Clínica Face Premium POA: pagamento atrasado 3d",
              "IA v3.2-faceflow: deploy concluído ✓",
            ].map((a, i) => (
              <div key={i} className="rounded-lg border border-border bg-background/40 px-3 py-2 text-xs">
                {a}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card/60 p-6">
          <h3 className="mb-4 font-semibold">Logs recentes</h3>
          <div className="space-y-1 font-mono text-[11px] text-muted-foreground">
            <div><span className="text-emerald-400">[INFO]</span> 14:32:18 · clinic.signup · Odonto Vida BH</div>
            <div><span className="text-emerald-400">[INFO]</span> 14:31:02 · payment.success · R$ 497,00</div>
            <div><span className="text-amber-400">[WARN]</span> 14:28:45 · ai.tokens · usage 87% do plano</div>
            <div><span className="text-emerald-400">[INFO]</span> 14:27:11 · automation.executed · 12 leads</div>
            <div><span className="text-rose-400">[ERR ]</span> 14:24:03 · webhook.failed · retry agendado</div>
          </div>
        </div>
      </div>
    </div>
  );
}
