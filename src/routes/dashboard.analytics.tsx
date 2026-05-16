import { createFileRoute } from "@tanstack/react-router";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer,
  Tooltip, XAxis, YAxis,
} from "recharts";
import { revenueChart, leadsChart } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/analytics")({
  component: Analytics,
});

function Analytics() {
  const heat = Array.from({ length: 7 * 24 }, () => Math.random());
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight">Analytics</h1>
        <p className="text-sm text-muted-foreground">Insights inteligentes sobre sua operação</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { l: "MRR", v: "R$ 187k", d: "+12.4%" },
          { l: "ARR", v: "R$ 2.24M", d: "+18.1%" },
          { l: "Churn", v: "1.8%", d: "-0.4%" },
          { l: "LTV / CAC", v: "8.2x", d: "+1.1x" },
        ].map((k) => (
          <div key={k.l} className="rounded-2xl border border-border bg-card/60 p-4">
            <div className="text-xs text-muted-foreground">{k.l}</div>
            <div className="mt-1 font-[var(--font-display)] text-2xl font-semibold">{k.v}</div>
            <div className="text-xs text-emerald-400">{k.d}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Receita por mês">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueChart}>
              <defs>
                <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.72 0.18 260)" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="oklch(0.72 0.18 260)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
              <XAxis dataKey="mes" stroke="oklch(0.6 0.02 270)" fontSize={11} />
              <YAxis stroke="oklch(0.6 0.02 270)" fontSize={11} />
              <Tooltip contentStyle={{ background: "oklch(0.17 0.014 270)", border: "1px solid oklch(0.27 0.015 270)", borderRadius: 12 }} />
              <Area dataKey="receita" stroke="oklch(0.72 0.18 260)" fill="url(#rev)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Funil de conversão">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={leadsChart}>
              <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
              <XAxis dataKey="mes" stroke="oklch(0.6 0.02 270)" fontSize={11} />
              <YAxis stroke="oklch(0.6 0.02 270)" fontSize={11} />
              <Tooltip contentStyle={{ background: "oklch(0.17 0.014 270)", border: "1px solid oklch(0.27 0.015 270)", borderRadius: 12 }} />
              <Bar dataKey="leads" radius={[6, 6, 0, 0]} fill="oklch(0.72 0.18 260)" />
              <Bar dataKey="convertidos" radius={[6, 6, 0, 0]} fill="oklch(0.65 0.24 295)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="rounded-2xl border border-border bg-card/60 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">Heatmap de mensagens</h3>
          <span className="text-xs text-muted-foreground">7 dias × 24 horas</span>
        </div>
        <div className="grid grid-cols-24 gap-1" style={{ gridTemplateColumns: "repeat(24, 1fr)" }}>
          {heat.map((v, i) => (
            <div
              key={i}
              className="aspect-square rounded-sm"
              style={{
                background: `oklch(0.72 0.18 260 / ${0.1 + v * 0.7})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-6">
      <h3 className="mb-4 font-semibold">{title}</h3>
      <div className="h-72">{children}</div>
    </div>
  );
}
