import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, Phone, Search, ExternalLink, MessageCircle, Clock, Globe2 } from "lucide-react";
import { units } from "@/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/unidades")({
  head: () => ({
    meta: [
      { title: "Unidades — Levelz Cutz | Rede de Barbearias Premium" },
      { name: "description", content: "Mais de 10 unidades em São Paulo e uma unidade internacional em Orlando. Encontre a Levelz Cutz mais próxima de você." },
      { property: "og:title", content: "Unidades Levelz Cutz — SP e Orlando" },
      { property: "og:description", content: "Encontre a unidade mais próxima de você. Rede premium de barbearias." },
    ],
  }),
  component: Unidades,
});

function Unidades() {
  useReveal();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("Todos");

  const neighborhoods = useMemo(() => {
    const list = Array.from(new Set(units.map((u) => u.neighborhood))).sort();
    return ["Todos", ...list];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return units.filter((u) => {
      const matchesFilter = filter === "Todos" || u.neighborhood === filter;
      if (!matchesFilter) return false;
      if (!q) return true;
      return (
        u.name.toLowerCase().includes(q) ||
        u.neighborhood.toLowerCase().includes(q) ||
        u.city.toLowerCase().includes(q) ||
        u.address.toLowerCase().includes(q)
      );
    });
  }, [query, filter]);

  const brUnits = filtered.filter((u) => u.country === "BR");
  const intlUnits = filtered.filter((u) => u.country !== "BR");

  return (
    <>
      <section className="py-20 md:py-24 bg-jet">
        <div className="container-app">
          <SectionHeading
            eyebrow={`${units.length} unidades · SP + Orlando`}
            title={<>Encontre a <span className="text-gold-gradient">unidade mais próxima</span></>}
            description="Mais de 10 unidades em São Paulo e uma unidade internacional. Todas com o mesmo padrão Levelz Cutz."
          />

          {/* Search + Filter */}
          <div className="mt-10 grid gap-3 md:grid-cols-[1fr_auto]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por bairro, endereço ou cidade…"
                aria-label="Buscar unidade"
                className="w-full rounded-full bg-graphite border border-border pl-11 pr-4 py-3.5 text-cream placeholder:text-muted-foreground/70 outline-none focus:border-gold transition-colors"
              />
            </div>
            <select
              aria-label="Filtrar por bairro"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-full bg-graphite border border-border px-5 py-3.5 text-cream outline-none focus:border-gold transition-colors"
            >
              {neighborhoods.map((n) => (
                <option key={n} value={n}>{n === "Todos" ? "Todos os bairros" : n}</option>
              ))}
            </select>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Mostrando <span className="text-gold font-semibold">{filtered.length}</span> {filtered.length === 1 ? "unidade" : "unidades"}
          </div>

          {/* BR Units */}
          {brUnits.length > 0 && (
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-border" />
                <div className="text-xs uppercase tracking-[0.4em] text-gold">Brasil · São Paulo</div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {brUnits.map((u) => <UnitCard key={u.id} u={u} />)}
              </div>
            </div>
          )}

          {/* Intl Units */}
          {intlUnits.length > 0 && (
            <div className="mt-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-border" />
                <div className="text-xs uppercase tracking-[0.4em] text-gold flex items-center gap-2">
                  <Globe2 className="size-4" /> Internacional
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {intlUnits.map((u) => <UnitCard key={u.id} u={u} />)}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="mt-16 text-center py-16 rounded-2xl border border-dashed border-border">
              <p className="text-cream font-display text-2xl">Nenhuma unidade encontrada</p>
              <p className="mt-2 text-sm text-muted-foreground">Tente outro bairro ou limpe a busca.</p>
              <button
                onClick={() => { setQuery(""); setFilter("Todos"); }}
                className="mt-6 inline-flex items-center rounded-full border border-gold/60 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-cream hover:bg-gold/10"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-graphite">
        <div className="container-app text-center reveal">
          <h2 className="font-display text-4xl md:text-5xl">Não achou uma unidade perto de você?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Fale com a gente. Estamos sempre expandindo a rede pra chegar mais perto do nosso cliente.
          </p>
          <Link
            to="/contato"
            className={cn(
              "mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4",
              "text-sm font-semibold uppercase tracking-widest text-jet hover:bg-gold-soft"
            )}
          >
            Falar com a rede
          </Link>
        </div>
      </section>
    </>
  );
}

function UnitCard({ u }: { u: typeof units[number] }) {
  const waMsg = encodeURIComponent(`Olá! Gostaria de agendar na unidade ${u.neighborhood}.`);
  return (
    <article className="reveal card-lift group rounded-2xl overflow-hidden border border-border bg-graphite flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={u.image} alt={`Unidade Levelz Cutz ${u.neighborhood}`} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-jet/90 via-jet/20 to-transparent" />
        <div className="absolute top-3 left-3 rounded-full bg-jet/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-gold border border-gold/40">
          {u.country === "BR" ? "SP" : `${u.city}, ${u.state}`}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-2xl leading-tight">{u.name}</h3>
        <p className="text-xs uppercase tracking-widest text-gold mt-1">{u.neighborhood}</p>

        <ul className="mt-4 space-y-2 text-sm text-cream/90 flex-1">
          <li className="flex items-start gap-2"><MapPin className="size-4 text-gold mt-0.5 shrink-0" /> <span>{u.address}</span></li>
          <li className="flex items-center gap-2"><Phone className="size-4 text-gold shrink-0" /> {u.phone}</li>
          <li className="flex items-center gap-2 text-muted-foreground"><Clock className="size-4 text-gold shrink-0" /> {u.hours}</li>
        </ul>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <a
            href={u.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-gold/60 px-3 py-2.5 text-xs font-semibold uppercase tracking-widest text-cream hover:bg-gold/10 transition-colors"
          >
            <ExternalLink className="size-3.5" /> Maps
          </a>
          <a
            href={`https://wa.me/${u.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gold px-3 py-2.5 text-xs font-semibold uppercase tracking-widest text-jet hover:bg-gold-soft transition-colors"
          >
            <MessageCircle className="size-3.5" /> Contato
          </a>
        </div>
      </div>
    </article>
  );
}
