import { createFileRoute } from "@tanstack/react-router";
import { FinanceiroPage } from "@/components/dashboard/Placeholder";
export const Route = createFileRoute("/dashboard/financeiro")({ component: FinanceiroPage });
