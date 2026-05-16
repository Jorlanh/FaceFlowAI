import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Send, Paperclip, Smile, Bot, Sparkles, Phone, MoreVertical, Mic } from "lucide-react";
import { conversations } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard/conversas")({
  component: Conversas,
});

const sampleThread = [
  { from: "lead", text: "Oi! Vi o anúncio do botox no Insta, queria saber o valor 💉", time: "14:02" },
  { from: "ai", text: "Oi Mariana! Que ótimo seu interesse 😊 Nosso protocolo de botox premium é personalizado. Você gostaria de avaliação gratuita essa semana?", time: "14:02" },
  { from: "lead", text: "Quero sim! Quinta à tarde dá?", time: "14:05" },
  { from: "ai", text: "Perfeito! Tenho horário às 15h ou 17h na quinta (28/05). Qual fica melhor pra você?", time: "14:05" },
  { from: "lead", text: "17h tá ótimo!", time: "14:06" },
  { from: "ai", text: "Agendado ✅ Vou te enviar a confirmação por aqui e um lembrete na quarta. Endereço: Av. Paulista 1000, sala 1402.", time: "14:06" },
];

function Conversas() {
  const [active, setActive] = useState(conversations[0].id);
  const current = conversations.find((c) => c.id === active)!;

  return (
    <div className="-m-6 grid h-[calc(100vh-4rem)] grid-cols-12">
      {/* List */}
      <div className="col-span-3 flex flex-col border-r border-border bg-card/40">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Buscar conversa"
              className="h-9 w-full rounded-lg border border-border bg-background pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="mt-3 flex gap-1.5 text-xs">
            {["Todas", "IA", "Humano", "Não lidas"].map((t, i) => (
              <button
                key={t}
                className={cn(
                  "rounded-full px-2.5 py-1",
                  i === 0 ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-card",
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="scrollbar-thin flex-1 overflow-y-auto">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                "flex w-full items-start gap-3 border-b border-border/40 px-4 py-3 text-left transition-colors",
                active === c.id ? "bg-primary/10" : "hover:bg-card/60",
              )}
            >
              <div className="relative">
                <div
                  className="grid h-10 w-10 place-items-center rounded-full text-xs font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {c.avatar}
                </div>
                {c.online && <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-card" />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-sm font-medium">{c.nome}</span>
                  <span className="text-[10px] text-muted-foreground">{c.hora}</span>
                </div>
                <p className="truncate text-xs text-muted-foreground">{c.ultimaMensagem}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  {c.iaAtiva && (
                    <span className="rounded-md bg-primary/15 px-1.5 py-0.5 text-[9px] font-medium text-primary">
                      <Bot className="mr-0.5 inline h-2.5 w-2.5" /> IA
                    </span>
                  )}
                  <span className="text-[10px] text-muted-foreground">{c.tratamento}</span>
                </div>
              </div>
              {c.naoLidas > 0 && (
                <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {c.naoLidas}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Thread */}
      <div className="col-span-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-border px-6 py-3">
          <div className="flex items-center gap-3">
            <div
              className="grid h-10 w-10 place-items-center rounded-full text-xs font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              {current.avatar}
            </div>
            <div>
              <div className="text-sm font-semibold">{current.nome}</div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Online · digitando…
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-lg p-2 text-muted-foreground hover:bg-card">
              <Phone className="h-4 w-4" />
            </button>
            <button className="rounded-lg p-2 text-muted-foreground hover:bg-card">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="scrollbar-thin flex-1 space-y-4 overflow-y-auto p-6">
          {sampleThread.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={cn("flex", m.from === "lead" ? "justify-start" : "justify-end")}
            >
              <div
                className={cn(
                  "relative max-w-[75%] rounded-2xl px-4 py-2.5 text-sm",
                  m.from === "lead"
                    ? "bg-card border border-border"
                    : "text-primary-foreground shadow-glow",
                )}
                style={m.from === "ai" ? { background: "var(--gradient-primary)" } : undefined}
              >
                {m.from === "ai" && (
                  <div className="mb-1 inline-flex items-center gap-1 text-[10px] opacity-80">
                    <Bot className="h-2.5 w-2.5" /> IA FaceFlow
                  </div>
                )}
                <div>{m.text}</div>
                <div className={cn("mt-1 text-[10px]", m.from === "ai" ? "opacity-75" : "text-muted-foreground")}>
                  {m.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border p-4">
          <div className="flex items-center gap-2 rounded-xl border border-border bg-card/60 px-3 py-2">
            <button className="rounded-md p-1 text-muted-foreground hover:text-foreground">
              <Paperclip className="h-4 w-4" />
            </button>
            <input
              placeholder="Digite uma mensagem ou / para usar templates…"
              className="flex-1 bg-transparent text-sm focus:outline-none"
            />
            <button className="rounded-md p-1 text-muted-foreground hover:text-foreground">
              <Smile className="h-4 w-4" />
            </button>
            <button className="rounded-md p-1 text-muted-foreground hover:text-foreground">
              <Mic className="h-4 w-4" />
            </button>
            <button
              className="grid h-8 w-8 place-items-center rounded-lg text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* IA Insights */}
      <div className="col-span-3 border-l border-border bg-card/40 p-5">
        <div className="mb-4 flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-semibold">IA Insights</div>
            <div className="text-[10px] text-muted-foreground">Atualizado em tempo real</div>
          </div>
        </div>

        <div className="space-y-3">
          <InsightCard label="Intenção de compra" value="Alta" color="emerald" />
          <InsightCard label="Score do lead" value={`${current.score}/100`} color="primary" bar={current.score} />
          <InsightCard label="Urgência" value="Média" color="amber" />
          <InsightCard label="Tratamento" value={current.tratamento} color="primary" />
          <InsightCard label="Ticket estimado" value="R$ 4.800" color="primary" />
        </div>

        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
          <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
            <Sparkles className="h-3 w-3" /> Sugestão IA
          </div>
          <p className="text-xs text-muted-foreground">
            Lead com perfil de fechamento rápido. Sugiro enviar portfólio antes/depois e oferecer parcelamento 12x.
          </p>
          <button className="mt-3 w-full rounded-lg bg-primary/15 py-1.5 text-xs font-medium text-primary hover:bg-primary/20">
            Aplicar sugestão
          </button>
        </div>
      </div>
    </div>
  );
}

function InsightCard({ label, value, color, bar }: { label: string; value: string; color: string; bar?: number }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
      {bar !== undefined && (
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full"
            style={{ width: `${bar}%`, background: "var(--gradient-primary)" }}
          />
        </div>
      )}
    </div>
  );
}
