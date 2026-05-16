import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Mail, Lock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div className="relative grid min-h-screen lg:grid-cols-2">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

      <div className="relative flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <Logo size="md" />
          <h1 className="mt-10 font-[var(--font-display)] text-3xl font-semibold tracking-tight">
            Bem-vindo de volta
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Entre para acessar sua clínica no FaceFlow AI
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="h-11 w-full rounded-xl border border-border bg-card/60 pl-10 pr-3 text-sm placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-11 w-full rounded-xl border border-border bg-card/60 pl-10 pr-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <Link
              to="/dashboard"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium text-primary-foreground shadow-glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              Entrar <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">ou</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <button
              type="button"
              className="h-11 w-full rounded-xl border border-border bg-card/60 text-sm hover:bg-card"
            >
              Continuar com Google
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Não tem conta?{" "}
              <a href="#" className="text-primary hover:underline">
                Cadastre sua clínica
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="relative hidden overflow-hidden lg:block">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-primary)", opacity: 0.18 }}
        />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
        <div className="relative flex h-full flex-col justify-end p-12">
          <div className="max-w-md">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              +1.200 clínicas conectadas
            </div>
            <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-tight">
              "Em 60 dias dobramos o faturamento. A IA qualifica enquanto eu opero."
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Dra. Camila Ferraz · Harmonização Facial · SP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
