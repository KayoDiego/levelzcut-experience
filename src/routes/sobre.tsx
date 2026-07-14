import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, Users, Zap, Instagram, Star, ArrowRight } from "lucide-react";
import { barbers } from "@/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — LevelzCut Pinheiros" },
      { name: "description", content: "Conheça a história, os valores e os barbeiros da LevelzCut Pinheiros by Fio Navalha." },
    ],
  }),
  component: Sobre,
});

const timeline = [
  { year: "2014", title: "Fio Navalha nasce", desc: "Uma barbearia de bairro com a obsessão pelo bem feito." },
  { year: "2018", title: "Prêmio SP Barber", desc: "Reconhecida entre as 10 melhores barbearias de São Paulo." },
  { year: "2021", title: "Novo endereço em Pinheiros", desc: "Casarão redesenhado, ambiente premium do zero." },
  { year: "2024", title: "LevelzCut by Fio Navalha", desc: "Nova marca, mesmo padrão obsessivo de excelência." },
];

const values = [
  { icon: Award, title: "Excelência", desc: "Cada corte tratado como obra única." },
  { icon: Heart, title: "Cuidado", desc: "O cliente é o centro de tudo, sem pressa." },
  { icon: Users, title: "Comunidade", desc: "Um clube de homens que se cuidam." },
  { icon: Zap, title: "Precisão", desc: "Técnica cirúrgica em cada detalhe." },
];

function Sobre() {
  useReveal();
  return (
    <>
      <section className="py-24 bg-jet">
        <div className="container-app grid gap-14 lg:grid-cols-2 items-center">
          <div className="reveal">
            <div className="text-gold uppercase tracking-[0.4em] text-xs mb-4">Nossa história</div>
            <h1 className="font-display text-5xl md:text-7xl leading-none">
              Feito por barbeiros. <span className="text-gold-gradient">Para homens exigentes.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              A LevelzCut Pinheiros nasce da união entre o rigor técnico da Fio
              Navalha e o desejo de criar um espaço onde o homem moderno se
              sente em casa. Aqui, corte é ritual — e cada minuto foi pensado
              pra você sair melhor do que entrou.
            </p>
          </div>
          <div className="reveal rounded-2xl overflow-hidden border border-border">
            <img
              src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=80"
              alt="Interior da barbearia LevelzCut"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-graphite">
        <div className="container-app">
          <SectionHeading eyebrow="Linha do tempo" title={<>10 anos de <span className="text-gold-gradient">navalha afiada</span></>} />
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border" />
            {timeline.map((t, i) => (
              <div key={t.year} className={`reveal relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-10 items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                <div className={`absolute left-0 md:left-1/2 -translate-x-1/2 grid size-8 place-items-center rounded-full bg-gold text-jet font-display text-sm z-10`}>
                  {i + 1}
                </div>
                <div className={i % 2 ? "md:col-start-2 md:text-left" : "md:text-right"}>
                  <div className="text-gold font-display text-3xl">{t.year}</div>
                  <h3 className="font-display text-2xl mt-1">{t.title}</h3>
                  <p className="text-muted-foreground mt-2">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-jet">
        <div className="container-app">
          <SectionHeading eyebrow="Nossos valores" title={<>O que nos <span className="text-gold-gradient">move</span></>} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="reveal card-lift rounded-xl border border-border bg-graphite p-7 text-center">
                <div className="mx-auto grid size-14 place-items-center rounded-full bg-gold/10 text-gold">
                  <v.icon className="size-7" />
                </div>
                <h3 className="mt-5 font-display text-xl">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barbers */}
      <section className="py-24 bg-graphite">
        <div className="container-app">
          <SectionHeading eyebrow="O time" title={<>Barbeiros com <span className="text-gold-gradient">assinatura</span></>} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {barbers.map((b) => (
              <article key={b.id} className="reveal card-lift group rounded-xl overflow-hidden border border-border bg-jet">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={b.image} alt={b.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl">{b.name}</h3>
                    <span className="flex items-center gap-1 text-gold text-sm"><Star className="size-4 fill-current" />{b.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">"{b.nickname}" · {b.years} anos</p>
                  <p className="text-sm text-cream/80 mt-2">{b.specialty}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <Instagram className="size-4 text-gold" /> {b.instagram}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center reveal">
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-jet hover:bg-gold-soft">
              Agendar minha visita <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
