import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock, Mail } from "lucide-react";
import { units, brand } from "@/data/site";

export function Footer() {
  const spUnits = units.filter((u) => u.country === "BR");
  const intlUnits = units.filter((u) => u.country !== "BR");

  return (
    <footer className="border-t border-border/60 bg-jet">
      <div className="container-app py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-3xl tracking-wider">
            LEVELZ<span className="text-gold">CUTZ</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Rede premium de barbearias masculinas. Desde 2005 cuidando do estilo do homem moderno.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold text-lg tracking-widest">UNIDADES SP</h4>
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground max-h-56 overflow-hidden">
            {spUnits.slice(0, 8).map((u) => (
              <li key={u.id} className="flex items-center gap-2">
                <MapPin className="size-3.5 text-gold shrink-0" /> {u.neighborhood}
              </li>
            ))}
          </ul>
          <Link to="/unidades" className="mt-3 inline-block text-xs uppercase tracking-widest text-gold hover:underline">
            Ver todas ({units.length}) →
          </Link>
          {intlUnits.length > 0 && (
            <div className="mt-4">
              <div className="text-xs uppercase tracking-widest text-gold/80">Internacional</div>
              <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                {intlUnits.map((u) => (
                  <li key={u.id} className="flex items-center gap-2">
                    <MapPin className="size-3.5 text-gold shrink-0" /> {u.city}, {u.state}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <h4 className="text-gold text-lg tracking-widest">LINKS RÁPIDOS</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/", "Home"],
              ["/sobre", "A Rede"],
              ["/unidades", "Unidades"],
              ["/servicos", "Serviços"],
              ["/galeria", "Galeria"],
              ["/depoimentos", "Depoimentos"],
              ["/contato", "Contato"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="text-gold text-lg tracking-widest mt-6">HORÁRIOS</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Clock className="size-4 text-gold" /> Seg–Sáb: 09h–21h</li>
            <li className="flex items-center gap-2"><Clock className="size-4 text-gold" /> Dom: 10h–18h</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-lg tracking-widest">CONTATO</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="size-4 text-gold mt-0.5" /> São Paulo, SP · Orlando, FL</li>
            <li className="flex items-center gap-2"><Phone className="size-4 text-gold" /> {brand.phone}</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-gold" /> {brand.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Levelz Cut — Rede de barbearias premium. Desde 2005.
      </div>
    </footer>
  );
}
