import { MessageCircle } from "lucide-react";

export function WhatsappFloat() {
  const phone = "5511999990000";
  const msg = encodeURIComponent(
    "Olá! Vim pelo site da Levelz Cut e gostaria de saber mais sobre uma unidade.",
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl animate-pulse-gold hover:scale-110 transition-transform"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
