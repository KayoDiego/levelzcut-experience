import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos — LevelzCut" },
      { name: "description", content: "O que os clientes falam da LevelzCut. Nota 4.9 no Google." },
    ],
  }),
  component: Depoimentos,
});

function Depoimentos() {
  useReveal();
  return (
    <section className="py-24 bg-jet">
      <div className="container-app">
        <SectionHeading
          eyebrow="Depoimentos"
          title={<>Palavra de quem <span className="text-gold-gradient">passa por aqui</span></>}
          description="Nota 4.9 no Google. Milhares de clientes que voltaram — e trouxeram amigos."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="reveal card-lift rounded-xl border border-border bg-graphite p-7 flex flex-col">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-cream/90 leading-relaxed flex-1">"{t.text}"</blockquote>
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

        <div className="mt-16 text-center reveal">
          <a
            href="https://g.page/r/levelzcut/review"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-jet hover:bg-gold-soft transition-colors"
          >
            <Star className="size-4 fill-current" /> Avaliar no Google
          </a>
        </div>
      </div>
    </section>
  );
}
