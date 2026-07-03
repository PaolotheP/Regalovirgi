/* =========================================================================
   SIRIO — Rete di sicurezza: se una schermata va in errore, niente pagina
   bianca. Un messaggio chiaro e due vie d'uscita (cruscotto / ricarica).
   ========================================================================= */
import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    try { console.error("[sirio] errore schermata:", error, info?.componentStack); } catch {}
  }
  componentDidUpdate(prev) {
    // cambiando pagina si riprova a renderizzare
    if (this.state.error && prev.resetKey !== this.props.resetKey) this.setState({ error: null });
  }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="mx-auto grid min-h-[50vh] max-w-md place-items-center px-6 py-16 text-center">
        <div>
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-line/15 bg-fill/[0.05] text-2xl">✦</div>
          <h2 className="mt-4 font-display text-2xl font-bold text-text-hi">Una stella ha perso l'orbita</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-soft">
            Questa schermata ha avuto un problema, ma i tuoi progressi sono al sicuro.
            Torna al cruscotto o ricarica: di solito basta.
          </p>
          <div className="mt-5 flex justify-center gap-2.5">
            <a href="#/app" onClick={() => this.setState({ error: null })}
              className="rounded-full bg-brand-grad px-5 py-2.5 text-sm font-bold text-white shadow-soft transition hover:brightness-110">
              Torna al cruscotto
            </a>
            <button onClick={() => { try { window.location.reload(); } catch {} }}
              className="rounded-full border border-line/20 px-5 py-2.5 text-sm font-semibold text-text-soft transition hover:text-text-hi">
              Ricarica
            </button>
          </div>
          <p className="mt-4 text-xs text-text-mute">Se succede di nuovo, segnalalo dal Feedback beta: ci aiuta davvero.</p>
        </div>
      </div>
    );
  }
}
