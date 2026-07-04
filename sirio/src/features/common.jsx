import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, Phone, Mail, Send, BadgeCheck } from "lucide-react";
import { Modal, Button, Textarea, toast, Pill } from "../components/ui.jsx";
import { HelpDot } from "../components/DirexiCompanion.jsx";
import { waLink, telLink, mailtoLink, getContact } from "../data/contacts.js";
import { currentSubject } from "../lib/subject.js";
const SUBJ_NAME = currentSubject().nome;
import { cn } from "../lib/utils.js";

export function PageHeader({ eyebrow, title, sub, right, helpKey }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <div className="eyebrow mb-2">{eyebrow}</div>}
        <div className="flex items-center gap-2">
          <h1 className="font-display text-3xl font-bold tracking-tight text-text-hi sm:text-4xl">{title}</h1>
          {helpKey && <HelpDot guide={helpKey} className="mt-1" size={17} />}
        </div>
        {sub && <p className="mt-2 max-w-2xl text-text-soft">{sub}</p>}
      </div>
      {right}
    </div>
  );
}

/* Bollino dei contenuti certificati dall'editore, con data di redazione. */
export const CERT_DATE = "giugno 2026";
export function Certified({ date = CERT_DATE, className, compact = false }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-gradient-to-r from-emerald-400/12 to-glow/10 px-2.5 py-1 text-[0.65rem] font-bold tracking-wide text-emerald-600",
      className)} title={`Contenuto certificato Neldiritto Editore · redatto a ${date}`}>
      <BadgeCheck size={13} className="shrink-0" />
      {compact ? date : <>Certificato Neldiritto · {date}</>}
    </span>
  );
}

export function BackLink({ to, children }) {
  const nav = useNavigate();
  return (
    <button onClick={() => nav(to)} className="mb-5 flex w-fit items-center gap-2 text-sm font-semibold text-text-soft transition hover:text-glow">
      <ArrowLeft size={16} /> {children}
    </button>
  );
}

/* Avatar generato da un "hue" (nomi di fantasia) */
export function Avatar({ name = "?", hue = 210, size = 44 }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div className="grid shrink-0 place-items-center rounded-full font-display font-bold text-white"
      style={{ width: size, height: size, fontSize: size * 0.36,
        background: `linear-gradient(135deg, hsl(${hue} 90% 62%), hsl(${hue + 30} 80% 42%))`,
        boxShadow: `0 6px 18px hsla(${hue} 80% 50% / 0.35)` }}>
      {initials}
    </div>
  );
}

/* Compositore di messaggi riusabile.
   - contactId presente → contatto REALE: link tel/wa/mailto precompilati.
   - altrimenti → nome di fantasia: invio simulato in-app. */
export function useComposer() {
  const [state, setState] = useState(null); // { name, defaultText, contactId }
  const open = (opts) => setState(opts);
  const close = () => setState(null);
  const node = <ComposerModal state={state} onClose={close} />;
  return { open, node };
}

function ComposerModal({ state, onClose }) {
  const [text, setText] = useState("");
  const contact = state?.contactId ? getContact(state.contactId) : null;
  // sync default text when opened
  if (state && text === "" && state.defaultText) {
    // set once
    queueMicrotask(() => setText(state.defaultText));
  }
  const subject = `Preparazione esame di ${SUBJ_NAME} — Sirio`;
  const reset = () => { setText(""); onClose(); };

  return (
    <Modal open={!!state} onClose={reset}>
      {state && (
        <div>
          <Pill tone="glow" className="mb-3"><MessageCircle size={13} /> Messaggio</Pill>
          <h3 className="font-display text-xl font-bold text-text-hi">A {state.name}</h3>
          {contact && <p className="mt-1 text-sm text-text-soft">{contact.ruolo}</p>}
          <Textarea className="mt-4" value={text} onChange={(e) => setText(e.target.value)} rows={4} />
          {contact ? (
            <div className="mt-4 grid gap-2">
              <p className="text-xs text-text-mute">Contatto reale — scegli come inviare:</p>
              <div className="flex flex-wrap gap-2">
                <Button as="a" href={waLink(contact.wa, text)} target="_blank" rel="noreferrer" onClick={reset} size="sm">
                  <MessageCircle size={15} /> WhatsApp
                </Button>
                <Button as="a" variant="ghost" href={telLink(contact.tel)} onClick={reset} size="sm">
                  <Phone size={15} /> Chiama
                </Button>
                {contact.email && (
                  <Button as="a" variant="ghost" href={mailtoLink(contact.email, subject, text)} onClick={reset} size="sm">
                    <Mail size={15} /> Email
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <Button className="mt-4 w-full" onClick={() => { toast("Messaggio inviato (simulato)"); reset(); }}>
              <Send size={15} /> Invia messaggio
            </Button>
          )}
        </div>
      )}
    </Modal>
  );
}
