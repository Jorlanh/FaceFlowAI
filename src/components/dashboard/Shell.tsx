import { ReactNode, useState } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Users, MessageCircle, Bot, Workflow, Calendar, BarChart3,
  Wallet, Megaphone, Building2, Settings, Search, Bell, Plus, Shield,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/dashboard/crm", label: "CRM", icon: Users },
  { to: "/dashboard/conversas", label: "Conversas", icon: MessageCircle, badge: 7 },
  { to: "/dashboard/ia", label: "IA", icon: Bot },
  { to: "/dashboard/automacoes", label: "Automações", icon: Workflow },
  { to: "/dashboard/agenda", label: "Agenda", icon: Calendar },
  { to: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/dashboard/financeiro", label: "Financeiro", icon: Wallet },
  { to: "/dashboard/campanhas", label: "Campanhas", icon: Megaphone },
];
const secondary = [
  { to: "/dashboard/admin", label: "Master Admin", icon: Shield },
  { to: "/dashboard/configuracoes", label: "Configurações", icon: Settings },
];

export function DashboardShell({ children }: { children?: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <aside
        className={cn(
          "sticky top-0 z-30 hidden h-screen shrink-0 flex-col border-r border-sidebar-border bg-sidebar/80 backdrop-blur-xl transition-[width] md:flex",
          open ? "w-64" : "w-[72px]",
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          {open ? <Logo size="sm" /> : <Logo size="sm" />}
        </div>
        <nav className="scrollbar-thin flex-1 overflow-y-auto px-3 pb-3">
          <div className="space-y-0.5">
            {nav.map((item) => {
              const active = path === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
                  )}
                >
                  {active && (
                    <span
                      className="absolute inset-y-1 left-0 w-0.5 rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                  )}
                  <item.icon className={cn("h-4 w-4 shrink-0", active && "text-primary")} />
                  {open && <span className="flex-1">{item.label}</span>}
                  {open && item.badge && (
                    <span className="rounded-full bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
          <div className="my-4 h-px bg-sidebar-border" />
          <div className="space-y-0.5">
            {secondary.map((item) => {
              const active = path === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50",
                  )}
                >
                  <item.icon className={cn("h-4 w-4", active && "text-primary")} />
                  {open && <span>{item.label}</span>}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="border-t border-sidebar-border p-3">
          <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent/50 p-2.5">
            <div
              className="grid h-9 w-9 place-items-center rounded-lg text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              CO
            </div>
            {open && (
              <div className="flex-1 overflow-hidden">
                <div className="truncate text-sm font-medium">Clínica Odonto+</div>
                <div className="truncate text-[10px] text-muted-foreground">Plano Pro · 4 unidades</div>
              </div>
            )}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="mt-2 w-full rounded-lg px-3 py-1.5 text-xs text-muted-foreground hover:bg-sidebar-accent/50"
          >
            {open ? "← Recolher" : "→"}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-h-screen w-full flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/70 px-6 backdrop-blur-xl">
          <div className="relative flex-1 max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar leads, conversas, automações…"
              className="h-10 w-full rounded-xl border border-border bg-card/60 pl-10 pr-16 text-sm placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-border bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
              ⌘K
            </kbd>
          </div>
          <button
            className="inline-flex h-10 items-center gap-2 rounded-xl border-0 px-4 text-sm font-medium text-primary-foreground shadow-glow"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Plus className="h-4 w-4" /> Novo lead
          </button>
          <button className="relative grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 hover:bg-card">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
          </button>
          <div
            className="grid h-10 w-10 place-items-center rounded-xl text-xs font-semibold text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            DR
          </div>
        </header>
        <main className="flex-1 p-6">{children ?? <Outlet />}</main>
      </div>
    </div>
  );
}
