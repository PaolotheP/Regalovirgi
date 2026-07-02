import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, GraduationCap, Landmark, Scale, Sparkles, Upload, FileText, MessageSquareHeart, Bug, Lightbulb, Rocket } from "lucide-react";
import { useStore, saveUploadBlob } from "../lib/store.jsx";
import { UNIVERSITIES, professorsByUni, getProfessor } from "../data/professors.js";
import { BOOKS, PROF_BOOK } from "../data/books.js";
import { PLAN_TOPICS, CHAPTERS, topicsByChapter } from "../data/curriculum.js";
import { uid } from "../lib/utils.js";
import { Logo, LogoMark } from "../components/Logo.jsx";
import Background from "../components/Background.jsx";
import { Button, Input, Segmented, Ring, Select } from "../components/ui.jsx";
import { DirexiStar } from "./Direxi.jsx";
import PlanForging from "./PlanForging.jsx";
import { daysBetween, parseDate, today } from "../lib/utils.js";
import { cn } from "../lib/utils.js";

export default function Onboarding() {
  const { state, dispatch } = useStore();
  const nav = useNavigate();
  const p = state.profile;
  const [step, setStep] = useState(0);
  const [forging, setForging] = useState(false);

  const set = (patch) => dispatch({ type: "PATCH_PROFILE", patch });

  const steps = useMemo(() => {
    const arr = [
      { key: "nome", valid: () => p.name.trim().length > 0 },
      { key: "mode", valid: () => p.mode && (p.mode === "concorso" || (p.university && p.year)) },
      { key: "esame", valid: () => true },
      { key: "partenza", valid: () => p.startFromZero !== undefined && (p.startFromZero || (p.studiedBefore?.length || 0) > 0) },
      { key: "tempo", valid: () => !!p.examDate && p.hoursPerDay > 0 },
      { key: "obiettivo", valid: () => !!p.goal },
    ];
    if (p.mode === "esame") arr.push({ key: "professore", valid: () => true });
    arr.push({ key: "libro", valid: () => !!p.bookId });
    arr.push({ key: "beta", valid: () => true });
    return arr;
  }, [p.mode, p.name, p.university, p.year, p.examDate, p.hoursPerDay, p.goal, p.bookId, p.startFromZero, p.studiedBefore]);

  const cur = steps[step];
  const isLast = step === steps.length - 1;

  const gg = p.examDate ? Math.max(0, daysBetween(today(), parseDate(p.examDate))) : 56;
  const forgeSteps = useMemo(() => {
    const s = [
      `Analizzo ${PLAN_TOPICS.length} argomenti dell'indice…`,
      "Peso le pagine di ogni capitolo…",
      `Considero i tuoi ${gg} giorni all'esame e le ${p.hoursPerDay} ore al giorno…`,
    ];
    if (!p.startFromZero && p.studiedBefore?.length) s.push(`Metto ${p.studiedBefore.length} argomenti già studiati nel circuito del ripasso…`);
    s.push("Riservo l'ultimo miglio al solo ripasso ed esercizi…");
    s.push("Distribuisco il percorso in 3 periodi con verifiche…");
    s.push("Accendo la tua costellazione ✨");
    return s;
  }, [gg, p.hoursPerDay, p.startFromZero, p.studiedBefore]);

  function nextStep() {
    if (!cur.valid()) return;
    if (isLast) {
      setForging(true); // la costellazione si forma; al termine, il piano è reale
    } else setStep((s) => s + 1);
  }

  return (
    <div className="relative min-h-screen">
      <Background />
      <AnimatePresence>
        {forging && (
          <PlanForging steps={forgeSteps}
            onDone={() => { dispatch({ type: "COMPLETE_ONBOARDING" }); nav("/pricing?from=onboarding"); }} />
        )}
      </AnimatePresence>

      <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-5 py-8">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="text-sm text-text-mute">Passo {step + 1} di {steps.length}</div>
        </div>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-fill/10">
          <motion.div className="h-full bg-brand-grad" animate={{ width: `${((step + 1) / steps.length) * 100}%` }} transition={{ duration: 0.4 }} />
        </div>

        <div className="flex flex-1 flex-col justify-center py-8">
          <AnimatePresence mode="wait">
            <motion.div key={cur.key} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
              <StepBody stepKey={cur.key} p={p} set={set} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}><ArrowLeft size={16} /> Indietro</Button>
          <Button size="lg" disabled={!cur.valid()} onClick={nextStep}>
            {isLast ? <>Genera il piano <Sparkles size={17} /></> : <>Continua <ArrowRight size={17} /></>}
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Check-list "ho già studiato questi" ------------------- */
function StudiedChecklist({ p, set }) {
  const rows = useMemo(() => CHAPTERS
    .map((ch) => ({ ch, topics: topicsByChapter(ch.part, ch.n).filter((t) => PLAN_TOPICS.some((pt) => pt.id === t.id)) }))
    .filter((r) => r.topics.length), []);
  const sel = new Set(p.studiedBefore || []);
  const toggle = (id) => {
    const next = new Set(sel);
    if (next.has(id)) next.delete(id); else next.add(id);
    set({ studiedBefore: [...next] });
  };
  return (
    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="overflow-hidden">
      <div className="mt-5 max-h-72 space-y-4 overflow-y-auto rounded-xl2 border border-line/10 bg-fill/[0.02] p-4 pr-2">
        {rows.map(({ ch, topics }) => (
          <div key={`${ch.part}-${ch.n}`}>
            <div className="mb-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-text-mute">Cap. {ch.n} — {ch.title}</div>
            <div className="grid gap-1.5 sm:grid-cols-2">
              {topics.map((t) => {
                const on = sel.has(t.id);
                return (
                  <button key={t.id} onClick={() => toggle(t.id)}
                    className={cn("flex items-center gap-2 rounded-lg border px-2.5 py-2 text-left text-xs font-medium transition",
                      on ? "border-glow/50 bg-glow/10 text-text-hi" : "border-line/10 bg-fill/[0.03] text-text-soft hover:border-brand-400/40")}>
                    <span className={cn("grid h-4 w-4 shrink-0 place-items-center rounded border", on ? "border-glow bg-glow text-bg" : "border-line/30")}>
                      {on && <Check size={11} />}
                    </span>
                    <span className="min-w-0 flex-1 truncate">{t.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-text-mute">
        {sel.size > 0
          ? <>Il piano partirà dall'argomento successivo: i {sel.size} già studiati restano disponibili per la ripetizione.</>
          : "Spunta gli argomenti che hai già studiato: il piano partirà dal successivo."}
      </p>
    </motion.div>
  );
}

function StepBody({ stepKey, p, set }) {
  const { dispatch } = useStore();
  const fileRef = useRef(null);
  const profBookId = p.professorId ? PROF_BOOK[p.professorId] : null;
  const profCognome = p.professorId ? (getProfessor(p.professorId)?.nome.split(" ").slice(-1)[0]) : null;

  async function onDispensaFile(files) {
    const f = files?.[0];
    if (!f) return;
    const id = uid();
    try {
      await saveUploadBlob(id, f);
      dispatch({ type: "ADD_UPLOAD", meta: { id, name: f.name, size: f.size, type: f.type } });
      set({ bookId: "dispensa", dispensaName: f.name });
    } catch {}
  }

  if (stepKey === "nome")
    return (
      <div>
        <LogoMark size={64} className="mb-6" />
        <h1 className="font-display text-4xl font-bold text-text-hi">Come ti chiami?</h1>
        <p className="mt-2 text-text-soft">Personalizziamo il tuo cielo. Ti accoglieremo così ogni volta.</p>
        <Input autoFocus className="mt-6 text-lg" placeholder="Il tuo nome" value={p.name} onChange={(e) => set({ name: e.target.value })} />
      </div>
    );

  if (stepKey === "mode")
    return (
      <div>
        <h1 className="font-display text-3xl font-bold text-text-hi">Ti prepari per un esame o un concorso?</h1>
        <Segmented className="mt-6" cols={2} value={p.mode}
          onChange={(v) => set({ mode: v })}
          options={[{ value: "esame", label: "Esame universitario", desc: "Diritto penale a lezione" }, { value: "concorso", label: "Concorso pubblico", desc: "Magistratura, notariato…" }]} />
        <AnimatePresence>
          {p.mode === "esame" && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-6 space-y-4 overflow-visible">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-text-soft">Università</label>
                <div className="grid gap-2 sm:grid-cols-3">
                  {UNIVERSITIES.map((u) => (
                    <button key={u.id} onClick={() => set({ university: u.id })}
                      className={cn("rounded-xl border px-3 py-3 text-left text-sm transition", p.university === u.id ? "border-glow/50 bg-glow/10 text-text-hi" : "border-line/10 bg-fill/[0.03] text-text-soft hover:border-brand-400/40")}>
                      <div className="font-semibold">{u.nome.replace("Università ", "").replace(" Università", "")}</div>
                      <div className="text-xs text-text-mute">{u.citta}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="mb-2 block text-xs font-bold uppercase tracking-widest text-text-soft">Facoltà</label><Input value={p.faculty} onChange={(e) => set({ faculty: e.target.value })} /></div>
                <div><label className="mb-2 block text-xs font-bold uppercase tracking-widest text-text-soft">Anno di studio</label>
                  <Select value={p.year} onChange={(v) => set({ year: v })} placeholder="Scegli l'anno"
                    options={["1°", "2°", "3°", "4°", "5°", "Fuori corso"].map((y) => ({ value: y, label: y }))} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );

  if (stepKey === "esame")
    return (
      <div>
        <h1 className="font-display text-3xl font-bold text-text-hi">Per quale esame orale ti prepari?</h1>
        <p className="mt-2 text-text-soft">In questa beta è disponibile il Diritto penale (parte generale e speciale).</p>
        <div className="mt-6 flex items-center gap-4 rounded-xl3 glass-brand p-5">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-grad text-white"><Scale size={26} /></div>
          <div><div className="font-display text-xl font-bold text-text-hi">Diritto penale</div><div className="text-sm text-text-soft">Parte generale e speciale</div></div>
          <Check size={22} className="ml-auto text-glow" />
        </div>
        <p className="mt-4 text-sm text-text-mute">Presto: Diritto civile, costituzionale, amministrativo…</p>
      </div>
    );

  if (stepKey === "partenza")
    return (
      <div>
        <h1 className="font-display text-3xl font-bold text-text-hi">Parti da zero?</h1>
        <p className="mt-2 text-text-soft">Se hai già studiato una parte del programma, il piano non te la farà ripetere da capo: partirà dal punto giusto.</p>
        <Segmented className="mt-6" cols={2} value={p.startFromZero === false ? "no" : "si"}
          onChange={(v) => set({ startFromZero: v === "si", studiedBefore: v === "si" ? [] : p.studiedBefore || [] })}
          options={[
            { value: "si", label: "Sì, parto da zero", desc: "Il piano copre tutto l'indice" },
            { value: "no", label: "No, ho già studiato", desc: "Spunta gli argomenti già fatti" },
          ]} />
        <AnimatePresence>
          {p.startFromZero === false && <StudiedChecklist p={p} set={set} />}
        </AnimatePresence>
      </div>
    );

  if (stepKey === "tempo") {
    const gg = p.examDate ? Math.max(0, daysBetween(today(), parseDate(p.examDate))) : null;
    return (
      <div>
        <h1 className="font-display text-3xl font-bold text-text-hi">Quando hai l'esame?</h1>
        <p className="mt-2 text-text-soft">Da qui costruiamo il tuo calendario giorno per giorno.</p>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <input type="date" value={p.examDate} min={new Date().toISOString().slice(0, 10)} onChange={(e) => set({ examDate: e.target.value })}
            className="rounded-xl bg-fill/[0.05] border border-line/10 px-4 py-3 text-lg text-text-hi outline-none focus:border-brand-400" />
          {gg !== null && <div><div className="font-display text-4xl font-bold text-gradient">{gg}</div><div className="text-xs text-text-mute">giorni all'esame</div></div>}
        </div>
        <div className="mt-6">
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-text-soft">Ore di studio al giorno</label>
          <Segmented cols={4} value={p.hoursPerDay} onChange={(v) => set({ hoursPerDay: v })}
            options={[{ value: 1, label: "1 h" }, { value: 2, label: "2 h" }, { value: 4, label: "4 h" }, { value: 6, label: "6+ h" }]} />
        </div>
      </div>
    );
  }

  if (stepKey === "obiettivo") {
    const opts = [{ value: 60, label: "Sufficiente" }, { value: 80, label: "Solido" }, { value: 95, label: "Eccellente" }];
    return (
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-text-hi">Quanto vuoi essere preparato?</h1>
        <Ring value={p.goal} size={150} className="mx-auto my-8">
          <div><div className="font-display text-4xl font-bold text-gradient">{p.goal}%</div><div className="text-xs text-text-mute">obiettivo</div></div>
        </Ring>
        <Segmented cols={3} value={p.goal} onChange={(v) => set({ goal: v })} options={opts} />
        <p className="mt-4 text-sm text-text-mute">Più alto l'obiettivo, più fitta sarà la lettura a strati e più esigenti le verifiche.</p>
      </div>
    );
  }

  if (stepKey === "professore") {
    const profs = professorsByUni(p.university);
    return (
      <div>
        <h1 className="font-display text-3xl font-bold text-text-hi">Con quale professore?</h1>
        <p className="mt-2 text-text-soft">Adatteremo il taglio delle domande allo stile del corso.</p>
        <div className="mt-6 grid gap-3">
          {profs.map((pr) => (
            <button key={pr.id} onClick={() => set({ professorId: pr.id })}
              className={cn("flex items-start gap-3 rounded-xl2 border px-4 py-3.5 text-left transition", p.professorId === pr.id ? "border-glow/50 bg-glow/10" : "border-line/10 bg-fill/[0.03] hover:border-brand-400/40")}>
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/12 text-glow"><GraduationCap size={18} /></div>
              <div className="flex-1"><div className="font-semibold text-text-hi">{pr.nome}</div><div className="text-xs text-text-soft">{pr.corso}</div></div>
              {p.professorId === pr.id && <Check size={18} className="text-glow" />}
            </button>
          ))}
          <button onClick={() => set({ professorId: "" })} className={cn("rounded-xl2 border px-4 py-3 text-left text-sm transition", !p.professorId ? "border-glow/40 bg-glow/5 text-text-hi" : "border-line/10 text-text-soft")}>
            Non lo so / non è tra questi
          </button>
        </div>
      </div>
    );
  }

  if (stepKey === "libro") {
    return (
      <div>
        <h1 className="font-display text-3xl font-bold text-text-hi">Da quale manuale studi?</h1>
        <p className="mt-2 text-text-soft">Aggancia le pagine del tuo libro al piano. Non sei vincolato? Te ne consigliamo uno.</p>
        <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {BOOKS.map((b) => {
            const adotta = profBookId && profBookId === b.id;
            return (
            <button key={b.id} onClick={() => { if (b.upload) { fileRef.current?.click(); } else set({ bookId: b.id }); }}
              className={cn("relative flex items-center gap-3 rounded-xl2 border px-4 py-3 text-left transition", p.bookId === b.id ? "border-glow/50 bg-glow/10" : "border-line/10 bg-fill/[0.03] hover:border-brand-400/40")}>
              <div className="grid h-9 w-7 shrink-0 place-items-center rounded bg-brand-grad text-white">{b.upload ? <Upload size={14} /> : <Landmark size={14} />}</div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-text-hi">{b.nome}</div>
                <div className="truncate text-xs text-text-mute">{b.upload && p.bookId === "dispensa" && p.dispensaName ? p.dispensaName : b.sub}</div>
                {adotta && <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-glow/12 px-2 py-0.5 text-[0.6rem] font-bold text-glow">★ Consigliato per il corso del prof {profCognome}</div>}
              </div>
              {p.bookId === b.id && <Check size={16} className="shrink-0 text-glow" />}
            </button>
          );})}
        </div>
        <input ref={fileRef} type="file" className="hidden" onChange={(e) => onDispensaFile(e.target.files)} />
        {p.bookId === "dispensa" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex items-center gap-3 rounded-xl2 glass-brand p-4 text-sm">
            <FileText size={18} className="text-glow" />
            <span className="flex-1 text-text">{p.dispensaName ? <>File caricato: <b className="text-text-hi">{p.dispensaName}</b></> : "Carica il tuo materiale personale."}</span>
            <button onClick={() => fileRef.current?.click()} className="rounded-full border border-glow/40 px-3 py-1 text-xs font-semibold text-glow hover:bg-glow/10">{p.dispensaName ? "Cambia file" : "Aggiungi file"}</button>
          </motion.div>
        )}
        {p.bookId === "nolibro" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 rounded-xl2 glass-brand p-4 text-sm">
            <b className="text-glow">Consiglio dell'editore:</b> <span className="text-text">per il tuo profilo, parti dal <b>SuperCompendio di Diritto penale</b> di Neldiritto Editore — sintetico e completo, ideale nel tuo tempo a disposizione.</span>
          </motion.div>
        )}
      </div>
    );
  }

  /* Ultimo passo: Direxi spiega il feedback beta */
  if (stepKey === "beta")
    return (
      <div>
        <div className="flex items-start gap-4">
          <DirexiStar size={84} mood="cheer" />
          <div className="min-w-0 flex-1">
            <div className="eyebrow">Direxi ha un'ultima cosa da dirti</div>
            <h1 className="mt-1 font-display text-3xl font-bold text-text-hi">Sei una stella beta ✨</h1>
          </div>
        </div>
        <div className="relative mt-4 rounded-xl3 border border-line/12 bg-glow/[0.06] p-5">
          <p className="leading-relaxed text-text">
            «Sirio cresce con chi lo usa per primo: <b className="text-text-hi">tu</b>. Nella barra laterale troverai
            la pagina <b className="text-text-hi">Feedback beta</b>: lì puoi segnalarmi qualunque cosa, divisa per categoria —
            <Bug size={13} className="mx-1 inline text-rose-500" />bug,
            <Lightbulb size={13} className="mx-1 inline text-amber-500" />consigli,
            <Rocket size={13} className="mx-1 inline text-violet-500" />funzioni che vorresti, idee, cose inutili o preziose.
            Quando hai finito, <b className="text-text-hi">un solo pulsante</b> impacchetta tutto in un'email ordinata
            e la invia all'editore. Anche una parola storta per te è un regalo per noi.»
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm text-text-soft">
            <MessageSquareHeart size={15} className="text-glow" /> La trovi sempre in fondo al menu, sezione «Beta».
          </div>
        </div>
        <p className="mt-5 text-sm text-text-mute">Tutto pronto: al prossimo passo la tua costellazione prende forma.</p>
      </div>
    );

  return null;
}
