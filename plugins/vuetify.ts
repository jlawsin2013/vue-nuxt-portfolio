import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // ... your configuration
  });
  nuxtApp.vueApp.use(vuetify);
});
