import { useRef, useState, type FormEvent } from "react";
import { EMAIL, WHATSAPP_URL } from "@/lib/contact";

// Web3Forms delivers submissions to the inbox the access key was created for
// (teresamortatti@gmail.com). The key is meant to be public.
const WEB3FORMS_ACCESS_KEY = "f86415d5-4ca0-4fd7-9053-f9f2be264bf6";
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "sending" | "sent" | "error";

const labelClass = "block text-xs uppercase tracking-widest text-muted mb-2";
const fieldClass =
  "w-full bg-suede/50 border border-suedeDark rounded px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-sage transition-colors";

const details = [
  { label: "Localização:", value: "Rua Lino de Moraes Leme, 123, Nova Campinas, Campinas – SP" },
  { label: "Online:", value: "Atendimentos por videochamada (Brasil e Exterior)" },
];

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const resetTimer = useRef<number>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload: Record<string, FormDataEntryValue> = {
      ...Object.fromEntries(new FormData(form)),
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Novo contato pelo site",
      from_name: "Site Teresa Mortatti",
    };

    const contact = String(payload["Contato"] ?? "");
    if (contact.includes("@")) payload.replyto = contact;

    window.clearTimeout(resetTimer.current);
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error(result.message);

      form.reset();
      setStatus("sent");
      resetTimer.current = window.setTimeout(() => setStatus("idle"), 7000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-suede border-t border-suedeDark px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-freijo block mb-2">Primeiro Contato</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-tight">
                Agende uma conversa inicial
              </h2>
            </div>

            <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
              O início de uma análise ou supervisão acontece a partir de entrevistas preliminares — um momento para
              conversarmos sobre o que traz você até aqui, esclarecermos dúvidas sobre o funcionamento e combinarmos os
              detalhes do enquadre.
            </p>

            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-6 py-4 bg-sage text-linen text-xs uppercase tracking-[0.16em] rounded hover:bg-sageDark transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
                </svg>
                <span>Conversar pelo WhatsApp</span>
              </a>
            </div>

            <div className="pt-6 border-t border-suedeDark space-y-3 text-xs text-muted">
              {details.map((detail) => (
                <div key={detail.label} className="flex items-start space-x-3">
                  <span className="text-freijo uppercase tracking-widest font-medium w-24">{detail.label}</span>
                  <span>{detail.value}</span>
                </div>
              ))}
              <div className="flex items-start space-x-3">
                <span className="text-freijo uppercase tracking-widest font-medium w-24">E-mail:</span>
                <a href={`mailto:${EMAIL}`} className="hover:text-freijo transition-colors">
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-linen p-8 sm:p-10 rounded-lg border border-suedeDark space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className={labelClass}>
                    Nome completo
                  </label>
                  <input type="text" id="nome" name="Nome" required placeholder="Seu nome" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="contato-input" className={labelClass}>
                    Telefone (WhatsApp) ou E-mail
                  </label>
                  <input
                    type="text"
                    id="contato-input"
                    name="Contato"
                    required
                    placeholder="(19) 99999-9999"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="interesse" className={labelClass}>
                    Interesse
                  </label>
                  <select id="interesse" name="Interesse" className={fieldClass}>
                    <option value="Análise Individual (Adulto)">Análise Individual (Adulto)</option>
                    <option value="Análise para Adolescente">Análise para Adolescente</option>
                    <option value="Supervisão Clínica">Supervisão Clínica</option>
                    <option value="Outros Assuntos">Outros Assuntos</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="modalidade" className={labelClass}>
                    Modalidade preferida
                  </label>
                  <select id="modalidade" name="Modalidade" className={fieldClass}>
                    <option value="Online">Atendimento Online</option>
                    <option value="Presencial">Atendimento Presencial</option>
                    <option value="A definir">Conversar sobre opções</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className={labelClass}>
                  Mensagem breve (opcional)
                </label>
                <textarea
                  id="mensagem"
                  name="Mensagem"
                  rows={4}
                  placeholder="Se desejar, compartilhe brevemente sua disponibilidade de horários ou dúvida inicial."
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-muted font-light">
                  Suas informações são tratadas com absoluto sigilo ético.
                </span>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-8 py-3.5 bg-charcoal text-linen text-xs uppercase tracking-[0.18em] rounded hover:bg-sage transition-colors duration-300 disabled:opacity-60"
                >
                  {status === "sending" ? "Enviando…" : "Enviar mensagem"}
                </button>
              </div>

              {status === "sent" && (
                <div className="p-4 bg-sageLight border border-sage/30 rounded text-sm text-sageDark font-light">
                  Mensagem recebida com sucesso. Retornarei o seu contato em breve para agendarmos nossa conversa
                  inicial.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-suede border border-freijo/40 rounded text-sm text-charcoal font-light">
                  Não foi possível enviar sua mensagem agora. Por favor, fale comigo pelo{" "}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-freijo"
                  >
                    WhatsApp
                  </a>{" "}
                  ou pelo e-mail{" "}
                  <a href={`mailto:${EMAIL}`} className="underline underline-offset-4 hover:text-freijo">
                    {EMAIL}
                  </a>
                  .
                </div>
              )}

              {/* Honeypot, kept last so space-y-6 doesn't push the first row down.
                  Bots tick it; Web3Forms rejects those submissions. */}
              <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
