import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { PLANS } from "../data/plans.js";
import { useStore } from "../lib/store.jsx";
import Background from "../components/Background.jsx";
import { Logo } from "../components/Logo.jsx";
import { Button, Pill, toast } from "../components/ui.jsx";
import { cn } from "../lib/utils.js";

export default function Pricing() {
  const [sp] = useSearchParams();
  const nav = useNavigate();
  const { state, dispatch } = useStore();
  const fromOnboarding = sp.get("from") === "onboarding";

  function choose(id) {
    dispatch({ type: "SET_TIER", tier: id });
    if (id === "free") { toast("Piano Free attivo"); nav("/app"); }
    else { toast("Nella beta i pagamenti non sono attivi: continui con il piano Free."); nav("/app"); }
  }

  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => nav(-1)} aria-label="Torna indietro"
              className="grid h-10 w-10 place-items-center rounded-xl glass text-text-soft transition hover:text-glow hover:border-glow/40">
              <ArrowLeft size={18} />
            </button>
            <Logo />
          </div>
          {state.onboarded && <Button variant="ghost" size="sm" onClick={() => nav("/app")}>Vai alla piattaforma <ArrowRight size={15} /></Button>}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <Pill tone="glow" className="mx-auto"><Sparkles size={13} /> Scegli come studiare</Pill>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-text-hi sm:text-5xl">Un piano per ogni ambizione</h1>
          <p className="mt-3 text-text-soft">
            {fromOnboarding ? "Il tuo piano di studi è pronto. Scegli come vuoi allenarti — puoi iniziare gratis." : "Tutto il corso è gratuito. I piani superiori sbloccano le funzioni basate su AI."}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div key={plan.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className={cn("relative flex flex-col rounded-xl3 p-6", plan.highlight ? "glass-brand shadow-glow ring-1 ring-glow/30" : "glass")}>
              {plan.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-grad px-3 py-1 text-xs font-bold text-white">Più scelto</div>}
              <h3 className="font-display text-xl font-bold text-text-hi">{plan.nome}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="font-display text-4xl font-extrabold text-text-hi">{plan.prezzo}</span>
                <span className="mb-1 text-sm text-text-mute">{plan.periodo}</span>
              </div>
              {plan.annuale && <div className="text-xs text-glow">{plan.annuale}</div>}
              <p className="mt-2 text-sm text-text-soft">{plan.tagline}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((f, k) => (
                  <li key={k} className={cn("flex items-start gap-2.5 text-sm", f.ok ? "text-text" : "text-text-mute line-through/0")}>
                    {f.ok ? <Check size={17} className="mt-0.5 shrink-0 text-emerald-400" /> : <X size={17} className="mt-0.5 shrink-0 text-text-mute/60" />}
                    <span className={cn(!f.ok && "opacity-60")}>{f.t}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.highlight ? "primary" : "ghost"} className="mt-6 w-full" onClick={() => choose(plan.id)}>
                {plan.id === "free" ? "Inizia gratis" : `Scegli ${plan.nome}`}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
