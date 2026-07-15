import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, ArrowRight, CalendarCheck, MessageSquare, Scissors, Sparkles } from "lucide-react";
import { services } from "@/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Levelz Cutz" },
      { name: "description", content: "Serviços padronizados em toda a rede: Corte Tradicional, Corte Máquina, Barba, Barba com Esfoliação e Combos. Preço transparente." },
      { property: "og:title", content: "Serviços Levelz Cutz — padronizados em toda a rede" },
    ],
  }),
  component: Servicos,
});

const steps = [
  { icon: MessageSquare, title: "Escolha o serviço", desc: "Selecione o ritual que combina com seu momento." },
  { icon: CalendarCheck, title: "Reserve online", desc: "Escolha barbeiro, data e horário — em 30 segundos." },
  { icon: Scissors, title: "Viva a experiência", desc: "Chegue, relaxe. A gente cuida de todo o resto." },
  { icon: Sparkles, title: "Saia impecável", desc: "Volte quando quiser — sua ficha já fica salva com a gente." },
];

function Servicos() {
  useReveal();
  return (
    <>
      <section className="py-24 bg-jet">
        <div className="container-app">
          <SectionHeading
            eyebrow="Serviços"
            title={<>Menu <span className="text-gold-gradient">enxuto e certeiro</span></>}
            description="Preço transparente, tempo garantido e o padrão de sempre."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.id} className="reveal card-lift rounded-xl border border-border bg-graphite p-7 flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="grid size-12 place-items-center rounded-lg bg-gold/10 text-gold">
                    <s.icon className="size-6" />
                  </div>
                  <div className="text-right">
                    <div className="font-display text-3xl text-gold">{s.price}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-1 justify-end mt-1">
                      <Clock className="size-3" /> {s.duration}
                    </div>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-2xl">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {s.includes.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-gold shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contato"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-cream hover:bg-gold hover:text-jet transition-colors"
                >
                  Agendar <ArrowRight className="size-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-graphite">
        <div className="container-app">
          <SectionHeading
            eyebrow="Como funciona"
            title={<>Seu ritual em <span className="text-gold-gradient">4 passos</span></>}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="reveal card-lift rounded-xl border border-border bg-jet p-7 relative">
                <div className="absolute -top-4 -right-4 grid size-12 place-items-center rounded-full bg-gold text-jet font-display text-2xl">
                  {i + 1}
                </div>
                <div className="grid size-12 place-items-center rounded-lg bg-gold/10 text-gold">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
