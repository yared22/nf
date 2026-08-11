import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "demo",
  plugins: [react()],
  // HoverLottie.tsx and wave.lottie live in the repo root, above the demo.
  server: { fs: { allow: [".."] } },
});
