import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // use this setting in development phase only
  // server: {
  //   proxy: {
  //     "/fee-assessment-categories": {
  //       target: "https://asia-southeast2-sejutacita-app.cloudfunctions.net",
  //       changeOrigin: true,
  //     },
  //     "/fee-assessment-books": {
  //       target: "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books",
  //       changeOrigin: true,
  //     },
  //   },
  // },
  plugins: [react()],
});
