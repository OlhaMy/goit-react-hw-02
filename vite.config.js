import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      components: "/src/components",
      description: "/src/description",
      feedback: "/src/feedback",
      options: "/src/options",
    },
  },
});
