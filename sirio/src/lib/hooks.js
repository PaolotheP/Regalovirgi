import { useCallback, useEffect, useRef, useState } from "react";

/* --------------------- Tocco prolungato (peek) -------------------------- */
export function useLongPress(onLongPress, { ms = 450 } = {}) {
  const timer = useRef(null);
  const fired = useRef(false);
  const start = useCallback((e) => {
    fired.current = false;
    timer.current = setTimeout(() => { fired.current = true; onLongPress(e); }, ms);
  }, [onLongPress, ms]);
  const clear = useCallback(() => clearTimeout(timer.current), []);
  return {
    onPointerDown: start,
    onPointerUp: clear,
    onPointerLeave: clear,
    onPointerCancel: clear,
    // permette al chiamante di distinguere click da long-press
    didLongPress: () => fired.current,
  };
}

/* ------------------ Lettura ad alta voce (audio-first) ------------------ */
/* speechSynthesis è on-device e gratuito: nessuna AI, nessuna API. */
function pickItalianVoice() {
  try {
    const vs = window.speechSynthesis?.getVoices?.() || [];
    return vs.find((v) => v.lang?.startsWith("it")) || null;
  } catch { return null; }
}
export function speak(text, { rate = 1 } = {}) {
  try {
    if (typeof window === "undefined" || !window.speechSynthesis) return false;
    const plain = String(text).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (!plain) return false;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(plain);
    u.lang = "it-IT"; u.rate = rate;
    const v = pickItalianVoice();
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
    return true;
  } catch { return false; }
}
export function stopSpeaking() {
  try { window.speechSynthesis?.cancel(); } catch {}
}
export function useSpeaker() {
  const [speaking, setSpeaking] = useState(false);
  useEffect(() => () => stopSpeaking(), []);
  const toggle = useCallback((text) => {
    if (speaking) { stopSpeaking(); setSpeaking(false); return; }
    if (speak(text)) {
      setSpeaking(true);
      const check = setInterval(() => {
        try {
          if (!window.speechSynthesis.speaking) { setSpeaking(false); clearInterval(check); }
        } catch { clearInterval(check); }
      }, 400);
    }
  }, [speaking]);
  return { speaking, toggle };
}

/* -------------------- Navigazione vocale (comandi) ---------------------- */
/* Web Speech API del browser: on-device/gratuita dove disponibile. */
export const VOICE_COMMANDS = [
  { match: ["cruscotto", "dashboard", "casa", "home"], to: "/app" },
  { match: ["piano"], to: "/app/piano" },
  { match: ["cielo", "costellazione", "stelle"], to: "/app/heatmap" },
  { match: ["argomenti"], to: "/app/argomenti" },
  { match: ["quiz", "risposta multipla"], to: "/app/quiz" },
  { match: ["vero falso", "vero o falso"], to: "/app/verofalso" },
  { match: ["domande aperte", "aperte"], to: "/app/aperta" },
  { match: ["schedario", "errori", "leitner"], to: "/app/leitner" },
  { match: ["flashcard", "flash card"], to: "/app/flashcards" },
  { match: ["podcast"], to: "/app/podcast" },
  { match: ["video"], to: "/app/video" },
  { match: ["mappe"], to: "/app/mappe" },
  { match: ["ripasso"], to: "/app/ripasso" },
  { match: ["classifica"], to: "/app/classifica" },
  { match: ["diario"], to: "/app/diario" },
  { match: ["feedback", "segnalazione"], to: "/app/feedback" },
];
export function voiceSupported() {
  return typeof window !== "undefined" && !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}
export function useVoiceNav(onNavigate, onStatus) {
  const recRef = useRef(null);
  const [listening, setListening] = useState(false);
  const stop = useCallback(() => {
    try { recRef.current?.stop(); } catch {}
    setListening(false);
  }, []);
  const start = useCallback(() => {
    if (!voiceSupported()) { onStatus?.("Il tuo browser non supporta i comandi vocali."); return; }
    try {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      const rec = new SR();
      rec.lang = "it-IT"; rec.interimResults = false; rec.maxAlternatives = 3;
      rec.onresult = (e) => {
        const said = Array.from(e.results[0]).map((r) => r.transcript.toLowerCase()).join(" ");
        const cmd = VOICE_COMMANDS.find((c) => c.match.some((m) => said.includes(m)));
        if (said.includes("indietro")) { onNavigate(-1); onStatus?.("Torno indietro"); }
        else if (cmd) { onNavigate(cmd.to); onStatus?.(`Apro: ${cmd.match[0]}`); }
        else onStatus?.(`Non ho capito «${said}». Prova: "piano", "cielo", "quiz"…`);
      };
      rec.onend = () => setListening(false);
      rec.onerror = () => { setListening(false); onStatus?.("Microfono non disponibile."); };
      recRef.current = rec;
      rec.start();
      setListening(true);
      onStatus?.("Ti ascolto… di' ad esempio «apri il piano»");
    } catch { onStatus?.("Comandi vocali non disponibili."); }
  }, [onNavigate, onStatus]);
  useEffect(() => stop, [stop]);
  return { listening, start, stop, supported: voiceSupported() };
}
