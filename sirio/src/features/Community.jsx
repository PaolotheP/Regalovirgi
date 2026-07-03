import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Lock, EyeOff, Eye, Flame, Plus, X, Users, GitBranch,
  ThumbsUp, ThumbsDown, Clock, MessageCircle, Circle, Timer, Video,
} from "lucide-react";
import { useStore, useSelectors } from "../lib/store.jsx";
import { Card, Button, Pill, Progress, toast, Bars, Counter } from "../components/ui.jsx";
import { PageHeader, Avatar, useComposer } from "./common.jsx";
import { FANTASY_PEOPLE } from "../data/contacts.js";
import { MENTORI, QA as QA_DATA, BANDI, TWIN, COHORT, COSTUDY_ROOMS, COSTUDY_PEOPLE } from "../data/misc.js";
import { currentSubject, currentSubjectId } from "../lib/subject.js";
import { cn } from "../lib/utils.js";

/* ------------------------------ CLASSIFICA ----------------------------- */
export function Classifica() {
  const { state, dispatch } = useStore();
  const sel = useSelectors();
  const nav = useNavigate();
  const comp = useComposer();
  const exercised = sel.hasExercised;
  const userScore = Math.min(980, 760 + Math.min(sel.xp, 220));

  const list = useMemo(() => {
    const base = FANTASY_PEOPLE.map((p, i) => ({ ...p, score: 950 - i * 11 - (i % 3) * 4 }));
    const withYou = [...base, { nome: "Tu", score: userScore, you: true, hue: 200 }].sort((a, b) => b.score - a.score);
    return withYou;
  }, [userScore]);
  const rank = list.findIndex((x) => x.you) + 1;
  const perc = Math.max(1, Math.round((1 - (rank - 1) / list.length) * 99));

  return (
    <div>
      <PageHeader eyebrow="Progressi e motivazione" title="La Classifica"
        sub="Dove sei rispetto agli altri candidati. Non un voto astratto, ma un percentile su una coorte."
        right={<label className="flex cursor-pointer items-center gap-2 text-sm text-text-soft">
          <input type="checkbox" checked={state.anon} onChange={(e) => dispatch({ type: "SET_ANON", value: e.target.checked })} />
          {state.anon ? <EyeOff size={15} /> : <Eye size={15} />} Anonimo
        </label>} />

      <div className="relative">
        <div className={cn(!exercised && "pointer-events-none blur-md select-none")}>
          <Card glass="glass-strong" className="p-6">
            <div className="text-center">
              <div className="font-display text-5xl font-extrabold text-gradient">{perc}°</div>
              <div className="text-sm text-text-mute">percentile · {rank}° posto · {userScore} punti</div>
              <p className="mx-auto mt-3 max-w-md text-sm text-text-soft">
                {perc >= 60 ? "Sei sopra la soglia stimata. Tieni il ritmo e rinforza le stelle che stanno perdendo luce." : "In crescita: concentra lo studio sugli argomenti con meno esercizi."}
              </p>
            </div>
            <Distribution perc={perc} />
            <div className="mt-6 space-y-2">
              {list.slice(0, 12).map((r, i) => (
                <div key={i} className={cn("flex items-center gap-3 rounded-xl2 border px-4 py-2.5", r.you ? "border-glow/50 bg-glow/10" : "border-line/8 bg-fill/[0.02]")}>
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-fill/8 font-display font-bold text-text-hi">{i + 1}</span>
                  {!r.you && <Avatar name={state.anon ? "?" : r.nome} hue={r.hue} size={30} />}
                  <span className="flex-1 font-semibold text-text-hi">{r.you ? "Tu" : state.anon ? `Candidato ${i + 1}` : r.nome}</span>
                  <span className="font-display font-bold text-glow tabular-nums">{r.score}</span>
                  {!r.you && !state.anon && <button onClick={() => comp.open({ name: r.nome, defaultText: `Ciao ${r.nome.split(" ")[0]}, prepariamo lo stesso esame di ${currentSubject().nome}: ci confrontiamo sul metodo?` })} className="text-text-mute hover:text-glow"><MessageCircle size={16} /></button>}
                </div>
              ))}
            </div>
          </Card>
        </div>
        {!exercised && (
          <div className="absolute inset-0 grid place-items-center">
            <div className="glass-strong rounded-xl3 p-8 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/15 text-glow"><Lock size={26} /></div>
              <h3 className="mt-3 font-display text-lg font-bold text-text-hi">Svolgi un'esercitazione per vedere la tua posizione</h3>
              <p className="mx-auto mt-1 max-w-xs text-sm text-text-soft">La classifica aggrega quiz, vero/falso e domande aperte.</p>
              <Button className="mt-4" onClick={() => nav("/app/quiz")}>Svolgi esercitazione</Button>
            </div>
          </div>
        )}
      </div>
      {comp.node}
    </div>
  );
}

