// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

function faviconFromLogoPlugin(): Plugin {
  const logo = resolve("src/assets/sugaroholic.png");
  const favicon = resolve("public/favicon.ico");

  return {
    name: "favicon-from-logo",
    buildStart() {
      mkdirSync(resolve("public"), { recursive: true });
      copyFileSync(logo, favicon);
    },
  };
}

export default defineConfig({
  vite: {
    plugins: [faviconFromLogoPlugin()],
  },
  nitro: {
    preset: "cloudflare-pages",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
