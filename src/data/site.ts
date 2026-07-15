import { Scissors, Zap, Wind, Sparkles, Layers } from "lucide-react";

export const brand = {
  name: "Levelz Cut",
  tagline: "Rede premium de barbearias masculinas",
  foundedYear: 2005,
  unitsCount: 11,
  professionals: 50,
  cities: ["São Paulo", "Orlando"],
  phone: "(11) 99999-0000",
  email: "contato@levelzcut.com.br",
  instagram: "@levelzcut",
};

export const stats = [
  { value: "+10", label: "Unidades" },
  { value: "+50", label: "Profissionais" },
  { value: "2005", label: "Desde" },
  { value: "+500k", label: "Clientes atendidos" },
] as const;

export const services = [
  {
    id: "corte-tradicional",
    icon: Scissors,
    name: "Corte Tradicional",
    price: "R$ 55",
    duration: "40 min",
    description:
      "Corte clássico com tesoura e navalha, acabamento impecável e finalização.",
    includes: ["Lavagem", "Corte tesoura + navalha", "Finalização"],
  },
  {
    id: "corte-maquina",
    icon: Zap,
    name: "Corte Máquina",
    price: "R$ 40",
    duration: "25 min",
    description:
      "Prático, rápido e certeiro. Ideal para quem quer manter o visual em dia.",
    includes: ["Máquina + acabamento", "Contorno na navalha", "Finalização"],
  },
  {
    id: "barba",
    icon: Wind,
    name: "Barba",
    price: "R$ 45",
    duration: "30 min",
    description:
      "Modelagem completa com toalha quente, navalha afiada e produtos premium.",
    includes: ["Toalha quente", "Navalha", "Bálsamo pós-barba"],
  },
  {
    id: "barba-esfoliacao",
    icon: Sparkles,
    name: "Barba com Esfoliação",
    price: "R$ 65",
    duration: "45 min",
    description:
      "Ritual completo com esfoliação facial, hidratação e barba modelada.",
    includes: ["Esfoliação facial", "Toalha quente", "Navalha", "Hidratação"],
  },
  {
    id: "combo-tradicional",
    icon: Layers,
    name: "Combo Corte + Barba",
    price: "R$ 90",
    duration: "1h 10min",
    description:
      "O combo mais pedido da rede. Corte completo e barba modelada na navalha.",
    includes: ["Corte tradicional", "Barba completa", "Finalização premium"],
  },
  {
    id: "combo-premium",
    icon: Layers,
    name: "Combo Premium",
    price: "R$ 120",
    duration: "1h 30min",
    description:
      "Corte + barba com esfoliação e ritual completo. A experiência Levelz na íntegra.",
    includes: ["Corte tesoura + navalha", "Barba com esfoliação", "Hidratação", "Bebida cortesia"],
  },
] as const;

export type Unit = {
  id: string;
  name: string;
  neighborhood: string;
  city: string;
  state: string;
  country: "BR" | "US";
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  mapsUrl: string;
  image: string;
};

