import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Standard Vite + TanStack Start configuration.
// Resolves the "@/*" path alias from tsconfig.json, adds Tailwind v4,
// and points TanStack Start's SSR handler at src/server.ts (our error-
// recovery wrapper around the framework's default server entry).
export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
    // "node-server" runs anywhere with Node (self-hosted, Docker, etc.).
    // Vercel and Netlify auto-detect Nitro and override this at deploy
    // time, so this default only matters for local/self-hosted builds.
    // See https://nitro.build/deploy for other presets (e.g. "cloudflare-module", "bun").
    nitro({ preset: "node-server" }),
  ],
});