function Distribution({ perc }) {
  const bars = [3, 6, 11, 18, 27, 34, 30, 24, 16, 9, 5, 2];
  const youIdx = Math.min(bars.length - 1, Math.round((perc / 100) * (bars.length - 1)));
  return (
    <div className="mt-6 flex items-end justify-center gap-1.5" style={{ height: 120 }}>
      {bars.map((h, i) => (
        <div key={i} className="relative flex-1 rounded-t" style={{ height: h * 3, background: i === youIdx ? "linear-gradient(#5cc6ff,#2f7bff)" : "rgb(var(--c-glow) / 0.25)" }}>
          {i === youIdx && <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[0.6rem] font-bold text-glow">TU</span>}
        </div>
      ))}
    </div>
  );
}

/* -------------------------------- DIARIO ------------------------------- */
export function Diario() {
  const { state, dispatch } = useStore();
  const sel = useSelectors();
  const [txt, setTxt] = useState("");
  const cells = useMemo(() => {
    const days = Object.entries(state.study.days);
    const map = Object.fromEntries(days);
    const arr = [];
    for (let i = 90; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const iso = d.toISOString().slice(0, 10);
      const m = map[iso] || 0;
      arr.push(m);
    }
    return arr;
  }, [state.study.days]);

  const week = useMemo(() => {
    const map = state.study.days || {};
    const giorni = ["dom", "lun", "mar", "mer", "gio", "ven", "sab"];
    const out = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const iso = d.toISOString().slice(0, 10);
      out.push({ label: giorni[d.getDay()], value: map[iso] || 0, tone: i === 0 ? "warm" : "brand" });
    }
    return out;
  }, [state.study.days]);
  const weekTotal = week.reduce((a, b) => a + b.value, 0);

  return (
    <div>
      <PageHeader eyebrow="Progressi e motivazione" title="Diario del ripasso" sub="La costanza resa visibile: cosa hai studiato e quando." />
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <Card className="p-5">
          <div className="mb-3 flex items-center justify-between"><h3 className="font-display font-bold text-text-hi">Intensità di studio</h3><span className="text-xs text-text-mute">ultime 13 settimane</span></div>
          <div className="grid grid-flow-col grid-rows-7 gap-1">
            {cells.map((m, i) => {
              const lvl = m === 0 ? 0 : m < 30 ? 1 : m < 60 ? 2 : m < 120 ? 3 : 4;
              const bg = ["rgb(var(--c-fill) / 0.07)", "rgb(var(--c-glow) / 0.3)", "rgb(var(--c-glow) / 0.5)", "rgb(var(--c-glow) / 0.75)", "rgb(var(--c-glow))"][lvl];
              return <div key={i} className="aspect-square rounded-sm" style={{ background: bg }} title={`${m}′`} />;
            })}
          </div>
        </Card>
        <Card className="flex flex-col items-center justify-center p-5 text-center">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-500/15 text-accent-500"><Flame size={24} /></div>
          <div className="mt-3 font-display text-5xl font-extrabold text-gradient-warm"><Counter value={sel.streak} /></div>
          <div className="text-sm text-text-mute">giorni di fila</div>
        </Card>
      </div>

      <Card hover className="mt-4 p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-display font-bold text-text-hi">Minuti di studio · ultimi 7 giorni</h3>
          <span className="text-xs text-text-mute"><Counter value={weekTotal} />′ in settimana</span>
        </div>
        <Bars data={week} height={130} />
      </Card>

      <Card className="mt-4 p-5">
        <h3 className="font-display font-bold text-text-hi">Ultime sessioni</h3>
        {state.study.sessions.length === 0 ? <p className="mt-2 text-sm text-text-mute">Nessuna sessione ancora. Inizia a studiare un argomento.</p> : (
          <div className="mt-2 divide-y divide-line/8">
            {state.study.sessions.slice(0, 8).map((s, i) => (
              <div key={i} className="flex items-center gap-3 py-2.5 text-sm">
                <Clock size={15} className="text-text-mute" />
                <span className="flex-1 text-text">{s.label}</span>
                <span className="font-semibold text-glow tabular-nums">{s.minutes}′</span>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card className="mt-4 p-5">
        <h3 className="font-display font-bold text-text-hi">Argomenti da rivedere</h3>
        <div className="mt-3 flex gap-2">
          <input value={txt} onChange={(e) => setTxt(e.target.value)} placeholder="Es. dolo eventuale, causalità omissiva…"
            className="flex-1 rounded-xl bg-fill/[0.04] border border-line/10 px-4 py-2.5 text-text-hi placeholder:text-text-mute outline-none focus:border-brand-400" />
          <Button onClick={() => { if (txt.trim()) { dispatch({ type: "ADD_TODO", text: txt.trim() }); setTxt(""); } }}><Plus size={16} /> Aggiungi</Button>
        </div>
        {state.todo.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {state.todo.map((t, i) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full border border-line/10 bg-fill/5 px-3 py-1.5 text-sm">
                {t}<button onClick={() => dispatch({ type: "REMOVE_TODO", index: i })} className="text-text-mute hover:text-rose-400"><X size={14} /></button>
              </span>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

/* -------------------------------- COORTE ------------------------------- */
export function Coorte() {
  const { state, dispatch } = useStore();
  return (
    <div>
      <PageHeader eyebrow="Community" title="Gruppo di coorte" sub="Chi prepara il tuo stesso esame per la stessa sessione, con avanzamento condiviso." />
      <Card glass="glass-brand" className="p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-grad text-white"><Users size={26} /></div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold text-text-hi">{COHORT.nome}</h3>
            <p className="text-sm text-text-soft">{COHORT.membri} candidati · avanzamento medio {COHORT.avanzamentoMedio}%</p>
          </div>
          {state.cohortJoined ? <Pill tone="ok">Sei nel gruppo</Pill> : <Button onClick={() => { dispatch({ type: "JOIN_COHORT" }); toast("Sei entrato nel gruppo di coorte"); }}>Entra nel gruppo</Button>}
        </div>
        <Progress value={COHORT.avanzamentoMedio} className="mt-4" />
      </Card>
      <h3 className="mb-3 mt-6 font-display text-lg font-bold text-text-hi">Attività del gruppo</h3>
      <div className="space-y-2">
        {COHORT.attivita.map((a, i) => (
          <Card key={i} className="flex items-center gap-3 p-4">
            <Avatar name={a.chi} hue={a.hue} size={36} />
            <div className="flex-1 text-sm"><b className="text-text-hi">{a.chi}</b> <span className="text-text-soft">{a.cosa}</span></div>
            <span className="text-xs text-text-mute">{a.quando}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- CO-STUDY ------------------------------ */
export function Costudy() {
  const [room, setRoom] = useState(null);
  const [secs, setSecs] = useState(0);
  const [running, setRunning] = useState(false);
  const [myLink, setMyLink] = useState("");
  useEffect(() => { if (!running) return; const id = setInterval(() => setSecs((s) => s + 1), 1000); return () => clearInterval(id); }, [running]);

  function createRoom() {
    const code = Array.from({ length: 8 }, () => "abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 36)]).join("");
    setMyLink(`https://meet.jit.si/Sirio-${currentSubjectId() === "tributario" ? "DirittoTributario" : "DirittoPenale"}-${code}`);
  }
  function copyLink() { navigator.clipboard?.writeText(myLink).then(() => toast("Link copiato")); }

  if (room) {
    const present = COSTUDY_PEOPLE.slice(0, room.presenti % COSTUDY_PEOPLE.length || 6);
    return (
      <div>
        <button onClick={() => { setRoom(null); setRunning(false); setSecs(0); }} className="mb-4 text-sm text-text-soft hover:text-glow">← Tutte le stanze</button>
        <Card glass="glass-strong" className="p-8 text-center">
          <Pill tone="glow" className="mx-auto"><Users size={13} /> {room.presenti} presenti</Pill>
          <h2 className="mt-4 font-display text-2xl font-bold text-text-hi">{room.nome}</h2>
          <p className="text-text-soft">{room.desc}</p>
          <div className="my-6 font-display text-6xl font-extrabold tabular-nums text-gradient">{String(Math.floor(secs / 60)).padStart(2, "0")}:{String(secs % 60).padStart(2, "0")}</div>
          <Button size="lg" onClick={() => setRunning((r) => !r)}><Timer size={18} /> {running ? "Pausa" : "Studia con noi"}</Button>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {present.map((n, i) => (
              <div key={i} className="flex items-center gap-2 rounded-full glass px-3 py-1.5 text-sm">
                <Circle size={8} className="fill-emerald-400 text-emerald-400" /> {n} <span className="text-xs text-text-mute">sta studiando</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <PageHeader eyebrow="Community" title="Stanze di co-studio" sub="Studia insieme agli altri in silenzio (body doubling): la presenza degli altri tiene alta la concentrazione." />

      {/* Crea la tua stanza con videochiamata reale (Jitsi Meet, gratis) */}
      <Card glass="glass-brand" className="mb-6 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-grad text-white"><Video size={26} /></div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold text-text-hi">Crea la tua stanza</h3>
            <p className="text-sm text-text-soft">Genera un link a una videochiamata reale e invitalo a chi vuoi: studiate insieme in video.</p>
          </div>
          {!myLink && <Button onClick={createRoom}><Video size={17} /> Crea stanza</Button>}
        </div>
        {myLink && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
            <div className="flex flex-wrap items-center gap-2 rounded-xl2 border border-line/10 bg-fill/[0.03] p-2 pl-4">
              <span className="min-w-0 flex-1 truncate text-sm text-glow">{myLink}</span>
              <Button size="sm" variant="ghost" onClick={copyLink}>Copia link</Button>
              <Button as="a" size="sm" href={`https://wa.me/?text=${encodeURIComponent(`Studiamo insieme ${currentSubject().nome} in videochiamata: ` + myLink)}`} target="_blank" rel="noreferrer">
                <MessageCircle size={15} /> Condividi
              </Button>
              <Button as="a" size="sm" href={myLink} target="_blank" rel="noreferrer"><Video size={15} /> Entra</Button>
            </div>
            <p className="mt-2 text-xs text-text-mute">Videochiamata gratuita su Jitsi Meet: chi apre il link entra nella stessa stanza, senza registrazione.</p>
          </motion.div>
        )}
      </Card>

      <h3 className="mb-3 font-display text-lg font-bold text-text-hi">Stanze pubbliche</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {COSTUDY_ROOMS.map((r) => (
          <Card key={r.id} hover onClick={() => setRoom(r)} className="p-5">
            <div className="flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: `hsla(${r.hue},80%,55%,0.15)`, color: `light-dark(hsl(${r.hue} 75% 36%), hsl(${r.hue} 90% 70%))` }}><Users size={20} /></div>
              <Pill tone="ok"><Circle size={8} className="fill-emerald-400 text-emerald-400" /> {r.presenti}</Pill>
            </div>
            <h3 className="mt-3 font-display font-bold text-text-hi">{r.nome}</h3>
            <p className="text-sm text-text-soft">{r.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- GEMELLO ------------------------------- */
export function Gemello() {
  return (
    <div>
      <PageHeader eyebrow="Progressi e motivazione" title="Il Gemello del Promosso" sub="La traiettoria reale di chi ha superato lo stesso esame partendo dal tuo livello, con il tuo tempo." />
      <Card glass="glass-brand" className="p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-grad text-white"><GitBranch size={26} /></div>
          <div className="flex-1"><h3 className="font-display text-xl font-bold text-text-hi">{TWIN.nome}</h3><p className="text-sm text-text-soft">{TWIN.profilo}</p></div>
          <Pill tone="ok">{TWIN.esito}</Pill>
        </div>
      </Card>
      <div className="relative mt-6 ml-3 border-l border-line/10 pl-6">
        {TWIN.tappe.map((t, i) => (
          <div key={i} className="relative pb-5">
            <div className="absolute -left-[31px] grid h-6 w-6 place-items-center rounded-full border-2 border-glow bg-bg-2 text-glow text-xs font-bold">{i + 1}</div>
            <div className="text-xs font-semibold text-glow">{t.sett}</div>
            <div className="font-semibold text-text-hi">{t.dove}</div>
            <p className="text-sm text-text-soft">{t.nota}</p>
          </div>
        ))}
      </div>
      <Card className="mt-4 p-5">
        <h3 className="font-display font-bold text-text-hi">Errori tipici da evitare</h3>
        <div className="mt-2 flex flex-wrap gap-2">{TWIN.erroriTipici.map((e) => <Pill key={e} tone="warn">{e}</Pill>)}</div>
      </Card>
    </div>
  );
}

/* -------------------------------- MENTORI ------------------------------ */
export function Mentori() {
  const comp = useComposer();
  return (
    <div>
      <PageHeader eyebrow="Community" title="Mentore ex studente" sub="Un confronto con chi quell'esame l'ha già superato: metodo, tempi, esperienza diretta." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MENTORI.map((m, i) => (
          <Card key={i} className="flex flex-col p-5">
            <Avatar name={m.real ? m.nome : "?"} hue={m.hue} size={64} />
            <h3 className="mt-3 font-display text-lg font-bold text-text-hi">{m.nome}</h3>
            <p className="text-sm text-text-soft">{m.ruolo}</p>
            <div className="mt-2 flex items-center gap-1 text-sm text-star">
              {"★".repeat(Math.round(m.rating))}<span className="text-text-mute">{m.rating} · {m.seguiti} seguiti</span>
            </div>
            <Button variant="ghost" size="sm" className="mt-4"
              onClick={() => comp.open({ name: m.nome, contactId: m.contact, defaultText: m.msg })}>
              <MessageCircle size={15} /> Invia messaggio
            </Button>
          </Card>
        ))}
      </div>
      {comp.node}
    </div>
  );
}

/* --------------------------------- QA ---------------------------------- */
export function QA() {
  const { state, dispatch } = useStore();
  return (
    <div>
      <PageHeader eyebrow="Community" title="Domande & Risposte"
        sub={currentSubjectId() === "tributario" ? 'Sull\'esame di Diritto tributario — Università LUM "Giuseppe Degennaro". Vota le risposte più utili.' : 'Sull\'esame di Diritto penale — Università di Bari "Aldo Moro". Vota le risposte più utili.'} />
      <div className="space-y-4">
        {QA_DATA.map((q, i) => {
          const v = state.votes[i] || 0;
          return (
            <Card key={i} className="p-5">
              <div className="flex items-start gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-500/15 font-display font-bold text-glow">Q</div>
                <div className="flex-1">
                  <Pill tone="soft" className="mb-2">{q.tag}</Pill>
                  <div className="font-semibold text-text-hi">{q.q}</div>
                </div>
              </div>
              <p className="mt-3 pl-11 text-sm text-text">{q.a}</p>
              <div className="mt-3 flex items-center gap-3 pl-11">
                <button onClick={() => dispatch({ type: "VOTE", id: i, value: 1 })}
                  className={cn("inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold transition", v === 1 ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-500" : "border-line/10 text-text-soft hover:text-text-hi")}>
                  <ThumbsUp size={14} /> Utile <b>{q.up + (v === 1 ? 1 : 0)}</b>
                </button>
                <button onClick={() => dispatch({ type: "VOTE", id: i, value: -1 })}
                  className={cn("inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold transition", v === -1 ? "border-rose-400/40 bg-rose-400/10 text-rose-500" : "border-line/10 text-text-soft hover:text-text-hi")}>
                  <ThumbsDown size={14} /> <b>{q.down + (v === -1 ? 1 : 0)}</b>
                </button>
                <span className="ml-auto text-xs text-text-mute">{q.who}</span>
              </div>
            </Card>
          );
        })}
      </div>
      <p className="mt-6 text-center text-xs text-text-mute">{currentSubjectId() === "tributario" ? "Contesto: insegnamento di Diritto tributario, Facoltà di Economia dell'Università LUM. Le risposte raccolgono l'esperienza di studenti; nessuna frase è attribuita a docenti reali." : "Contesto: insegnamento di Diritto penale, Dipartimento di Giurisprudenza dell'Università di Bari. Le risposte raccolgono l'esperienza di studenti; nessuna frase è attribuita a docenti reali."}</p>
    </div>
  );
}

/* -------------------------------- BANDI -------------------------------- */
export function Bandi() {
  return (
    <div>
      <PageHeader eyebrow="Carriera" title="Bandi & Concorsi" sub="Le scadenze che contano nell'area giuridica. Dati reali (giu. 2026) da fonti ufficiali." />
      <div className="space-y-4">
        {BANDI.map((b, i) => (
          <Card key={i} className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <Pill tone={b.stato === "open" ? "ok" : "warn"}>{b.statoLabel}</Pill>
                <h3 className="mt-2 font-display text-xl font-bold text-text-hi">{b.nome}</h3>
                <p className="text-sm text-text-mute">{b.ente}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[["Posti", b.posti], ["Prove", b.prove], ["Scadenza", b.scadenza]].map(([l, v]) => (
                <div key={l} className="rounded-xl border border-line/8 bg-fill/[0.02] p-3 text-center">
                  <div className="font-display text-sm font-bold text-glow">{v}</div>
                  <div className="text-[0.65rem] uppercase tracking-wider text-text-mute">{l}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-text-soft"><b className="text-glow">Requisiti:</b> {b.titolo}. {b.note}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {b.timeline.map((p, k) => (
                <div key={k} className="flex-1 rounded-lg border border-line/8 bg-fill/[0.02] px-3 py-2 text-center">
                  <div className="text-xs font-bold text-glow">{p[0]}</div>
                  <div className="text-xs text-text-soft">{p[1]}</div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