export const units: Unit[] = [
  {
    id: "pinheiros",
    name: "Levelz Cut Pinheiros",
    neighborhood: "Pinheiros",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    address: "R. dos Pinheiros, 1200 — Pinheiros, São Paulo/SP",
    phone: "(11) 3030-1000",
    whatsapp: "5511930301000",
    hours: "Seg–Sáb 09h–21h · Dom 10h–18h",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Levelz+Cutz+Pinheiros",
    image: "https://images.unsplash.com/photo-1521490878406-4f7d1f8f5c1f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "vila-madalena",
    name: "Levelz Cut Vila Madalena",
    neighborhood: "Vila Madalena",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    address: "R. Aspicuelta, 450 — Vila Madalena, São Paulo/SP",
    phone: "(11) 3030-1001",
    whatsapp: "5511930301001",
    hours: "Seg–Sáb 09h–21h · Dom 10h–18h",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Levelz+Cutz+Vila+Madalena",
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "itaim",
    name: "Levelz Cut Itaim Bibi",
    neighborhood: "Itaim Bibi",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    address: "R. Joaquim Floriano, 820 — Itaim Bibi, São Paulo/SP",
    phone: "(11) 3030-1002",
    whatsapp: "5511930301002",
    hours: "Seg–Sáb 09h–21h · Dom 10h–18h",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Levelz+Cutz+Itaim+Bibi",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "moema",
    name: "Levelz Cut Moema",
    neighborhood: "Moema",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    address: "Av. Ibirapuera, 2900 — Moema, São Paulo/SP",
    phone: "(11) 3030-1003",
    whatsapp: "5511930301003",
    hours: "Seg–Sáb 09h–21h · Dom 10h–18h",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Levelz+Cutz+Moema",
    image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "jardins",
    name: "Levelz Cut Jardins",
    neighborhood: "Jardins",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    address: "R. Oscar Freire, 700 — Jardins, São Paulo/SP",
    phone: "(11) 3030-1004",
    whatsapp: "5511930301004",
    hours: "Seg–Sáb 09h–21h · Dom 10h–18h",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Levelz+Cutz+Jardins",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "vila-mariana",
    name: "Levelz Cut Vila Mariana",
    neighborhood: "Vila Mariana",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    address: "R. Domingos de Morais, 1400 — Vila Mariana, São Paulo/SP",
    phone: "(11) 3030-1005",
    whatsapp: "5511930301005",
    hours: "Seg–Sáb 09h–21h · Dom 10h–18h",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Levelz+Cutz+Vila+Mariana",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tatuape",
    name: "Levelz Cut Tatuapé",
    neighborhood: "Tatuapé",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    address: "R. Tuiuti, 2000 — Tatuapé, São Paulo/SP",
    phone: "(11) 3030-1006",
    whatsapp: "5511930301006",
    hours: "Seg–Sáb 09h–21h · Dom 10h–18h",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Levelz+Cutz+Tatuape",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "santana",
    name: "Levelz Cut Santana",
    neighborhood: "Santana",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    address: "R. Voluntários da Pátria, 3200 — Santana, São Paulo/SP",
    phone: "(11) 3030-1007",
    whatsapp: "5511930301007",
    hours: "Seg–Sáb 09h–21h · Dom 10h–18h",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Levelz+Cutz+Santana",
    image: "https://images.unsplash.com/photo-1622286346003-c5c7e63b6a9e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "morumbi",
    name: "Levelz Cut Morumbi",
    neighborhood: "Morumbi",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    address: "Av. Giovanni Gronchi, 5900 — Morumbi, São Paulo/SP",
    phone: "(11) 3030-1008",
    whatsapp: "5511930301008",
    hours: "Seg–Sáb 09h–21h · Dom 10h–18h",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Levelz+Cutz+Morumbi",
    image: "https://images.unsplash.com/photo-1521322800607-8c38375eef04?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "brooklin",
    name: "Levelz Cut Brooklin",
    neighborhood: "Brooklin",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    address: "Av. Santo Amaro, 4800 — Brooklin, São Paulo/SP",
    phone: "(11) 3030-1009",
    whatsapp: "5511930301009",
    hours: "Seg–Sáb 09h–21h · Dom 10h–18h",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Levelz+Cutz+Brooklin",
    image: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "santo-amaro",
    name: "Levelz Cut Santo Amaro",
    neighborhood: "Santo Amaro",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    address: "Av. Adolfo Pinheiro, 1000 — Santo Amaro, São Paulo/SP",
    phone: "(11) 3030-1010",
    whatsapp: "5511930301010",
    hours: "Seg–Sáb 09h–21h · Dom 10h–18h",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Levelz+Cutz+Santo+Amaro",
    image: "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "orlando",
    name: "Levelz Cut Orlando",
    neighborhood: "International Drive",
    city: "Orlando",
    state: "FL",
    country: "US",
    address: "5100 International Dr — Orlando, FL, USA",
    phone: "+1 (407) 555-0100",
    whatsapp: "14075550100",
    hours: "Mon–Sat 10am–9pm · Sun 11am–6pm",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Levelz+Cutz+Orlando",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=900&q=80",
  },
];

export const gallery = [
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80", cat: "Cortes" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80", cat: "Cortes" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80", cat: "Cortes" },
  { src: "https://images.unsplash.com/photo-1622286346003-c5c7e63b6a9e?auto=format&fit=crop&w=900&q=80", cat: "Barbas" },
  { src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80", cat: "Barbas" },
  { src: "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?auto=format&fit=crop&w=900&q=80", cat: "Barbas" },
  { src: "https://images.unsplash.com/photo-1521490878406-4f7d1f8f5c1f?auto=format&fit=crop&w=900&q=80", cat: "Ambiente" },
  { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80", cat: "Ambiente" },
  { src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&q=80", cat: "Ambiente" },
  { src: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&w=900&q=80", cat: "Detalhes" },
  { src: "https://images.unsplash.com/photo-1521322800607-8c38375eef04?auto=format&fit=crop&w=900&q=80", cat: "Detalhes" },
  { src: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=900&q=80", cat: "Detalhes" },
] as const;

export const testimonials = [
  {
    name: "Carlos Mendonça",
    role: "Cliente Pinheiros",
    text: "Frequento a unidade de Pinheiros há anos. Independente do barbeiro, o padrão é sempre alto. Consistência é o que faz a Levelz Cut gigante.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rodrigo Alves",
    role: "Cliente Itaim Bibi",
    text: "Já cortei em várias unidades da rede — Itaim, Moema, Jardins — e o resultado é sempre o mesmo. Isso é raro e vale muito.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Thiago Lima",
    role: "Cliente Moema",
    text: "Ordem de chegada funciona super bem, ambiente é impecável e preço é justo. Melhor rede de barbearias de SP na minha opinião.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Felipe Andrade",
    role: "Cliente Vila Madalena",
    text: "Ambiente moderno, som na medida, atendimento rápido. A unidade da Vila Madalena virou meu segundo escritório.",
    photo: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marcelo Vieira",
    role: "Cliente Orlando",
    text: "Estava em Orlando a trabalho e achei uma Levelz Cut lá. Mesma vibe, mesma qualidade. Rede sério de verdade.",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Gustavo Ramos",
    role: "Cliente Brooklin",
    text: "Já passaram mais de 10 anos que eu me corto na rede. Vi a evolução de Fio Navalha para Levelz Cut e o padrão só subiu.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
] as const;
