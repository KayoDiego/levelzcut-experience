import { createFileRoute, Link } from "@tanstack/react-router";
import { Scissors, Wind, Sparkles, Award, Clock, Shield, Coffee, Star, ArrowRight } from "lucide-react";
import { services, testimonials } from "@/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LevelzCut Pinheiros — Barbearia Premium em Pinheiros, SP" },
      {
        name: "description",
        content:
          "Barbearia premium para o homem moderno. Corte, barba e ritual completo em Pinheiros, São Paulo. Agende online.",
      },
    ],
  }),
  component: Home,
});

const differentials = [
  { icon: Award, title: "Barbeiros premiados", desc: "Time com décadas de estrada e prêmios no setor." },
  { icon: Clock, title: "Pontualidade absoluta", desc: "Seu horário é sagrado. Zero espera, atendimento exato." },
  { icon: Shield, title: "Ambiente masculino", desc: "Espaço pensado pro homem — som, whisky e conforto." },
  { icon: Coffee, title: "Experiência completa", desc: "Bebida cortesia, toalha quente e ritual do início ao fim." },
];

function Home() {
  useReveal();
  const highlight = [services[0], services[1], services[2], services[4]];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521490878406-4f7d1f8f5c1f?auto=format&fit=crop&w=2000&q=80"
            alt="Barbearia LevelzCut em Pinheiros"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-jet/70 via-jet/70 to-jet" />
          <div className="absolute inset-0 bg-gradient-to-r from-jet via-jet/50 to-transparent" />
        </div>
        <div className="container-app relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-xs mb-6">
              <span className="h-px w-10 bg-gold" /> Pinheiros · São Paulo
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.9]">
              Onde o <span className="text-gold-gradient">homem moderno</span>
              <br /> vira referência.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Barbearia premium by Fio Navalha. Corte impecável, barba modelada
              na navalha e um ritual pensado pra quem se cuida de verdade.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-jet hover:bg-gold-soft transition-all"
              >
                Agendar agora
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-gold/10 transition-all"
              >
                Ver serviços
              </Link>
            </div>
            <div className="mt-12 flex gap-8 text-sm text-muted-foreground">
              <div><span className="font-display text-3xl text-gold block">12+</span> anos de estrada</div>
              <div><span className="font-display text-3xl text-gold block">4.9</span> nota Google</div>
              <div><span className="font-display text-3xl text-gold block">10k+</span> clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-jet">
        <div className="container-app">
          <SectionHeading
            eyebrow="Serviços em destaque"
            title={<>O <span className="text-gold-gradient">ritual completo</span></>}
            description="Um menu enxuto, focado no que o homem moderno realmente precisa."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlight.map((s) => (
              <div key={s.id} className="reveal card-lift rounded-xl border border-border bg-graphite p-7">
                <div className="grid size-12 place-items-center rounded-lg bg-gold/10 text-gold transition-transform group-hover:scale-110">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                <div className="mt-5 flex items-baseline justify-between border-t border-border pt-4">
                  <span className="text-gold font-display text-2xl">{s.price}</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center reveal">
            <Link to="/servicos" className="text-gold uppercase tracking-widest text-sm hover:underline underline-offset-4">
              Ver todos os serviços →
            </Link>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-graphite">
        <div className="container-app">
          <SectionHeading
            eyebrow="Por que a LevelzCut"
            title={<>Não é barbearia. É <span className="text-gold-gradient">experiência.</span></>}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((d) => (
              <div key={d.title} className="reveal card-lift rounded-xl border border-border bg-jet p-7 text-center">
                <div className="mx-auto grid size-14 place-items-center rounded-full bg-gold/10 text-gold">
                  <d.icon className="size-7" />
                </div>
                <h3 className="mt-5 font-display text-xl">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-jet">
        <div className="container-app">
          <SectionHeading
            eyebrow="O que dizem"
            title={<>Clientes que <span className="text-gold-gradient">viraram fãs</span></>}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <figure key={t.name} className="reveal card-lift rounded-xl border border-border bg-graphite p-7">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-cream/90 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <img src={t.photo} alt={t.name} className="size-11 rounded-full object-cover border border-gold/40" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-graphite relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=80" alt="" className="size-full object-cover" />
        </div>
        <div className="container-app relative text-center reveal">
          <h2 className="font-display text-5xl md:text-7xl">Bora marcar seu horário?</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Agenda enxuta, ritual completo. Reserve seu momento agora.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-jet hover:bg-gold-soft transition-colors"
          >
            <Sparkles className="size-4" /> Agendar agora
          </Link>
        </div>
      </section>
    </>
  );
}
