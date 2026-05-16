import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bot, Sparkles, Zap, TrendingUp, Code2 } from "lucide-react";
import {
  Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid,
} from "recharts";

export const Route = createFileRoute("/dashboard/ia")({
  component: IAPage,
});

const tokensData = Array.from({ length: 30 }, (_, i) => ({
  d: `${i + 1}`,
  tokens: Math.floor(Math.random() * 50000 + 20000),
}));

function IAPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight">
            IA Odontológica
          </h1>
          <p className="text-sm text-muted-foreground">Painel de controle do cérebro da sua clínica</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          IA ATIVA · v3.2-faceflow
        </div>
      </div>

      {/* Neural visual */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-radial)" }}
        />
        <div className="relative grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
              <Sparkles className="h-3 w-3" /> Modelo Premium
            </div>
            <h2 className="font-[var(--font-display)] text-3xl font-semibold">
              IA Comercial <span className="gradient-text">v3.2</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fine-tuned em 8.4M de conversas de clínicas odontológicas e estéticas.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Stat label="Conversas hoje" value="1.847" />
              <Stat label="Taxa qualificação" value="92.4%" />
              <Stat label="Tokens consumidos" value="3.2M" />
              <Stat label="Custo estimado" value="R$ 84,20" />
            </div>
          </div>
          <div className="relative grid place-items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute h-64 w-64 rounded-full border border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute h-80 w-80 rounded-full border border-accent/20"
            />
            <div
              className="relative grid h-40 w-40 place-items-center rounded-full animate-pulse-glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Bot className="h-16 w-16 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Section title="Consumo de tokens" icon={Zap} className="lg:col-span-2">
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={tokensData}>
                <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
                <XAxis dataKey="d" stroke="oklch(0.6 0.02 270)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="oklch(0.6 0.02 270)" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "oklch(0.17 0.014 270)",
                    border: "1px solid oklch(0.27 0.015 270)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Line type="monotone" dataKey="tokens" stroke="oklch(0.72 0.18 260)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Section>

        <Section title="Performance IA" icon={TrendingUp}>
          <div className="space-y-3">
            <Metric label="Tempo médio resposta" value="1.2s" pct={88} />
            <Metric label="Taxa conversão" value="32.7%" pct={67} />
            <Metric label="NPS conversa" value="4.7/5" pct={94} />
            <Metric label="Takeover humano" value="8%" pct={8} />
          </div>
        </Section>
      </div>

      <Section title="Prompt Editor" icon={Code2}>
        <div className="rounded-xl border border-border bg-background/60 p-4 font-mono text-xs leading-relaxed text-muted-foreground">
          <div className="text-primary">## Identidade</div>
          <div>Você é a assistente comercial da Clínica Odonto+. Tom: empático, próximo, consultivo.</div>
          <br />
          <div className="text-primary">## Objetivo</div>
          <div>Qualificar leads, contornar objeções e marcar avaliação gratuita.</div>
          <br />
          <div className="text-primary">## Regras</div>
          <div>- Nunca prometa resultados. Sempre direcione para avaliação presencial.</div>
          <div>- Use emojis com moderação. Linguagem PT-BR natural.</div>
          <div>- Ao detectar interesse alto, ofereça horário em até 48h.</div>
        </div>
        <button className="mt-3 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-xs hover:bg-secondary">
          Editar prompt
        </button>
      </Section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 font-[var(--font-display)] text-xl font-semibold">{value}</div>
    </div>
  );
}

function Section({ title, icon: Icon, children, className }: any) {
  return (
    <div className={`rounded-2xl border border-border bg-card/60 p-6 backdrop-blur ${className ?? ""}`}>
      <div className="mb-4 flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Metric({ label, value, pct }: { label: string; value: string; pct: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono font-semibold">{value}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: "var(--gradient-primary)" }}
        />
      </div>
    </div>
  );
}
