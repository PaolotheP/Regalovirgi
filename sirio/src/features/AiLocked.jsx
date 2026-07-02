 
import { PageHeader } from "./common.jsx";
import GlassLock from "../components/GlassLock.jsx";

function ChatPreview({ who, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-glow text-xs font-bold">{who}</div>
      <div className="rounded-2xl bg-fill/5 px-4 py-2.5 text-sm text-text">{text}</div>
    </div>
  );
}

export function Tutor() {
  return (
    <div>
      <PageHeader eyebrow="Assistenza AI" title="Tutor AI" sub="Un assistente che risponde solo sui contenuti certificati e cita sempre la fonte." />
      <GlassLock title="Tutor AI" desc="Chiedi un chiarimento e ottieni una risposta ancorata alla fonte certificata.">
        <div className="space-y-3">
          <ChatPreview who="TU" text="Qual è la differenza tra dolo eventuale e colpa cosciente?" />
          <ChatPreview who="Sirio" text="La differenza sta nell'atteggiamento volitivo: nel dolo eventuale l'agente accetta il rischio; nella colpa cosciente confida di evitarlo (art. 61 n.3). Cfr. SU 38343/2014, ThyssenKrupp." />
          <div className="rounded-xl bg-fill/[0.04] border border-line/10 px-4 py-3 text-sm text-text-mute">Fai una domanda…</div>
        </div>
      </GlassLock>
    </div>
  );
}

export function Esaminatore() {
  return (
    <div>
      <PageHeader eyebrow="Assistenza AI" title="Esaminatore AI" sub="Una simulazione d'orale che ti interroga, rilancia sul punto debole e restituisce una valutazione." />
      <GlassLock title="Esaminatore AI" desc="Pone una domanda, ascolta la risposta e valuta padronanza, uso delle fonti, chiarezza e linguaggio.">
        <div className="space-y-3">
          <ChatPreview who="ES" text="Mi illustri il nesso di causalità e cosa ha stabilito la sentenza Franzese." />
          <ChatPreview who="TU" text="La teoria condizionalistica considera causa ogni antecedente necessario…" />
          <div className="grid grid-cols-2 gap-2 text-sm">
            {["Padronanza 8.5", "Uso fonti 8.0", "Chiarezza 7.5", "Linguaggio 8.0"].map((v) => (
              <div key={v} className="rounded-lg bg-fill/5 px-3 py-2 text-text-soft">{v}</div>
            ))}
          </div>
        </div>
      </GlassLock>
    </div>
  );
}

export function Palestra() {
  return (
    <div>
      <PageHeader eyebrow="Esercitazione" title="Palestra di Scrittura" sub="Temi e pareri su tracce realistiche, con un riscontro su struttura, fondamento, completezza e chiarezza." />
      <GlassLock title="Palestra di Scrittura" desc="Scrivi il tuo elaborato e ricevi un riscontro puntuale, con i punti trascurati e come rimediarli.">
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-glow">Traccia</div>
          <p className="text-sm text-text">Tizio, nel corso di una lite, sferra un pugno a Caio che, cadendo, muore. Rediga un parere sul titolo di responsabilità.</p>
          <div className="min-h-[80px] rounded-xl bg-fill/[0.04] border border-line/10 px-4 py-3 text-sm text-text-mute">Il tuo elaborato…</div>
        </div>
      </GlassLock>
    </div>
  );
}
