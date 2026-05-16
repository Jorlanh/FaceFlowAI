import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { plans } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="planos" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary">
            Planos & preços
          </Badge>
          <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
            Escolha o plano da sua <span className="gradient-text">clínica</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cancele quando quiser. Garantia de 14 dias nos planos anuais.
          </p>
        </div>

        {/* Toggle mensal / anual */}
        <div className="mt-10 flex items-center justify-center">
          <div
            role="tablist"
            className="glass inline-flex items-center gap-1 rounded-full p-1.5 shadow-elevated"
          >
            <button
              role="tab"
              aria-selected={!annual}
              onClick={() => setAnnual(false)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                !annual ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {!annual && (
                <motion.div
                  layoutId="plan-toggle"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">Mensal</span>
            </button>
            <button
              role="tab"
              aria-selected={annual}
              onClick={() => setAnnual(true)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                annual ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {annual && (
                <motion.div
                  layoutId="plan-toggle"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative inline-flex items-center gap-2">
                Anual
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                  -17% • 2 meses grátis
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, idx) => {
            const price = annual ? plan.precoAnualMensalizado : plan.precoMensal;
            const billed = annual ? plan.precoAnual : plan.precoMensal;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "relative rounded-3xl p-8",
                  plan.destaque
                    ? "gradient-border bg-card animate-pulse-glow"
                    : "glass",
                )}
              >
                {plan.destaque && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div
                      className="rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <Sparkles className="mr-1 inline h-3 w-3" />
                      Mais escolhido
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight">
                    {plan.nome}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.descricao}</p>
                </div>

                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <motion.span
                    key={`${plan.id}-${annual}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-[var(--font-display)] text-5xl font-semibold tracking-tight"
                  >
                    {price.toLocaleString("pt-BR")}
                  </motion.span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
                <p className="mb-6 text-xs text-muted-foreground">
                  {annual ? (
                    <>
                      Cobrado <span className="text-foreground">R$ {billed.toLocaleString("pt-BR")}/ano</span> · economia de R${" "}
                      {(plan.precoMensal * 12 - plan.precoAnual).toLocaleString("pt-BR")}
                    </>
                  ) : (
                    <>Cobrado mensalmente · cancele quando quiser</>
                  )}
                </p>

                <Button
                  size="lg"
                  variant={plan.destaque ? "default" : "outline"}
                  className={cn(
                    "w-full",
                    plan.destaque && "border-0 text-primary-foreground shadow-glow",
                  )}
                  style={plan.destaque ? { background: "var(--gradient-primary)" } : undefined}
                >
                  {plan.cta}
                </Button>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Ideal para
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {plan.publico.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    O que está incluso
                  </p>
                  <ul className="space-y-2.5">
                    {plan.recursos.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm">
                        <span
                          className={cn(
                            "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full",
                            plan.destaque
                              ? "bg-primary/20 text-primary"
                              : "bg-emerald-500/15 text-emerald-400",
                          )}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-foreground/90">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Precisa de algo customizado para uma rede de clínicas?{" "}
          <a href="#" className="text-primary hover:underline">
            Fale com o time enterprise →
          </a>
        </p>
      </div>
    </section>
  );
}
