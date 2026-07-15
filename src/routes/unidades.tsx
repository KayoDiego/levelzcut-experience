import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, Phone, Search, ExternalLink, MessageCircle, Clock, Globe2, X } from "lucide-react";
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

  // Quando usuário digita na busca, reseta o filtro de bairro para "Todos"
  const handleQueryChange = (value: string) => {
    setQuery(value);
    if (value.trim() !== "") setFilter("Todos");
  };

  // Quando usuário seleciona bairro no dropdown, limpa a busca textual
  const handleFilterChange = (value: string) => {
    setFilter(value);
    if (value !== "Todos") setQuery("");
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const activeFilter = filter;

    return units.filter((u) => {
      // Filtro de bairro (dropdown)
      const matchesFilter = activeFilter === "Todos" || u.neighborhood === activeFilter;
      if (!matchesFilter) return false;

      // Busca textual (input)
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

  const hasResults = filtered.length > 0;
  const isFiltering = query.trim() !== "" || filter !== "Todos";

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
                onChange={(e) => handleQueryChange(e.target.value)}
                placeholder="Buscar por bairro, endereço ou cidade…"
                aria-label="Buscar unidade"
                className="w-full rounded-full bg-graphite border border-border pl-11 pr-4 py-3.5 text-cream placeholder:text-muted-foreground/70 outline-none focus:border-gold transition-colors"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => { handleQueryChange(""); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-cream transition-colors"
                  aria-label="Limpar busca"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            <div className="relative">
              <select
                aria-label="Filtrar por bairro"
                value={filter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="w-full md:w-[220px] appearance-none rounded-full bg-graphite border border-border px-4 py-3.5 text-cream outline-none focus:border-gold transition-colors"
              >
                {neighborhoods.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              {filter !== "Todos" && (
                <button
                  type="button"
                  onClick={() => handleFilterChange("Todos")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-cream transition-colors"
                  aria-label="Remover filtro de bairro"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          </div>

          {/* Active filters indicator */}
          {isFiltering && (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>Filtros ativos:</span>
              {query && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-3 py-0.5 text-gold">
                  Busca: <span className="font-medium">{query}</span>
                  <button onClick={() => handleQueryChange("")} className="ml-1 hover:text-gold/70" aria-label="Remover busca"><X className="size-3" /></button>
                </span>
              )}
              {filter !== "Todos" && (
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-3 py-0.5 text-gold">
                  Bairro: <span className="font-medium">{filter}</span>
                  <button onClick={() => handleFilterChange("Todos")} className="ml-1 hover:text-gold/70" aria-label="Remover bairro"><X className="size-3" /></button>
                </span>
              )}
              <button
                onClick={() => { handleQueryChange(""); handleFilterChange("Todos"); }}
                className="ml-2 text-xs underline underline-offset-2 hover:text-cream"
              >
                Limpar tudo
              </button>
            </div>
          )}

          {/* Results count */}
          <div className="mt-6 text-sm text-muted-foreground">
            {hasResults
              ? `Exibindo ${filtered.length} de ${units.length} unidade${units.length > 1 ? "s" : ""}${isFiltering ? ` (filtrado${filtered.length !== 1 ? "s" : ""})` : ""}`
              : "Nenhuma unidade encontrada com esses filtros."
            }
          </div>

          {/* Units Grid - Brasil */}
          {brUnits.length > 0 && (
            <section className="mt-12" aria-label="Unidades no Brasil">
              <h3 className="flex items-center gap-2 text-lg font-display text-cream">
                <Globe2 className="size-5 text-gold" aria-hidden="true" />
                Brasil
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {brUnits.map((u) => (
                  <UnitCard key={u.id} unit={u} />
                ))}
              </div>
            </section>
          )}

          {/* Units Grid - Internacional */}
          {intlUnits.length > 0 && (
            <section className="mt-12" aria-label="Unidades internacionais">
              <h3 className="flex items-center gap-2 text-lg font-display text-cream">
                <Globe2 className="size-5 text-gold" aria-hidden="true" />
                Internacional
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {intlUnits.map((u) => (
                  <UnitCard key={u.id} unit={u} />
                ))}
              </div>
            </section>
          )}

          {/* Empty state */}
          {!hasResults && (
            <div className="mt-12 text-center py-12 text-muted-foreground">
              <Search className="mx-auto mb-4 size-12 opacity-50" />
              <p className="text-lg">Nenhuma unidade encontrada.</p>
              <p className="mt-1">Tente ajustar sua busca ou <button onClick={() => { handleQueryChange(""); handleFilterChange("Todos"); }} className="underline hover:text-cream">limpe os filtros</button>.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function UnitCard({ unit }: { unit: typeof units[0] }) {
  const mapsUrl = unit.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unit.name + " " + unit.address)}`;
  const whatsappUrl = `https://wa.me/${unit.whatsapp}`;
  const phoneHref = `tel:${unit.phone.replace(/\D/g, "")}`;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-graphite transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={unit.image}
          alt={`${unit.name} - Ambiente`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jet/80 via-jet/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-jet/90 backdrop-blur px-3 py-1.5 text-xs font-medium text-cream hover:bg-gold hover:text-jet transition-colors"
            aria-label={`Ver ${unit.name} no Google Maps`}
          >
            <MapPin className="size-3.5" aria-hidden="true" />
            Ver no Maps
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-green-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-green-500 transition-colors"
            aria-label={`Agendar no WhatsApp - ${unit.name}`}
          >
            <MessageCircle className="size-3.5" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="font-display text-xl text-cream">{unit.name}</h4>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
              <span>{unit.neighborhood}, {unit.city}{unit.state && ` - ${unit.state}`}</span>
            </p>
          </div>
          {unit.country !== "BR" && (
            <span className="shrink-0 rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-medium text-gold uppercase tracking-wider">
              {unit.country === "US" ? "EUA" : unit.country}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <a href={phoneHref} className="flex items-center gap-1.5 hover:text-gold transition-colors" aria-label={`Ligar para ${unit.phone}`}>
            <Phone className="size-3.5" aria-hidden="true" />
            <span>{unit.phone}</span>
          </a>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            <span>{unit.hours}</span>
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center rounded-full border border-border px-4 py-2 text-sm font-medium text-cream hover:border-gold hover:bg-gold/10 hover:text-gold transition-colors"
          >
            <ExternalLink className="inline-block size-3.5 mr-1.5" aria-hidden="true" />
            Como chegar
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center rounded-full bg-gold px-4 py-2 text-sm font-medium text-jet hover:bg-gold-hover transition-colors"
          >
            <MessageCircle className="inline-block size-3.5 mr-1.5" aria-hidden="true" />
            Agendar
          </a>
        </div>
      </div>
    </article>
  );
}