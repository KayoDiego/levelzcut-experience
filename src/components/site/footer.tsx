import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-jet">
      <div className="container-app py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-3xl tracking-wider">
            LEVELZ<span className="text-gold">CUT</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            By Fio Navalha. Barbearia premium para o homem moderno que se cuida.
          </p>
        </div>
        <div>
          <h4 className="text-gold text-lg tracking-widest">NAVEGUE</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/", "Home"],
              ["/sobre", "Sobre"],
              ["/servicos", "Serviços"],
              ["/barbeiros", "Barbeiros"],
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
        </div>
        <div>
          <h4 className="text-gold text-lg tracking-widest">HORÁRIOS</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Clock className="size-4 text-gold" /> Ter–Sex: 10h–21h</li>
            <li className="flex items-center gap-2"><Clock className="size-4 text-gold" /> Sáb: 09h–20h</li>
            <li className="flex items-center gap-2"><Clock className="size-4 text-gold" /> Dom–Seg: Fechado</li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold text-lg tracking-widest">CONTATO</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="size-4 text-gold mt-0.5" /> São Paulo, SP</li>
            <li className="flex items-center gap-2"><Phone className="size-4 text-gold" /> (11) 99999-0000</li>
          </ul>
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
      </div>
      <div className="border-t border-border/50 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} LevelzCut by Fio Navalha. Todos os direitos reservados.
      </div>
    </footer>
  );
}
