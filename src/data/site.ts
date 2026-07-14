import { Scissors, Bean as Beard, Sparkles, Eye, Droplet, Palette } from "lucide-react";

export const services = [
  {
    id: "corte",
    icon: Scissors,
    name: "Corte Masculino",
    price: "R$ 90",
    duration: "45 min",
    description:
      "Corte personalizado com acabamento na navalha, finalização com produtos premium.",
    includes: ["Consulta de estilo", "Lavagem", "Corte + acabamento", "Finalização"],
  },
  {
    id: "barba",
    icon: Beard,
    name: "Barba Modelada",
    price: "R$ 70",
    duration: "40 min",
    description:
      "Modelagem completa com toalha quente, óleos essenciais e navalha afiada.",
    includes: ["Toalha quente", "Óleo pré-barba", "Navalha", "Bálsamo pós-barba"],
  },
  {
    id: "combo",
    icon: Sparkles,
    name: "Combo Executivo",
    price: "R$ 140",
    duration: "1h 15min",
    description:
      "Corte + barba com ritual completo. O pacote favorito dos executivos.",
    includes: ["Corte completo", "Barba modelada", "Ritual toalha quente", "Bebida cortesia"],
  },
  {
    id: "sobrancelha",
    icon: Eye,
    name: "Design de Sobrancelha",
    price: "R$ 40",
    duration: "20 min",
    description:
      "Design masculino discreto, valorizando o olhar sem tirar a naturalidade.",
    includes: ["Análise facial", "Design a pinça", "Aparo", "Finalização"],
  },
  {
    id: "hidratacao",
    icon: Droplet,
    name: "Hidratação Capilar",
    price: "R$ 80",
    duration: "30 min",
    description:
      "Tratamento profundo para cabelos ressecados. Devolve brilho e maciez.",
    includes: ["Diagnóstico", "Máscara premium", "Massagem capilar", "Selagem"],
  },
  {
    id: "pigmentacao",
    icon: Palette,
    name: "Pigmentação de Barba",
    price: "R$ 120",
    duration: "50 min",
    description:
      "Preencha falhas e realce a barba com pigmentação natural de longa duração.",
    includes: ["Teste de tom", "Aplicação", "Uniformização", "Fixação"],
  },
] as const;

export const barbers = [
  {
    id: "rafa",
    name: "Rafael Moura",
    nickname: "Rafa",
    specialty: "Fades & degradês milimétricos",
    years: 12,
    rating: 4.9,
    instagram: "@rafamoura.cuts",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bruno",
    name: "Bruno Salles",
    nickname: "Salles",
    specialty: "Barba clássica & navalha",
    years: 9,
    rating: 5.0,
    instagram: "@salles.barber",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "diego",
    name: "Diego Prado",
    nickname: "Prado",
    specialty: "Cortes modernos & texturizados",
    years: 7,
    rating: 4.8,
    instagram: "@prado.hair",
    image:
      "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "leo",
    name: "Leonardo Vieira",
    nickname: "Leo",
    specialty: "Pigmentação & sobrancelha",
    years: 6,
    rating: 4.9,
    instagram: "@leo.vieira",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
] as const;

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
    role: "CEO, Vertex Capital",
    text: "Melhor barbearia que já frequentei. Ambiente impecável, atendimento cirúrgico e um whisky pra acompanhar. Vale cada centavo.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rodrigo Alves",
    role: "Diretor Criativo",
    text: "Rafa entende exatamente o que eu quero. Saio de lá parecendo outro homem, sempre no ponto. É meu ritual quinzenal.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Thiago Lima",
    role: "Advogado",
    text: "Reserva online funciona perfeito, nunca atrasam. Barba modelada pelo Salles é outro nível. Recomendo demais.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Felipe Andrade",
    role: "Arquiteto",
    text: "O ambiente é lindo, cheira bem, som impecável. Passa a sensação de clube. E o corte então… simplesmente perfeito.",
    photo: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marcelo Vieira",
    role: "Empresário",
    text: "Fiz o combo executivo antes de uma reunião e o resultado foi absurdo. Toalha quente, navalha, atenção total. Voltarei sempre.",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Gustavo Ramos",
    role: "Publicitário",
    text: "Prado faz o melhor degradê de SP, sem exagero. Ambiente premium, preço justo pelo que entregam.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
] as const;
