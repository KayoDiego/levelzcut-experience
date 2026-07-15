import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, Users, Zap, ArrowRight, MapPin } from "lucide-react";
import { stats, units } from "@/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "A Rede — Levelz Cutz" },
      { name: "description", content: "A história da Levelz Cutz: fundada em 2005 como Fio Navalha, hoje uma rede premium com +10 unidades em SP e uma internacional em Orlando." },
      { property: "og:title", content: "A história da rede Levelz Cutz" },
      { property: "og:description", content: "De 2005 a hoje: da Fio Navalha para a maior rede premium de barbearias de SP." },
    ],
  }),
  component: Sobre,
});

const timeline = [
  { year: "2005", title: "Nasce a Fio Navalha", desc: "Uma barbearia de bairro em São Paulo, obcecada pelo bem feito." },
  { year: "2010", title: "Primeira expansão", desc: "Segunda e terceira unidades abertas em bairros nobres da capital." },
  { year: "2015", title: "Marca reconhecida", desc: "Prêmios do setor e presença consolidada em São Paulo." },
  { year: "2020", title: "Nova identidade: Levelz Cutz", desc: "Rebranding para refletir a nova geração da rede." },
  { year: "2023", title: "+10 unidades em SP", desc: "Rede alcança dois dígitos de unidades na capital paulista." },
  { year: "2025", title: "Unidade internacional", desc: "Levelz Cutz Orlando: a marca cruza fronteiras." },
];

const values = [
  { icon: Award, title: "Padrão", desc: "Mesma qualidade em toda unidade da rede." },
  { icon: Heart, title: "Cuidado", desc: "Cliente no centro — em cada bairro, cada cidade." },
  { icon: Users, title: "Escala", desc: "+50 profissionais treinados no jeito Levelz." },
  { icon: Zap, title: "Precisão", desc: "Técnica cirúrgica replicada em cada corte." },
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
              De uma barbearia de bairro para a <span className="text-gold-gradient">maior rede premium</span> de SP.
            </h1>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              A Levelz Cutz nasceu em 2005 como <strong className="text-cream">Fio Navalha</strong>,
              uma barbearia de bairro obcecada por qualidade. Duas décadas depois, somos uma rede com
              mais de {units.filter(u => u.country === "BR").length} unidades em São Paulo e uma
              unidade internacional em Orlando — sempre com o mesmo padrão obsessivo de excelência.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-graphite p-5">
                  <div className="font-display text-4xl text-gold">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal rounded-2xl overflow-hidden border border-border">
            <img
              src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1200&q=80"
              alt="Unidades da rede Levelz Cutz"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-graphite">
        <div className="container-app">
          <SectionHeading eyebrow="Linha do tempo" title={<>20 anos de <span className="text-gold-gradient">evolução</span></>} />
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border" />
            {timeline.map((t, i) => (
              <div key={t.year} className={`reveal relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-10 items-center`}>
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
          <div className="mt-14 text-center reveal">
            <Link to="/unidades" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-jet hover:bg-gold-soft">
              <MapPin className="size-4" /> Ver unidades da rede <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
