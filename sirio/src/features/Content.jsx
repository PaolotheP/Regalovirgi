import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Mic, Video as VideoIcon, Play, Pause, Star, Zap, Upload as UploadIcon, FileText, Trash2, Download } from "lucide-react";
import { TOPICS, getTopic } from "../data/curriculum.js";
import { useStore, saveUploadBlob, getUploadBlob, deleteUploadBlob } from "../lib/store.jsx";
import { Card, Button, Pill, toast, Skeleton } from "../components/ui.jsx";
import { PageHeader } from "./common.jsx";
import { GLOSSARIO, RIPASSO } from "../data/misc.js";
import { fmtTime, uid } from "../lib/utils.js";
import { cn } from "../lib/utils.js";

/* ------------------------------- Player -------------------------------- */
function Player({ kind }) {
  const [sp] = useSearchParams();
  const nav = useNavigate();
  const tid = sp.get("t");
  const list = TOPICS.filter((t) => t.media?.[kind]);
  const topic = tid ? getTopic(tid) : null;
  const media = topic?.media?.[kind];

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);
  const [rate, setRate] = useState(1);
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 1400); return () => clearTimeout(t); }, []);
  const rates = [1, 1.25, 1.5, 2, 0.75];

  useEffect(() => { setPlaying(false); setCur(0); }, [tid]);

  if (!topic || !media) {
    return (
      <div>
        <PageHeader eyebrow="Contenuti" title={kind === "video" ? "Video lezioni" : "Podcast di studio"}
          sub={kind === "video" ? "Lezioni brevi, agganciate alle pagine del libro." : "I contenuti di studio da ascoltare, mentre fai altro."} />
        {list.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-text-soft">Per questa materia i contenuti {kind === "video" ? "video" : "audio"} sono in preparazione presso l'editore.</p>
            <Button className="mt-4" onClick={() => nav("/app/argomenti")}>Vai agli argomenti</Button>
          </Card>
        ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <Card key={t.id} hover onClick={() => nav(`/app/${kind}?t=${t.id}`)} className="p-5">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/12 text-glow">{kind === "video" ? <VideoIcon size={20} /> : <Mic size={20} />}</div>
              <h3 className="mt-3 font-display font-bold text-text-hi">{t.media[kind].title}</h3>
              <p className="mt-1 text-sm text-text-soft">{t.title}</p>
              <Pill tone="soft" className="mt-3">{t.media[kind].chapters.length} capitoli</Pill>
            </Card>
          ))}
        </div>
        )}
      </div>
    );
  }

  const toggle = () => { const a = audioRef.current; if (!a) return; if (a.paused) { a.play(); setPlaying(true); } else { a.pause(); setPlaying(false); } };
  const seekChapter = (sec) => { const a = audioRef.current; if (!a) return; a.currentTime = Math.min(sec, (a.duration || 999) - 0.1); if (a.paused) { a.play(); setPlaying(true); } };
  const cycleRate = () => { const i = (rates.indexOf(rate) + 1) % rates.length; setRate(rates[i]); if (audioRef.current) audioRef.current.playbackRate = rates[i]; };

  return (
    <div className="mx-auto max-w-2xl">
      <button onClick={() => nav(`/app/${kind}`)} className="mb-4 text-sm text-text-soft hover:text-glow">← Tutti i {kind === "video" ? "video" : "podcast"}</button>
      <Card glass="glass-strong" className="overflow-hidden p-0">
        <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-navy-800 to-ink-950">
          {!ready && <Skeleton className="absolute inset-0 rounded-none" />}
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-grad text-white shadow-glow">{kind === "video" ? <VideoIcon size={30} /> : <Mic size={30} />}</div>
          <div className="absolute right-4 top-4 font-display text-2xl font-extrabold text-glow">Sirio</div>
          <div className="absolute bottom-4 left-5 font-display text-lg font-bold text-white">{media.title}</div>
        </div>
        <div className="p-5">
          <div className="text-xs text-text-mute">{kind === "video" ? "Video lezione" : "Audio di studio"} · {topic.title}</div>
          <audio ref={audioRef} preload="metadata" src="/demo-audio.wav"
            onTimeUpdate={(e) => setCur(e.target.currentTime)} onLoadedMetadata={(e) => { setDur(e.target.duration); setReady(true); }}
            onCanPlay={() => setReady(true)} onError={() => setReady(true)}
            onEnded={() => setPlaying(false)} />
          <div className="mt-3 flex items-center gap-3">
            <button onClick={toggle} className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-grad text-white shadow-glow">{playing ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}</button>
            <div className="flex-1">
              <div className="h-2 cursor-pointer rounded-full bg-fill/10" onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); const a = audioRef.current; if (a && a.duration) a.currentTime = ((e.clientX - r.left) / r.width) * a.duration; }}>
                <div className="h-full rounded-full bg-brand-grad" style={{ width: `${dur ? (cur / dur) * 100 : 0}%` }} />
              </div>
            </div>
            <span className="w-20 text-right text-xs tabular-nums text-text-mute">{fmtTime(cur)} / {fmtTime(dur)}</span>
            <button onClick={cycleRate} className="rounded-lg border border-line/10 px-2.5 py-1 text-xs font-bold text-text-soft">{rate}×</button>
          </div>
          <div className="mt-4 space-y-1">
            {media.chapters.map((c, i) => (
              <button key={i} onClick={() => seekChapter(c[1])} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-brand-500/10">
                <span className="grid h-6 w-6 place-items-center rounded bg-fill/8 text-xs font-bold">{i + 1}</span>
                <span className="flex-1 text-text">{c[0]}</span>
                <span className="text-xs tabular-nums text-text-mute">{fmtTime(c[1])}</span>
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-mute">Player dimostrativo su una traccia audio di esempio: capitoli, avanzamento e velocità pienamente funzionanti.</p>
        </div>
      </Card>
    </div>
  );
}

export function Podcast() { return <Player kind="podcast" />; }
export function Video() { return <Player kind="video" />; }

/* -------------------------------- Mappe -------------------------------- */
export function Mappe() {
  const [sp] = useSearchParams();
  const nav = useNavigate();
  const tid = sp.get("t");
  const list = TOPICS.filter((t) => t.media?.mappa);
  const topic = tid ? getTopic(tid) : list[0];
  return (
    <div>
      <PageHeader eyebrow="Sintesi e memoria" title="Mappe concettuali" sub="Prima il quadro d'insieme, poi il dettaglio." />
      {topic && <Card className="mb-4 overflow-x-auto p-4"><MapSVG topic={topic} /></Card>}
      <div className="flex flex-wrap gap-2">
        {list.map((t) => (
          <button key={t.id} onClick={() => nav(`/app/mappe?t=${t.id}`)}
            className={cn("rounded-full border px-3.5 py-1.5 text-sm font-medium transition", topic?.id === t.id ? "border-glow/50 bg-glow/10 text-glow" : "border-line/10 text-text-soft hover:border-brand-400/40")}>
            {t.title}
          </button>
        ))}
      </div>
    </div>
  );
}

function MapSVG({ topic }) {
  const leaves = (topic.comparativa ? topic.comparativa.righe.map((r) => r.profilo) : topic.sintesi.map((s) => s.split(":")[0].split("(")[0])).slice(0, 5);
  const W = 720, H = 300, cx = W / 2, cy = H / 2;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[560px]">
      {leaves.map((l, i) => {
        const ang = (i / leaves.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(ang) * 240, y = cy + Math.sin(ang) * 105;
        return (
          <g key={i}>
            <path d={`M${cx} ${cy} Q ${(cx + x) / 2} ${(cy + y) / 2 - 10} ${x} ${y}`} stroke="rgb(var(--c-glow) / 0.4)" strokeWidth="1.5" fill="none" />
            <g transform={`translate(${x - 78} ${y - 22})`}>
              <rect width="156" height="44" rx="12" fill="rgb(var(--c-fill) / 0.05)" stroke="rgb(var(--c-line) / 0.18)" />
              <foreignObject width="156" height="44"><div xmlns="http://www.w3.org/1999/xhtml" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "44px", padding: "0 8px", color: "rgb(var(--c-text))", fontSize: "12px", fontFamily: "Inter", textAlign: "center", lineHeight: 1.1 }}>{l}</div></foreignObject>
            </g>
          </g>
        );
      })}
      <g transform={`translate(${cx - 90} ${cy - 32})`}>
        <rect width="180" height="64" rx="16" fill="rgba(47,123,255,0.18)" stroke="rgb(var(--c-glow) / 0.5)" strokeWidth="1.5" />
        <foreignObject width="180" height="64"><div xmlns="http://www.w3.org/1999/xhtml" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "64px", padding: "0 10px", color: "rgb(var(--c-text-hi))", fontSize: "14px", fontWeight: 700, fontFamily: "Plus Jakarta Sans", textAlign: "center", lineHeight: 1.15 }}>{topic.title}</div></foreignObject>
      </g>
    </svg>
  );
}

