import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project sites live under /<repo-name>/.
// Must match your GitHub repo name exactly (replace "portfolio" if yours differs).
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
});
