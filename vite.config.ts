import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// import externalGlobals from "rollup-plugin-external-globals";
import importToCDN, { autoComplete } from "vite-plugin-cdn-import";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sept/",
  build: {
    outDir: "docs",
    minify: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    importToCDN({
      modules: [
        autoComplete("vue"),
        {
          var: "VueRouter ",
          name: "vue-router",
          path: "https://cdn.jsdelivr.net/npm/vue-router@4.1.5/dist/vue-router.global.min.js",
        },
        {
          name: "vue-demi",
          var: "VueDemi",
          path: "https://cdn.jsdelivr.net/npm/vue-demi@0.13.11/lib/index.iife.min.js",
        },

        {
          name: "pinia",
          var: "Pinia",
          path: "https://cdn.jsdelivr.net/npm/pinia@2.0.22/dist/pinia.iife.min.js",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
