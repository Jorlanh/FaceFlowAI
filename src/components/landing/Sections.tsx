import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { testimonials, faqs } from "@/lib/mock-data";
import { Logo } from "@/components/brand/Logo";

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
            Clínicas que <span className="gradient-text">multiplicaram</span> com FaceFlow
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card/40 p-7 backdrop-blur"
            >
              <p className="text-base leading-relaxed text-foreground/90">"{t.texto}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div
                  className="grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.nome}</div>
                  <div className="text-xs text-muted-foreground">{t.cargo}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-5xl">
            Perguntas frequentes
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card/40">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                {open === i ? (
                  <Minus className="h-4 w-4 shrink-0 text-muted-foreground" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-12 text-center md:p-20">
          <div
            className="absolute inset-0 opacity-40"
            style={{ background: "var(--gradient-radial)" }}
          />
          <div className="relative">
            <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-6xl">
              Pronto para escalar sua <span className="gradient-text">clínica</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Onboarding em 48h. Sem cartão. ROI no primeiro mês.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/dashboard"
                className="inline-flex h-12 items-center rounded-full px-6 text-sm font-medium text-primary-foreground shadow-glow"
                style={{ background: "var(--gradient-primary)" }}
              >
                Acessar plataforma →
              </a>
              <a
                href="#planos"
                className="inline-flex h-12 items-center rounded-full border border-border bg-background/60 px-6 text-sm font-medium backdrop-blur hover:bg-card"
              >
                Ver planos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <Logo />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span>© 2026 FaceFlow AI · Todos os direitos reservados</span>
          <a href="#" className="hover:text-foreground">Termos</a>
          <a href="#" className="hover:text-foreground">Privacidade</a>
          <a href="#" className="hover:text-foreground">LGPD</a>
        </div>
      </div>
    </footer>
  );
}
