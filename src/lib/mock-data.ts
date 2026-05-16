// Realistic mock data for FaceFlow AI

export const dashboardKpis = [
  { label: "Leads no mês", value: 1247, delta: 18.4, prefix: "" },
  { label: "Taxa de conversão", value: 32.7, delta: 4.2, suffix: "%" },
  { label: "Faturamento estimado", value: 487300, delta: 22.1, prefix: "R$ " },
  { label: "Faltas evitadas", value: 184, delta: 12.6, prefix: "" },
  { label: "Tempo médio resposta", value: 47, delta: -38.2, suffix: "s" },
  { label: "ROI das campanhas", value: 6.8, delta: 1.4, suffix: "x" },
];

export const leadsChart = [
  { mes: "Jan", leads: 420, convertidos: 110 },
  { mes: "Fev", leads: 510, convertidos: 148 },
  { mes: "Mar", leads: 612, convertidos: 197 },
  { mes: "Abr", leads: 720, convertidos: 240 },
  { mes: "Mai", leads: 880, convertidos: 305 },
  { mes: "Jun", leads: 1024, convertidos: 372 },
  { mes: "Jul", leads: 1247, convertidos: 408 },
];

export const revenueChart = [
  { mes: "Jan", receita: 184000 },
  { mes: "Fev", receita: 211000 },
  { mes: "Mar", receita: 263000 },
  { mes: "Abr", receita: 312000 },
  { mes: "Mai", receita: 388000 },
  { mes: "Jun", receita: 421000 },
  { mes: "Jul", receita: 487000 },
];

export const channelData = [
  { canal: "WhatsApp", valor: 62 },
  { canal: "Instagram", valor: 21 },
  { canal: "Indicação", valor: 11 },
  { canal: "Google", valor: 6 },
];

export type LeadStage =
  | "novo"
  | "atendimento"
  | "avaliacao"
  | "compareceu"
  | "orcamento"
  | "fechado"
  | "tratamento"
  | "perdido";

export interface Lead {
  id: string;
  nome: string;
  telefone: string;
  tratamento: string;
  valor: number;
  score: number;
  prioridade: "alta" | "media" | "baixa";
  stage: LeadStage;
  ultimaInteracao: string;
  tags: string[];
  avatar: string;
}

const nomes = [
  "Mariana Costa", "Júlia Almeida", "Beatriz Santos", "Carolina Lima", "Fernanda Souza",
  "Patrícia Rocha", "Camila Ribeiro", "Larissa Mendes", "Renata Carvalho", "Isabela Dias",
  "Amanda Pereira", "Vanessa Oliveira", "Tatiane Martins", "Sabrina Cardoso", "Daniela Castro",
  "Bruno Henrique", "Rafael Moura", "Felipe Andrade", "Lucas Barbosa", "Gabriel Pinto",
];
const tratamentos = ["Harmonização Facial", "Botox", "Lente de Contato", "Implante", "Clareamento", "Bichectomia", "Preenchimento Labial", "Ortodontia Invisível"];
const stages: LeadStage[] = ["novo", "atendimento", "avaliacao", "compareceu", "orcamento", "fechado", "tratamento", "perdido"];

export const leads: Lead[] = nomes.map((nome, i) => ({
  id: `lead-${i + 1}`,
  nome,
  telefone: `+55 11 9${(Math.random() * 9000 + 1000).toFixed(0)}-${(Math.random() * 9000 + 1000).toFixed(0)}`,
  tratamento: tratamentos[i % tratamentos.length],
  valor: Math.floor(Math.random() * 18000) + 1500,
  score: Math.floor(Math.random() * 40) + 60,
  prioridade: (["alta", "media", "baixa"] as const)[i % 3],
  stage: stages[i % stages.length],
  ultimaInteracao: ["agora", "2 min", "12 min", "1h", "3h", "ontem"][i % 6],
  tags: [["VIP", "Quente"], ["Retorno"], ["Indicação"], ["Instagram"]][i % 4],
  avatar: nome.split(" ").map((n) => n[0]).join("").slice(0, 2),
}));

export const stageConfig: Record<LeadStage, { label: string; color: string }> = {
  novo: { label: "Novo Lead", color: "oklch(0.78 0.18 230)" },
  atendimento: { label: "Em Atendimento", color: "oklch(0.72 0.18 260)" },
  avaliacao: { label: "Avaliação Marcada", color: "oklch(0.78 0.18 200)" },
  compareceu: { label: "Compareceu", color: "oklch(0.78 0.16 160)" },
  orcamento: { label: "Orçamento Enviado", color: "oklch(0.8 0.18 90)" },
  fechado: { label: "Fechado", color: "oklch(0.7 0.2 145)" },
  tratamento: { label: "Em Tratamento", color: "oklch(0.65 0.24 295)" },
  perdido: { label: "Perdido", color: "oklch(0.55 0.18 22)" },
};

export interface Conversation {
  id: string;
  nome: string;
  avatar: string;
  ultimaMensagem: string;
  hora: string;
  naoLidas: number;
  online: boolean;
  iaAtiva: boolean;
  score: number;
  intencao: "alta" | "media" | "baixa";
  tratamento: string;
}

