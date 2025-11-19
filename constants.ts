import { FAQItem, NavItem, Plan, Trainer } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Planos", href: "#plans" },
  { label: "Treinadores", href: "#trainers" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
];

export const PLANS: Plan[] = [
  {
    name: "Plano Semestral",
    price: 99,
    period: "/mês",
    features: [
      { text: "Acesso total à academia", included: true },
      { text: "Treinos personalizados", included: true },
      { text: "Avaliação física grátis", included: true },
      { text: "Acesso a aulas coletivas", included: false },
      { text: "Convite para amigos (1x mês)", included: false },
    ],
    recommended: false,
  },
  {
    name: "Plano Anual",
    price: 89,
    period: "/mês",
    features: [
      { text: "Acesso total à academia", included: true },
      { text: "Treinos personalizados", included: true },
      { text: "Avaliação física grátis", included: true },
      { text: "Acesso a aulas coletivas", included: true },
      { text: "Convite para amigos (1x mês)", included: true },
    ],
    recommended: true,
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Master Trainer — Hipertrofia",
    description: "Especialista em hipertrofia e levantamento de peso olímpico. Foco total em desenvolvimento de força bruta.",
    // Imagem otimizada: 400x400, crop focado no rosto, qualidade 80, formato auto (webp/avif)
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop&auto=format&q=80",
  },
  {
    id: 2,
    name: "Mariana Souza",
    role: "Musculação Feminina",
    description: "Foco em definição muscular, emagrecimento e bem-estar feminino. Certificada em biomecânica.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop&auto=format&q=80",
  },
  {
    id: 3,
    name: "Fernando Lima",
    role: "Coach de Performance",
    description: "Preparação física para atletas de alto rendimento, treinos metabólicos intensos e condicionamento.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop&auto=format&q=80",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Como funciona a LifeFit Gym?",
    answer: "Somos uma academia focada em resultados reais. Oferecemos equipamentos de ponta, ambiente climatizado e acompanhamento profissional em todos os planos.",
  },
  {
    question: "Quais horários de funcionamento?",
    answer: "Funcionamos de Segunda a Sexta das 05:00 às 23:00, Sábados das 08:00 às 16:00 e Domingos das 09:00 às 13:00.",
  },
  {
    question: "Tem Personal Trainer incluso?",
    answer: "Nossos instrutores de salão montam seu treino e auxiliam na execução. Para atendimento exclusivo 1:1 o tempo todo, temos parcerias com Personais externos.",
  },
  {
    question: "Tem planos para empresas?",
    answer: "Sim! Temos convênios corporativos com descontos progressivos dependendo do número de colaboradores. Entre em contato para saber mais.",
  },
];