import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" → il build funziona a qualsiasi percorso (root o sottocartella);
// insieme all'HashRouter, Sirio gira su qualunque host statico senza config.
// I chunk separati (vendor/motion/icons/contenuti) migliorano cache e
// parallelismo di caricamento: l'app statica su CDN regge senza sforzo
// decine di utenti simultanei.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        advancedChunks: {
          groups: [
            { name: "vendor", test: /node_modules[\\/](react|react-dom|react-router|scheduler)/ },
            { name: "motion", test: /node_modules[\\/]framer-motion|node_modules[\\/]motion/ },
            { name: "icons", test: /node_modules[\\/]lucide-react/ },
          ],
        },
      },
    },
  },
});
