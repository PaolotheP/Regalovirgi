/** @type {import('tailwindcss').Config} */
// SIRIO — sistema grafico a 4 temi (chiaro default, scuro, notturno, auto)
// governato da variabili CSS. I neutri sono canali RGB in :root / .dark / .night
// e vengono consumati come rgb(var(--token) / <alpha-value>): così ogni schermata
// resta coerente in tutti i temi mantenendo le stesse opacità nel codice.
const v = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // superfici tematiche (si ribaltano fra i temi)
        bg: v("--c-bg"),
        "bg-2": v("--c-bg-2"),
        surface: v("--c-surface"),
        line: v("--c-line"),
        fill: v("--c-fill"),
        scrim: v("--c-scrim"),
        text: { hi: v("--c-text-hi"), DEFAULT: v("--c-text"), soft: v("--c-text-soft"), mute: v("--c-text-mute") },
        glow: v("--c-glow"),
        star: v("--c-star"),

        // palette scura statica (per superfici sempre-scure: player, tour)
        void: "#04070f",
        ink: { 950: "#070d1c", 900: "#0a1224", 800: "#0f1c38", 700: "#16274d" },
        navy: { 950: "#050a1a", 900: "#081332", 800: "#0d1d4d", 700: "#123069", 600: "#1a44a0" },

        // primario blu Sirio
        brand: {
          50: "#eaf3ff", 100: "#d3e6ff", 200: "#a8ccff", 300: "#79b0ff", 400: "#4f97ff",
          500: "#2f7bff", 600: "#1e5fe0", 700: "#1a49b8", 800: "#1a3d90", 900: "#0d245c",
        },
        // accento caldo ambra (stelle calde, streak, notturno)
        accent: {
          50: "#fff4ea", 100: "#ffe6cf", 200: "#ffce9e", 300: "#ffb066",
          400: "#ff9a45", 500: "#ff8a3d", 600: "#f26a12", 700: "#c9530a", 800: "#9c4109",
        },
      },
      fontFamily: {
        // serif editoriale per titoli (autorità, "libro")
        display: ["Fraunces", "Georgia", "Cambria", "serif"],
        // serif da lettura per i contenuti giuridici lunghi
        serif: ['"Source Serif 4"', "Georgia", "Cambria", "serif"],
        // sans pulito per l'interfaccia
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "1.25rem", xl3: "1.75rem", "4xl": "2rem" },
      boxShadow: {
        glass: "0 8px 32px rgba(3,8,22,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
        glow: "0 0 0 1px rgba(78,195,255,0.25), 0 18px 60px rgba(47,123,255,0.20)",
        warm: "0 0 0 1px rgba(255,138,61,0.25), 0 18px 60px rgba(242,106,18,0.22)",
        soft: "0 12px 40px rgba(3,8,22,0.5)",
        card: "0 10px 30px rgba(3,8,22,0.4)",
      },
      backgroundImage: {
        "brand-grad": "linear-gradient(135deg, #4ec3ff 0%, #2f7bff 45%, #123069 100%)",
        "brand-soft": "linear-gradient(135deg, rgba(78,195,255,0.18), rgba(47,123,255,0.06))",
        "warm-grad": "linear-gradient(135deg, #ffb066 0%, #ff8a3d 50%, #f26a12 100%)",
        "aurora-grad": "linear-gradient(115deg, #4ec3ff 0%, #2f7bff 42%, #ff8a3d 100%)",
      },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        aurora: { "0%,100%": { transform: "translate(0,0) scale(1)", opacity: "0.55" }, "50%": { transform: "translate(4%,3%) scale(1.12)", opacity: "0.8" } },
        pulseGlow: { "0%,100%": { boxShadow: "0 0 0 0 rgba(78,195,255,0.4)" }, "50%": { boxShadow: "0 0 0 12px rgba(78,195,255,0)" } },
        pulseWarm: { "0%,100%": { boxShadow: "0 0 0 0 rgba(255,154,69,0.45)" }, "50%": { boxShadow: "0 0 0 10px rgba(255,154,69,0)" } },
        spinSlow: { to: { transform: "rotate(360deg)" } },
        riseIn: { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "none" } },
        ripple: { to: { transform: "scale(2.6)", opacity: "0" } },
        twinkle: { "0%,100%": { opacity: "0.35" }, "50%": { opacity: "1" } },
        starPop: { "0%": { transform: "scale(0)", opacity: "0" }, "60%": { transform: "scale(1.35)", opacity: "1" }, "100%": { transform: "scale(1)" } },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 1.6s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-out infinite",
        pulseWarm: "pulseWarm 2.2s ease-out infinite",
        spinSlow: "spinSlow 26s linear infinite",
        riseIn: "riseIn .6s cubic-bezier(.2,.8,.2,1)",
        twinkle: "twinkle 3.2s ease-in-out infinite",
        starPop: "starPop .7s cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
  plugins: [],
};
