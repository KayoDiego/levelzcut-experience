import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, Shield, MapPin, Star, ArrowRight, Search, Clock, Zap, DollarSign } from "lucide-react";
import { services, testimonials, stats, units } from "@/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Levelz Cut — Rede de Barbearias Premium em São Paulo" },
      {
        name: "description",
        content:
          "Uma das maiores redes de barbearias premium de São Paulo. +10 unidades e uma unidade internacional em Orlando. Encontre a unidade mais próxima de você.",
      },
      { property: "og:title", content: "Levelz Cut — Rede Premium de Barbearias" },
      { property: "og:description", content: "+10 unidades em São Paulo e Orlando. Encontre a unidade mais próxima." },
    ],
  }),
  component: Home,
});

const differentials = [
  { icon: Users, title: "+50 profissionais", desc: "Time treinado dentro do padrão Levelz em toda a rede." },
  { icon: Clock, title: "Ordem de chegada", desc: "Sem agendamento obrigatório. Chegou, cortou." },
  { icon: Shield, title: "Ambientes modernos", desc: "Estrutura padronizada, confortável e pensada pro homem." },
  { icon: DollarSign, title: "Preço acessível", desc: "Experiência premium com preço justo em todas as unidades." },
  { icon: Zap, title: "Especialistas masculinos", desc: "Foco absoluto em cabelo e barba do homem moderno." },
  { icon: Award, title: "+20 anos de estrada", desc: "Fundada em 2005. Mais de duas décadas cuidando de você." },
];

function Home() {
  useReveal();
  const highlight = services.slice(0, 4);
  const previewUnits = units.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521490878406-4f7d1f8f5c1f?auto=format&fit=crop&w=2000&q=80"
            alt="Rede de barbearias Levelz Cut"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-jet/70 via-jet/70 to-jet" />
          <div className="absolute inset-0 bg-gradient-to-r from-jet via-jet/50 to-transparent" />
        </div>
        <div className="container-app relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-xs mb-6">
              <span className="h-px w-10 bg-gold" /> +{units.length} unidades · SP + Orlando
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.9]">
              A maior <span className="text-gold-gradient">rede premium</span>
              <br /> de barbearias de SP.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Mais de 10 unidades espalhadas por São Paulo e uma unidade internacional em Orlando.
              Encontre a Levelz Cut mais próxima de você.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/unidades"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-jet hover:bg-gold-soft transition-all"
              >
                <MapPin className="size-4" /> Encontrar Unidade
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-gold/10 transition-all"
              >
                Ver serviços
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-muted-foreground max-w-lg">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="font-display text-3xl text-gold block">{s.value}</span>
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-14 bg-graphite border-y border-border/60">
        <div className="container-app grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="reveal">
              <div className="font-display text-5xl md:text-6xl text-gold-gradient">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Units preview */}
      <section className="py-24 bg-jet">
        <div className="container-app">
          <SectionHeading
            eyebrow="Nossas unidades"
            title={<>Uma unidade <span className="text-gold-gradient">perto de você</span></>}
            description="Espalhados pelos melhores bairros de São Paulo. Escolha a mais conveniente."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previewUnits.map((u) => (
              <Link
                key={u.id}
                to="/unidades"
                className="reveal card-lift group rounded-xl overflow-hidden border border-border bg-graphite"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={u.image} alt={u.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="text-xs uppercase tracking-widest text-gold">{u.city}</div>
                    <div className="font-display text-2xl leading-tight">{u.neighborhood}</div>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2 truncate"><MapPin className="size-4 text-gold" /> {u.address.split("—")[0].trim()}</span>
                  <ArrowRight className="size-4 text-gold shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center reveal">
            <Link to="/unidades" className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-gold/10">
              <Search className="size-4" /> Ver todas as {units.length} unidades
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-graphite">
        <div className="container-app">
          <SectionHeading
            eyebrow="Serviços padronizados na rede"
            title={<>O mesmo <span className="text-gold-gradient">padrão Levelz</span> em toda unidade</>}
            description="Serviços e preços iguais em todas as barbearias da rede."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlight.map((s) => (
              <div key={s.id} className="reveal card-lift rounded-xl border border-border bg-jet p-7">
                <div className="grid size-12 place-items-center rounded-lg bg-gold/10 text-gold">
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
      <section className="py-24 bg-jet">
        <div className="container-app">
          <SectionHeading
            eyebrow="Por que a Levelz Cut"
            title={<>Escala com <span className="text-gold-gradient">padrão obsessivo</span></>}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map((d) => (
              <div key={d.title} className="reveal card-lift rounded-xl border border-border bg-graphite p-7">
                <div className="grid size-14 place-items-center rounded-full bg-gold/10 text-gold">
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
      <section className="py-24 bg-graphite">
        <div className="container-app">
          <SectionHeading
            eyebrow="O que dizem"
            title={<>Clientes de <span className="text-gold-gradient">várias unidades</span></>}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <figure key={t.name} className="reveal card-lift rounded-xl border border-border bg-jet p-7">
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
      <section className="py-24 bg-jet relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=80" alt="" className="size-full object-cover" />
        </div>
        <div className="container-app relative text-center reveal">
          <h2 className="font-display text-5xl md:text-7xl">Achou sua unidade?</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Escolha a unidade mais conveniente e venha conhecer a experiência Levelz Cut.
          </p>
          <Link
            to="/unidades"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-jet hover:bg-gold-soft transition-colors"
          >
            <MapPin className="size-4" /> Encontrar Unidade
          </Link>
        </div>
      </section>
    </>
  );
}
