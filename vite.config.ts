import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// import externalGlobals from "rollup-plugin-external-globals";
import importToCDN, { autoComplete } from "vite-plugin-cdn-import";

const cdn = "https://cdn.staticfile.org/";

const modules = [
  {
    var: "Vue",
    name: "vue",
    path: "vue/3.2.39/vue.global.prod.min.js",
  },
  {
    var: "VueRouter ",
    name: "vue-router",
    path: "vue-router/4.1.5/vue-router.global.min.js",
  },
  {
    name: "vue-demi",
    var: "VueDemi",
    path: "vue-demi/0.13.11/index.iife.min.js",
  },

  {
    name: "pinia",
    var: "Pinia",
    path: "pinia/2.0.22/pinia.iife.min.js",
  },
  {
    name: "element-plus",
    var: "ElementPlus",
    path: "element-plus/2.2.16/index.full.min.js",
    css: "element-plus/2.2.16/index.css",
  },
].map((m) => ({
  ...m,
  path: `${cdn}${m.path}`,
  css: m.css ? `${cdn}${m.css}` : undefined,
}));

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
      modules,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
