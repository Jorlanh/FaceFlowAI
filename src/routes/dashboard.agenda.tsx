import { createFileRoute } from "@tanstack/react-router";
import { AgendaPage } from "@/components/dashboard/Placeholder";
export const Route = createFileRoute("/dashboard/agenda")({ component: AgendaPage });
