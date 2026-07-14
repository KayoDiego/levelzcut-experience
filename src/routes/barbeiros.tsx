import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Instagram, ArrowRight } from "lucide-react";
import { barbers } from "@/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/barbeiros")({
  head: () => ({
    meta: [
      { title: "Barbeiros — LevelzCut" },
      { name: "description", content: "Conheça os barbeiros da LevelzCut. Rafa, Salles, Prado e Leo — cada um com sua assinatura." },
    ],
  }),
  component: Barbeiros,
});

function Barbeiros() {
  useReveal();
  return (
    <section className="py-24 bg-jet">
      <div className="container-app">
        <SectionHeading
          eyebrow="Nosso time"
          title={<>Escolha seu <span className="text-gold-gradient">barbeiro</span></>}
          description="Cada um com uma especialidade. Todos com o mesmo padrão obsessivo de qualidade."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {barbers.map((b) => (
            <article key={b.id} className="reveal card-lift group rounded-2xl overflow-hidden border border-border bg-graphite">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={b.image} alt={b.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-jet via-transparent to-transparent" />
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-jet/80 backdrop-blur px-3 py-1 text-xs">
                  <Star className="size-3 fill-gold text-gold" /> <span className="text-gold font-semibold">{b.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl leading-none">{b.name}</h3>
                <p className="text-gold text-sm mt-1 uppercase tracking-widest">"{b.nickname}"</p>
                <p className="mt-4 text-sm text-cream/90">{b.specialty}</p>
                <p className="text-xs text-muted-foreground mt-2">{b.years} anos de experiência</p>
                <a
                  href={`https://instagram.com/${b.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-gold transition-colors"
                >
                  <Instagram className="size-4" /> {b.instagram}
                </a>
                <Link
                  to="/contato"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-jet hover:bg-gold-soft transition-colors"
                >
                  Agendar com {b.nickname} <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
