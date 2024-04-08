import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Portfolio",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/css/custom.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error can be undefined
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxt/image",
    "@nuxtjs/device",
    "@pinia/nuxt",
    //...
  ],
  routeRules: {
    // pages containing leaflet renders only on client-side
    "/location": { ssr: false },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devtools: { enabled: false },
  // enable type-checking at build time
  typescript: {
    typeCheck: true,
    shim: false,
  },
  // expose config and environment variables
  runtimeConfig: {
    app: {
      googleMapKey: process.env.GOOGLE_MAPS_KEY,
    },
    public: {},
  },
});
