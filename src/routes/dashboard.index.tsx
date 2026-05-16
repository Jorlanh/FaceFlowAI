import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer,
  Tooltip, XAxis, YAxis, Cell, PieChart, Pie,
} from "recharts";
import { dashboardKpis, leadsChart, revenueChart, channelData, conversations } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

function format(v: number, prefix?: string, suffix?: string) {
  const n = v >= 1000 ? v.toLocaleString("pt-BR") : v.toString();
  return `${prefix ?? ""}${n}${suffix ?? ""}`;
}

const COLORS = ["oklch(0.72 0.18 260)", "oklch(0.65 0.24 295)", "oklch(0.78 0.18 230)", "oklch(0.78 0.16 180)"];

function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight">
            Bom dia, Dr. Rafael 👋
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Aqui está o pulso da sua clínica hoje.
          </p>
        </div>
        <div className="flex gap-2">
          {["Hoje", "7d", "30d", "90d", "1a"].map((p, i) => (
            <button
              key={p}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium ${i === 2 ? "bg-primary/15 text-primary ring-1 ring-primary/30" : "text-muted-foreground hover:bg-card"}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
        {dashboardKpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-4 backdrop-blur"
          >
            <div className="text-xs text-muted-foreground">{k.label}</div>
            <div className="mt-2 font-[var(--font-display)] text-2xl font-semibold tracking-tight">
              {format(k.value, k.prefix, k.suffix)}
            </div>
            <div
              className={`mt-1 inline-flex items-center gap-1 text-xs font-medium ${k.delta >= 0 ? "text-emerald-400" : "text-rose-400"}`}
            >
              {k.delta >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(k.delta)}%
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Leads chart */}
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Crescimento de leads</h3>
              <p className="text-xs text-muted-foreground">Captação x conversão · últimos 7 meses</p>
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
              Ver detalhes <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={leadsChart} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="leads" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.72 0.18 260)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="oklch(0.72 0.18 260)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="conv" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.65 0.24 295)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="oklch(0.65 0.24 295)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
                <XAxis dataKey="mes" stroke="oklch(0.6 0.02 270)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="oklch(0.6 0.02 270)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "oklch(0.17 0.014 270)",
                    border: "1px solid oklch(0.27 0.015 270)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="leads" stroke="oklch(0.72 0.18 260)" fill="url(#leads)" strokeWidth={2} />
                <Area type="monotone" dataKey="convertidos" stroke="oklch(0.65 0.24 295)" fill="url(#conv)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Channels */}
        <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
          <h3 className="mb-1 font-semibold">Origem dos leads</h3>
          <p className="mb-4 text-xs text-muted-foreground">Distribuição por canal</p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={channelData} dataKey="valor" innerRadius={50} outerRadius={75} paddingAngle={4}>
                  {channelData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {channelData.map((c, i) => (
              <div key={c.canal} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ background: COLORS[i] }} />
                  <span>{c.canal}</span>
                </div>
                <span className="font-mono text-muted-foreground">{c.valor}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Receita mensal</h3>
              <p className="text-xs text-muted-foreground">Faturamento estimado em R$</p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueChart} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
                <XAxis dataKey="mes" stroke="oklch(0.6 0.02 270)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="oklch(0.6 0.02 270)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "oklch(0.17 0.014 270)",
                    border: "1px solid oklch(0.27 0.015 270)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="receita" radius={[8, 8, 0, 0]} fill="oklch(0.72 0.18 260)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent conversations */}
        <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
          <h3 className="mb-4 font-semibold">Conversas em andamento</h3>
          <div className="space-y-3">
            {conversations.slice(0, 5).map((c) => (
              <div key={c.id} className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className="grid h-9 w-9 place-items-center rounded-full text-xs font-semibold text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {c.avatar}
                  </div>
                  {c.online && (
                    <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-card" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-medium">{c.nome}</span>
                    <span className="text-[10px] text-muted-foreground">{c.hora}</span>
                  </div>
                  <p className="truncate text-xs text-muted-foreground">{c.ultimaMensagem}</p>
                </div>
                {c.iaAtiva && (
                  <span className="rounded-md bg-primary/15 px-1.5 py-0.5 text-[9px] font-medium text-primary">IA</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
