import { createFileRoute } from "@tanstack/react-router";
import { ConfigPage } from "@/components/dashboard/Placeholder";
export const Route = createFileRoute("/dashboard/configuracoes")({ component: ConfigPage });
