import { createFileRoute } from "@tanstack/react-router";
import { Calendar as CalendarIcon, Wallet, Megaphone, Settings } from "lucide-react";

function makePlaceholder(title: string, desc: string, Icon: any) {
  return function Page() {
    return (
      <div className="space-y-5">
        <div>
          <h1 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
        <div className="grid place-items-center rounded-3xl border border-dashed border-border bg-card/40 p-20 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="mt-4 font-[var(--font-display)] text-xl font-semibold">Em breve</h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Este módulo está sendo refinado pelo time de design. Acompanhe o roadmap.
          </p>
        </div>
      </div>
    );
  };
}

export const AgendaPage = makePlaceholder("Agenda", "Calendário inteligente com IA", CalendarIcon);
export const FinanceiroPage = makePlaceholder("Financeiro", "Receitas, pagamentos e inadimplência", Wallet);
export const CampanhasPage = makePlaceholder("Campanhas", "WhatsApp e Instagram em massa", Megaphone);
export const ConfigPage = makePlaceholder("Configurações", "Personalize sua clínica", Settings);
