import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Plus, MoreHorizontal, Phone, MessageCircle } from "lucide-react";
import { leads, stageConfig, type LeadStage } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard/crm")({
  component: CRM,
});

function CRM() {
  const [hover, setHover] = useState<string | null>(null);
  const stages = Object.keys(stageConfig) as LeadStage[];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight">CRM</h1>
          <p className="text-sm text-muted-foreground">
            {leads.length} leads · valor estimado em pipeline:{" "}
            <span className="text-foreground">R$ {leads.reduce((a, l) => a + l.valor, 0).toLocaleString("pt-BR")}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card/60 px-3 text-sm hover:bg-card">
            <Filter className="h-3.5 w-3.5" /> Filtros
          </button>
          <button
            className="inline-flex h-9 items-center gap-2 rounded-lg border-0 px-3 text-sm font-medium text-primary-foreground shadow-glow"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Plus className="h-4 w-4" /> Novo lead
          </button>
        </div>
      </div>

      <div className="scrollbar-thin -mx-2 flex gap-3 overflow-x-auto px-2 pb-4">
        {stages.map((stage) => {
          const cfg = stageConfig[stage];
          const items = leads.filter((l) => l.stage === stage);
          const total = items.reduce((a, l) => a + l.valor, 0);
          return (
            <div key={stage} className="w-[300px] shrink-0">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: cfg.color }} />
                  <span className="text-sm font-semibold">{cfg.label}</span>
                  <span className="rounded-md bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                    {items.length}
                  </span>
                </div>
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="mb-3 text-xs text-muted-foreground">
                R$ {total.toLocaleString("pt-BR")}
              </div>
              <div className="space-y-2">
                {items.map((lead, i) => (
                  <motion.div
                    key={lead.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    onMouseEnter={() => setHover(lead.id)}
                    onMouseLeave={() => setHover(null)}
                    className={cn(
                      "group cursor-grab rounded-xl border border-border bg-card/70 p-3 transition-all hover:border-primary/40 hover:shadow-glow",
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="grid h-8 w-8 place-items-center rounded-full text-xs font-semibold text-primary-foreground"
                          style={{ background: "var(--gradient-primary)" }}
                        >
                          {lead.avatar}
                        </div>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium">{lead.nome}</div>
                          <div className="truncate text-[10px] text-muted-foreground">{lead.tratamento}</div>
                        </div>
                      </div>
                      <span
                        className={cn(
                          "rounded-md px-1.5 py-0.5 text-[10px] font-medium",
                          lead.prioridade === "alta"
                            ? "bg-rose-500/15 text-rose-400"
                            : lead.prioridade === "media"
                              ? "bg-amber-500/15 text-amber-400"
                              : "bg-secondary text-muted-foreground",
                        )}
                      >
                        {lead.prioridade}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="font-mono text-primary">
                        R$ {lead.valor.toLocaleString("pt-BR")}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <div className="h-1 w-12 overflow-hidden rounded-full bg-secondary">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${lead.score}%`,
                                background: "var(--gradient-primary)",
                              }}
                            />
                          </div>
                          <span className="font-mono text-[10px]">{lead.score}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex gap-1">
                        {lead.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="text-[10px] text-muted-foreground">{lead.ultimaInteracao}</span>
                    </div>
                    {hover === lead.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-3 flex gap-1.5 border-t border-border pt-2"
                      >
                        <button className="flex-1 inline-flex items-center justify-center gap-1 rounded-md bg-primary/15 py-1 text-[11px] text-primary">
                          <MessageCircle className="h-3 w-3" /> Conversar
                        </button>
                        <button className="rounded-md border border-border px-2 py-1 text-[11px] text-muted-foreground hover:text-foreground">
                          <Phone className="h-3 w-3" />
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                <button className="flex w-full items-center justify-center gap-1 rounded-xl border border-dashed border-border py-2 text-xs text-muted-foreground hover:bg-card/40 hover:text-foreground">
                  <Plus className="h-3 w-3" /> Adicionar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
