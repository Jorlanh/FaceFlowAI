import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Bot, MessageCircle, Activity, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      {/* background grid + glow */}
      <div className="pointer-events-none absolute inset-0 grid-bg mask-fade-b opacity-50" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Novo · IA Comercial v3 com 92% de qualificação
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            Transforme sua clínica em uma{" "}
            <span className="gradient-text">máquina de conversão</span> automatizada com IA.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            CRM, WhatsApp, automações e IA comercial em uma plataforma feita para clínicas odontológicas, harmonização facial e estética premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="h-12 border-0 px-6 text-base text-primary-foreground shadow-glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Link to="/dashboard">
                Começar agora <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
              <a href="#planos">Ver planos</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xs text-muted-foreground"
          >
            14 dias de garantia · sem cartão · onboarding em 48h
          </motion.div>
        </div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mx-auto mt-20 max-w-6xl"
        >
          <div
            className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-60"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative rounded-3xl border border-border bg-card/60 p-3 shadow-elevated backdrop-blur-xl">
            <div className="rounded-2xl border border-border bg-background/80 overflow-hidden">
              {/* Fake browser chrome */}
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/60" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/60" />
                  <span className="h-3 w-3 rounded-full bg-green-400/60" />
                </div>
                <div className="rounded-md bg-secondary px-3 py-1 text-xs text-muted-foreground">
                  app.faceflow.ai/dashboard
                </div>
                <div className="w-12" />
              </div>

              <div className="grid grid-cols-12 gap-3 p-4">
                {/* mini sidebar */}
                <div className="col-span-2 space-y-1.5 hidden md:block">
                  {["Dashboard", "CRM", "Conversas", "IA", "Automações", "Analytics"].map((it, i) => (
                    <div
                      key={it}
                      className={`rounded-lg px-3 py-2 text-xs ${i === 0 ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}
                    >
                      {it}
                    </div>
                  ))}
                </div>
                {/* main */}
                <div className="col-span-12 md:col-span-10 space-y-3">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { l: "Leads", v: "1.247", d: "+18%" },
                      { l: "Conversão", v: "32.7%", d: "+4.2%" },
                      { l: "Faturamento", v: "R$ 487k", d: "+22%" },
                      { l: "Resp. média", v: "47s", d: "-38%" },
                    ].map((k) => (
                      <div key={k.l} className="rounded-xl border border-border bg-card/60 p-3">
                        <div className="text-[10px] text-muted-foreground">{k.l}</div>
                        <div className="font-[var(--font-display)] text-xl font-semibold">{k.v}</div>
                        <div className="text-[10px] text-emerald-400">{k.d}</div>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="md:col-span-2 h-48 rounded-xl border border-border bg-card/40 p-4">
                      <div className="text-xs text-muted-foreground">Crescimento de leads</div>
                      <svg viewBox="0 0 400 130" className="mt-2 h-32 w-full">
                        <defs>
                          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0" stopColor="oklch(0.72 0.18 260)" stopOpacity="0.6" />
                            <stop offset="1" stopColor="oklch(0.72 0.18 260)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,100 C40,90 80,70 120,75 C160,80 200,40 240,35 C280,30 320,20 360,15 L400,10 L400,130 L0,130 Z"
                          fill="url(#g1)"
                        />
                        <path
                          d="M0,100 C40,90 80,70 120,75 C160,80 200,40 240,35 C280,30 320,20 360,15 L400,10"
                          fill="none"
                          stroke="oklch(0.72 0.18 260)"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div className="rounded-xl border border-border bg-card/40 p-4">
                      <div className="text-xs text-muted-foreground">IA comercial</div>
                      <div className="mt-3 space-y-2">
                        {[
                          { n: "Mariana C.", s: 92 },
                          { n: "Júlia A.", s: 88 },
                          { n: "Beatriz S.", s: 81 },
                        ].map((p) => (
                          <div key={p.n} className="flex items-center justify-between text-xs">
                            <span>{p.n}</span>
                            <span className="font-mono text-primary">{p.s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-6 top-32 hidden md:block"
          >
            <div className="glass-strong flex items-center gap-2 rounded-2xl px-4 py-3 shadow-elevated">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/15 text-primary">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">IA respondeu</div>
                <div className="text-sm font-semibold">+184 mensagens hoje</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -right-6 bottom-20 hidden md:block"
          >
            <div className="glass-strong flex items-center gap-2 rounded-2xl px-4 py-3 shadow-elevated">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-accent/20 text-accent">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Faltas evitadas</div>
                <div className="text-sm font-semibold">+71% este mês</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social proof strip */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
          <span>+1.200 clínicas confiam</span>
          <span className="opacity-30">•</span>
          <span>4.9/5 média de satisfação</span>
          <span className="opacity-30">•</span>
          <span>R$ 38M+ em receita gerada</span>
          <span className="opacity-30">•</span>
          <span>ISO 27001 · LGPD compliant</span>
        </div>
      </div>
    </section>
  );
}

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <div className="glass flex items-center justify-between rounded-full px-4 py-2.5 shadow-elevated">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#funcionalidades" className="hover:text-foreground">Funcionalidades</a>
            <a href="#planos" className="hover:text-foreground">Planos</a>
            <a href="#depoimentos" className="hover:text-foreground">Clientes</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link to="/login">Entrar</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="border-0 text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Link to="/dashboard">Acessar plataforma</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    icon: Bot,
    title: "IA Comercial Odontológica",
    desc: "Modelo fine-tunado em milhões de conversas de clínicas. Qualifica, contorna objeções e marca avaliação sozinha.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp + Instagram unificado",
    desc: "Central de conversas em tempo real com takeover humano, áudio, mídia e templates aprovados.",
  },
  {
    icon: Activity,
    title: "CRM visual estilo Attio",
    desc: "Pipeline kanban com drag & drop, score de leads, valor estimado e timeline completa.",
  },
  {
    icon: Zap,
    title: "Automações no-code",
    desc: "Construa fluxos visuais com triggers, condições e delays. Anti-falta, reativação e follow-up prontos.",
  },
  {
    icon: ShieldCheck,
    title: "Multiunidade & segurança",
    desc: "Gestão de redes, permissões granulares, LGPD, logs de auditoria e ISO 27001.",
  },
  {
    icon: Sparkles,
    title: "Analytics inteligente",
    desc: "Dashboards com IA que destacam o que importa: ROI por canal, gargalos no pipeline e oportunidades.",
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
            Plataforma completa
          </div>
          <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
            Tudo o que sua clínica precisa,{" "}
            <span className="gradient-text">em um único lugar</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Substitua CRM + WhatsApp BSP + automações + analytics por uma plataforma feita para o seu mercado.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-all hover:border-primary/40 hover:bg-card"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
