import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import griffel from "@griffel/vite-plugin";

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    command === "build" && griffel()
  ]
}));