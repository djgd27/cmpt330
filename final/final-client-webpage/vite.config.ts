import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: '/cmpt330/final/final-client-webpage/',
  plugins: [react(), tailwindcss()],
});
