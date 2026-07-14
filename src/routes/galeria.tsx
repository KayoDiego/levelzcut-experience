import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — LevelzCut Pinheiros" },
      { name: "description", content: "Cortes, barbas, ambiente e detalhes da LevelzCut Pinheiros." },
    ],
  }),
  component: Galeria,
});

const CATS = ["Todos", "Cortes", "Barbas", "Ambiente", "Detalhes"] as const;
type Cat = (typeof CATS)[number];

function Galeria() {
  useReveal();
  const [cat, setCat] = useState<Cat>("Todos");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const list = useMemo(
    () => (cat === "Todos" ? [...gallery] : gallery.filter((g) => g.cat === cat)),
    [cat],
  );

  const close = () => setOpenIdx(null);
  const prev = () => setOpenIdx((i) => (i === null ? null : (i - 1 + list.length) % list.length));
  const next = () => setOpenIdx((i) => (i === null ? null : (i + 1) % list.length));

  useEffect(() => {
    if (openIdx === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", on);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", on);
      document.body.style.overflow = "";
    };
  }, [openIdx, list.length]);

  return (
    <section className="py-24 bg-jet">
      <div className="container-app">
        <SectionHeading
          eyebrow="Galeria"
          title={<>Nossa <span className="text-gold-gradient">assinatura</span> em imagens</>}
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2 reveal">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest border transition-colors",
                cat === c
                  ? "bg-gold text-jet border-gold"
                  : "border-border text-cream/80 hover:border-gold hover:text-gold",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setOpenIdx(i)}
              className="reveal group relative overflow-hidden rounded-xl border border-border aspect-square focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={`Abrir foto de ${g.cat}`}
            >
              <img
                src={g.src}
                alt={`Foto categoria ${g.cat}`}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jet/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 text-xs uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                {g.cat}
              </span>
            </button>
          ))}
        </div>
      </div>

      {openIdx !== null && (
        <div
          className="fixed inset-0 z-[60] bg-jet/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 grid size-11 place-items-center rounded-full border border-gold text-gold hover:bg-gold hover:text-jet transition-colors"
            aria-label="Fechar"
          >
            <X className="size-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 grid size-12 place-items-center rounded-full border border-gold text-gold hover:bg-gold hover:text-jet transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 grid size-12 place-items-center rounded-full border border-gold text-gold hover:bg-gold hover:text-jet transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="size-6" />
          </button>
          <img
            src={list[openIdx].src}
            alt=""
            className="max-h-[85vh] max-w-[90vw] rounded-lg border border-gold/40 object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