export const conversations: Conversation[] = leads.slice(0, 12).map((l, i) => ({
  id: `conv-${i}`,
  nome: l.nome,
  avatar: l.avatar,
  ultimaMensagem: [
    "Oi! Vi o anúncio do botox, queria saber o valor 💉",
    "Posso parcelar a harmonização?",
    "Que horas vocês atendem amanhã?",
    "Tenho uma dúvida sobre as lentes…",
    "Adorei! Quando posso marcar?",
    "Vocês têm avaliação gratuita?",
  ][i % 6],
  hora: ["agora", "2m", "8m", "23m", "1h", "2h"][i % 6],
  naoLidas: i % 4 === 0 ? Math.floor(Math.random() * 3) + 1 : 0,
  online: i % 3 !== 0,
  iaAtiva: i % 2 === 0,
  score: 60 + Math.floor(Math.random() * 40),
  intencao: (["alta", "media", "baixa"] as const)[i % 3],
  tratamento: l.tratamento,
}));

export interface Plan {
  id: string;
  nome: string;
  destaque?: boolean;
  precoMensal: number;
  precoAnual: number;
  precoAnualMensalizado: number;
  descricao: string;
  publico: string[];
  recursos: string[];
  cta: string;
}

export const plans: Plan[] = [
  {
    id: "starter",
    nome: "Starter",
    precoMensal: 197,
    precoAnual: 1970,
    precoAnualMensalizado: 164,
    descricao: "Para começar a automatizar sua clínica com IA.",
    publico: ["Clínica pequena", "1 atendente", "1 unidade", "Poucos leads"],
    recursos: [
      "CRM básico visual",
      "IA básica de atendimento",
      "Follow-up automático",
      "Anti-falta inteligente",
      "WhatsApp oficial integrado",
      "Lembretes automáticos",
      "Dashboard básico",
      "Até 500 leads/mês",
    ],
    cta: "Começar agora",
  },
  {
    id: "pro",
    nome: "Pro",
    destaque: true,
    precoMensal: 497,
    precoAnual: 4970,
    precoAnualMensalizado: 414,
    descricao: "O plano completo para clínicas que querem escalar.",
    publico: ["Clínicas em crescimento", "Múltiplos atendentes", "Volume médio-alto"],
    recursos: [
      "IA avançada comercial",
      "Automações ilimitadas",
      "Recuperação automática de leads",
      "Campanhas WhatsApp + Instagram",
      "Dashboard completo + insights",
      "Múltiplos atendentes",
      "Integração Instagram Direct",
      "Integrações completas",
      "Métricas avançadas",
      "IA comercial qualificadora",
    ],
    cta: "Escolher Pro",
  },
  {
    id: "premium",
    nome: "Premium",
    precoMensal: 1497,
    precoAnual: 14970,
    precoAnualMensalizado: 1247,
    descricao: "Para clínicas premium e operações multiunidade.",
    publico: ["Clínicas premium", "Harmonização facial", "Multiunidade", "Alto volume"],
    recursos: [
      "Tudo do Pro, e mais:",
      "Gestão multiunidade",
      "IA Premium (modelos avançados)",
      "Automações avançadas com lógica",
      "Relatórios inteligentes com IA",
      "Onboarding white-glove",
      "Suporte prioritário 24/7",
      "Campanhas premium segmentadas",
      "Métricas executivas avançadas",
      "Gerente de sucesso dedicado",
    ],
    cta: "Falar com vendas",
  },
];

export const testimonials = [
  {
    nome: "Dra. Camila Ferraz",
    cargo: "Harmonização Facial • SP",
    texto: "Em 60 dias dobramos o faturamento. A IA qualifica os leads enquanto eu opero. Surreal.",
    avatar: "CF",
  },
  {
    nome: "Dr. Rafael Monteiro",
    cargo: "Odonto Premium • RJ",
    texto: "Reduzi as faltas em 71%. O ROI do FaceFlow paga ele mesmo na primeira semana do mês.",
    avatar: "RM",
  },
  {
    nome: "Dra. Beatriz Lima",
    cargo: "Estética Avançada • BH",
    texto: "Trocamos 3 ferramentas pelo FaceFlow. A IA conversa melhor que muito atendente humano.",
    avatar: "BL",
  },
];

export const faqs = [
  {
    q: "Quanto tempo leva para implementar?",
    a: "Em média 48h. Nosso time faz o onboarding completo, conecta seu WhatsApp oficial e treina a IA com o seu tom de voz e seus tratamentos.",
  },
  {
    q: "A IA realmente conversa como humano?",
    a: "Sim. Usamos modelos de última geração com fine-tuning específico para o mercado odontológico e estético, com tom natural, empático e altamente comercial.",
  },
  {
    q: "Preciso trocar meu WhatsApp?",
    a: "Não. Conectamos sua linha atual via API oficial do WhatsApp Business, mantendo seu número e histórico.",
  },
  {
    q: "Como funciona o cancelamento?",
    a: "Cancele quando quiser, sem multa. Nos planos anuais oferecemos garantia de 14 dias com devolução integral.",
  },
  {
    q: "Funciona para clínicas de harmonização facial?",
    a: "Foi feito para isso. Temos fluxos prontos para botox, preenchimento, bichectomia, lentes de contato, implantes e mais.",
  },
];