/* -------------------------------- Punti -------------------------------- */
export function Punti() {
  const list = TOPICS.filter((t) => t.sintesi?.length);
  return (
    <div>
      <PageHeader eyebrow="Sintesi e memoria" title="Punti chiave in evidenza" sub="L'essenziale di ogni argomento, con il bollino della redazione." />
      <div className="space-y-4">
        {list.map((t) => (
          <Card key={t.id} className="p-5">
            <div className="mb-3 flex items-center gap-2">
              <Star size={16} className="text-glow" />
              <h3 className="font-display font-bold text-text-hi">{t.title}</h3>
              <Pill tone="glow" className="ml-auto">Certificato</Pill>
            </div>
            <ul className="space-y-2">
              {t.sintesi.map((s, i) => (
                <li key={i} className="flex gap-2.5 text-sm"><span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-glow" /><span className="text-text">{s}</span></li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- Ripasso ------------------------------- */
export function Ripasso() {
  return (
    <div>
      <PageHeader eyebrow="Ripasso" title="Ripasso last minute" sub={RIPASSO.intro} />
      <div className="space-y-3">
        {RIPASSO.voci.map((v, i) => (
          <Card key={i} className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-text-hi"><span className="mr-2 inline-grid h-6 w-6 place-items-center rounded-lg bg-brand-grad text-xs text-white">{i + 1}</span>{v.t}</h3>
              <Pill tone="soft"><Zap size={12} /> {v.min} min</Pill>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text">{v.testo}</p>
          </Card>
        ))}
      </div>
      <h2 className="mb-3 mt-8 font-display text-lg font-bold text-text-hi">Glossario</h2>
      <Card className="p-5">
        <dl className="divide-y divide-line/8">
          {GLOSSARIO.map(([term, def], i) => (
            <div key={i} className="py-3">
              <dt className="font-display font-bold text-glow">{term}</dt>
              <dd className="mt-0.5 text-sm text-text-soft">{def}</dd>
            </div>
          ))}
        </dl>
      </Card>
    </div>
  );
}

/* -------------------------------- Upload ------------------------------- */
export function Upload() {
  const { state, dispatch } = useStore();
  const inputRef = useRef(null);

  async function onFiles(files) {
    for (const f of Array.from(files)) {
      const id = uid();
      try { await saveUploadBlob(id, f); dispatch({ type: "ADD_UPLOAD", meta: { id, name: f.name, size: f.size, type: f.type } }); }
      catch { toast("File troppo grande per la memoria locale"); }
    }
    toast("File aggiunti al tuo spazio");
  }
  async function open(u) {
    const blob = await getUploadBlob(u.id);
    if (!blob) return toast("File non trovato");
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  }
  async function remove(u) { await deleteUploadBlob(u.id); dispatch({ type: "REMOVE_UPLOAD", id: u.id }); }

  return (
    <div>
      <PageHeader eyebrow="Il tuo spazio" title="I miei file" sub="Aggiungi i tuoi materiali — slide del prof, letture, case study — al tuo spazio di studio. Restano salvati sul dispositivo." />
      <Card className="border-dashed p-8 text-center" onClick={() => inputRef.current?.click()} hover>
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/12 text-glow"><UploadIcon size={26} /></div>
        <h3 className="mt-3 font-display font-bold text-text-hi">Aggiungi file</h3>
        <p className="mt-1 text-sm text-text-soft">PPTX, PDF, immagini, appunti… salvati localmente nel browser.</p>
        <input ref={inputRef} type="file" multiple className="hidden" onChange={(e) => onFiles(e.target.files)} />
      </Card>
      {state.uploads.length > 0 && (
        <div className="mt-4 space-y-2">
          {state.uploads.map((u) => (
            <Card key={u.id} className="flex items-center gap-3 p-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/12 text-glow"><FileText size={18} /></div>
              <div className="min-w-0 flex-1"><div className="truncate font-semibold text-text-hi">{u.name}</div><div className="text-xs text-text-mute">{(u.size / 1024).toFixed(0)} KB</div></div>
              <Button size="sm" variant="ghost" onClick={() => open(u)}><Download size={15} /> Apri</Button>
              <button onClick={() => remove(u)} className="text-text-mute hover:text-rose-400"><Trash2 size={17} /></button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
