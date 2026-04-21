import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project Pages: https://<user>.github.io/<repo>/ — `base` must be /<repo>/
// CI sets GITHUB_REPOSITORY=owner/repo so renames still work. Local build falls back to /portfolio/.
function productionBase() {
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (repo) return `/${repo}/`;
  return "/portfolio/";
}

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : productionBase(),
  plugins: [react()],
}));
