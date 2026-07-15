import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Loader2 } from "lucide-react";
import { services, units } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Levelz Cut" },
      { name: "description", content: "Fale com a rede Levelz Cut. Central de contato e WhatsApp direto com cada unidade." },
    ],
  }),
  component: Contato,
});

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome"),
  email: z.string().trim().email("E-mail inválido"),
  phone: z.string().trim().min(8, "Telefone inválido"),
  unit: z.string().min(1, "Escolha uma unidade"),
  service: z.string().min(1, "Escolha um serviço"),
  notes: z.string().max(500).optional(),
});

type Form = z.infer<typeof schema>;
type Status = "idle" | "ok" | "err";
type FieldState = Partial<Record<keyof Form, Status>>;
type FieldErr = Partial<Record<keyof Form, string>>;

const initial: Form = { name: "", email: "", phone: "", unit: "", service: "", notes: "" };

function Contato() {
  useReveal();
  const [form, setForm] = useState<Form>(initial);
  const [state, setState] = useState<FieldState>({});
  const [errors, setErrors] = useState<FieldErr>({});
  const [loading, setLoading] = useState(false);

  const validateField = <K extends keyof Form>(k: K, v: Form[K]) => {
    const res = schema.safeParse({ ...form, [k]: v });
    if (res.success) {
      setState((s) => ({ ...s, [k]: (v as string).length ? "ok" : "idle" }));
      setErrors((e) => ({ ...e, [k]: undefined }));
      return;
    }
    const issue = res.error.issues.find((i) => i.path[0] === k);
    if (issue) {
      setState((s) => ({ ...s, [k]: "err" }));
      setErrors((e) => ({ ...e, [k]: issue.message }));
    } else {
      setState((s) => ({ ...s, [k]: (v as string).length ? "ok" : "idle" }));
      setErrors((e) => ({ ...e, [k]: undefined }));
    }
  };

  const setField = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    validateField(k, v);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: FieldErr = {};
      const st: FieldState = {};
      res.error.issues.forEach((i) => {
        const k = i.path[0] as keyof Form;
        errs[k] = i.message;
        st[k] = "err";
      });
      setErrors(errs);
      setState(st);
      toast.error("Preencha os campos corretamente");
      return;
    }
    setLoading(true);
    try {
      const resp = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(res.data),
      });
      if (!resp.ok) throw new Error("erro");
      toast.success("Solicitação enviada! Entraremos em contato em breve.");
      setForm(initial);
      setState({});
    } catch {
      toast.error("Não foi possível enviar. Tente pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = (k: keyof Form) =>
    cn(
      "w-full rounded-lg bg-jet border px-4 py-3 text-cream placeholder:text-muted-foreground/70 outline-none transition-colors",
      state[k] === "ok" && "border-success focus:border-success",
      state[k] === "err" && "border-destructive focus:border-destructive",
      (!state[k] || state[k] === "idle") && "border-border focus:border-gold",
    );

  const phone = "5511999990000";
  const waMsg = encodeURIComponent("Olá! Vim pelo site e gostaria de agendar.");

  return (
    <section className="py-24 bg-jet">
      <div className="container-app grid gap-12 lg:grid-cols-2">
        {/* Left */}
        <div className="reveal">
          <div className="text-gold uppercase tracking-[0.4em] text-xs mb-4">Contato da rede</div>
          <h1 className="font-display text-5xl md:text-6xl leading-none">
            Fale com a <span className="text-gold-gradient">rede Levelz Cut</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Escolha a unidade mais conveniente ou fale com a central. Preferindo WhatsApp direto com uma unidade, veja <Link to="/unidades" className="text-gold hover:underline">todas as unidades</Link>.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, label: "Presença", value: `${units.filter(u => u.country === "BR").length} unidades em SP · 1 em Orlando, FL` },
              { icon: Phone, label: "Central", value: "(11) 99999-0000" },
              { icon: Mail, label: "E-mail", value: "contato@levelzcut.com.br" },
              { icon: Clock, label: "Horários", value: "Seg–Sáb 09h–21h · Dom 10h–18h" },
            ].map((it) => (
              <div key={it.label} className="flex items-start gap-4 rounded-xl border border-border bg-graphite p-5">
                <div className="grid size-11 place-items-center rounded-lg bg-gold/10 text-gold shrink-0">
                  <it.icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-gold">{it.label}</div>
                  <div className="mt-1 text-sm text-cream/90">{it.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${phone}?text=${waMsg}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white hover:opacity-90 transition"
            >
              <MessageCircle className="size-4" /> WhatsApp central
            </a>
            <Link
              to="/unidades"
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream hover:bg-gold/10 transition"
            >
              Ver unidades <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} noValidate className="reveal rounded-2xl border border-border bg-graphite p-6 md:p-8 space-y-5">
          <h2 className="font-display text-3xl">Agendamento</h2>
          <p className="text-sm text-muted-foreground -mt-3">Preencha e retornamos em minutos.</p>

          <Field label="Nome completo" id="name" error={errors.name}>
            <input id="name" required value={form.name} onChange={(e) => setField("name", e.target.value)} className={inputCls("name")} placeholder="Como você se chama" />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="E-mail" id="email" error={errors.email}>
              <input id="email" type="email" required value={form.email} onChange={(e) => setField("email", e.target.value)} className={inputCls("email")} placeholder="voce@email.com" />
            </Field>
            <Field label="Telefone" id="phone" error={errors.phone}>
              <input id="phone" type="tel" required value={form.phone} onChange={(e) => setField("phone", e.target.value)} className={inputCls("phone")} placeholder="(11) 99999-0000" />
            </Field>
          </div>

          <Field label="Unidade preferida" id="unit" error={errors.unit}>
            <select id="unit" required value={form.unit} onChange={(e) => setField("unit", e.target.value)} className={inputCls("unit")}>
              <option value="">Selecione uma unidade</option>
              {units.map((u) => (
                <option key={u.id} value={u.name}>{u.name} — {u.neighborhood}</option>
              ))}
            </select>
          </Field>

          <Field label="Serviço" id="service" error={errors.service}>
            <select id="service" required value={form.service} onChange={(e) => setField("service", e.target.value)} className={inputCls("service")}>
              <option value="">Selecione um serviço</option>
              {services.map((s) => (
                <option key={s.id} value={s.name}>{s.name} — {s.price}</option>
              ))}
            </select>
          </Field>

          <Field label="Observações (opcional)" id="notes" error={errors.notes}>
            <textarea id="notes" rows={3} value={form.notes} onChange={(e) => setField("notes", e.target.value)} className={inputCls("notes")} placeholder="Barbeiro preferido, tipo de corte, etc." />
          </Field>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-widest text-jet hover:bg-gold-soft disabled:opacity-60 transition-colors"
          >
            {loading ? <><Loader2 className="size-4 animate-spin" /> Enviando…</> : <>Confirmar agendamento <ArrowRight className="size-4" /></>}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-gold mb-2">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
